import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";

function Github() {
  const username = import.meta.env.VITE_APP_USERNAME;
  const [recentCommits, setRecentCommits] = useState([]);

  const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    const intervals = [
      ["years", 31536000],
      ["months", 2592000],
      ["days", 86400],
      ["hours", 3600],
      ["minutes", 60],
    ];

    for (const [label, sec] of intervals) {
      const count = Math.floor(seconds / sec);
      if (count >= 1) return `${count} ${label} ago`;
    }
    return "Just now";
  };

  const fetchCommits = async () => {
    try {
      // Fetch the most recently updated repositories
      const repoResponse = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=2`
      );
      const repos = await repoResponse.json();

      // Fetch the latest commit from each repository
      const commitData = await Promise.all(
        repos.map(async (repo) => {
          const commitResponse = await fetch(
            `https://api.github.com/repos/${username}/${repo.name}/commits`
          );
          const commits = await commitResponse.json();
          return commits[0]
            ? {
                repoName: repo.name,
                commitMessage: commits[0].commit.message,
                commitDate: timeAgo(commits[0].commit.author.date),
                commitUrl: commits[0].html_url,
              }
            : null;
        })
      );

      // Filter out null values and set the state
      const filteredCommits = commitData.filter(Boolean);
      setRecentCommits(filteredCommits);
    } catch (error) {
      console.error("Error fetching commits:", error);
    }
  };

  useEffect(() => {
    fetchCommits();
  }, []);

  return (
    <section className="git section__margin ">
      <h2 className="section__title">GitHub.</h2>
      <span className="section__subtitle">Recent Contributions</span>
      <div className="gitcalendar grid">
        <div className="gitcalendar__container ">
          <div className="gitcalendar__wrapper ">
            <GitHubCalendar
              username={username}
              color="hsl(120, 100%, 50%)"
              colorScheme="dark"
              blockSize={10}
              blockMargin={4}
              fontSize={12}
              showWeekdayLabels={true}
              showMonthLabels={true}
              year={new Date().getFullYear()}
              transformData={(data) => data}
              style={{
                border: ".1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
              }}
            />
          </div>
        </div>
        <div className="contributions__top">
          <div className="contributions__header">
            <h3>Contribution Activity</h3>
            <span>
              <i>note: this is a new github </i>
            </span>
          </div>
          <div className="contributions__bottom">
            <ul>
              {recentCommits.length ? (
                recentCommits.map(
                  (
                    { repoName, commitMessage, commitDate, commitUrl },
                    index
                  ) => (
                    <div key={index} className="contributions__container grid">
                      <div className="contributions__wrapper">
                        <li>{repoName}</li>
                        <li>{commitDate}</li>
                      </div>
                      <div className="recent">
                        <li>
                          <a
                            href={commitUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {commitMessage}
                          </a>
                        </li>
                      </div>
                    </div>
                  )
                )
              ) : (
                <li>Loading recent commits...</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Github;
