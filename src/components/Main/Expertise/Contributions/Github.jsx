import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";
import { count } from "d3";

function Github() {
  const username = import.meta.env.VITE_APP_USERNAME;
  const [recentCommits, setRecentCommits] = useState([]);

  const pluralize = (count, singular, plural = `${singular}s`) =>
    `${count} ${count === 1 ? singular : plural} `;

  const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    const intervals = [
      ["year", 31536000],
      ["month", 2592000],
      ["day", 86400],
      ["hour", 3600],
      ["min", 60],
      ["second", 1],
    ];

    for (const [label, sec] of intervals) {
      const count = Math.floor(seconds / sec);
      if (count >= 1) {
        return `${pluralize(count, label)} ago`;
      }
    }
    return "Just now";
  };

  const fetchCommits = async () => {
    try {
      // Fetch all repositories
      const repoResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const repos = await repoResponse.json();

      // Fetch the latest commit from each repository
      const commitData = await Promise.all(
        repos.map(async (repo) => {
          const commitResponse = await fetch(
            `https://api.github.com/repos/${username}/${repo.name}/commits`
          );
          const commits = await commitResponse.json();
          return commits.map((commit) => ({
            repoName: repo.name,
            commitMessage: commit.commit.message,
            commitDate: commit.commit.author.date,
            commitUrl: commit.html_url,
          }));
        })
      );

      // Flatten the array of commits and sort by date
      const allCommits = commitData.flat();
      allCommits.sort(
        (a, b) => new Date(b.commitDate) - new Date(a.commitDate)
      );

      // Get the two most recent commits
      const filteredCommits = allCommits.slice(0, 2);
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
            {recentCommits.length ? (
              recentCommits.map(
                ({ repoName, commitMessage, commitDate, commitUrl }, index) => (
                  <div key={index} className="contributions__container grid">
                    <div className="contributions__wrapper">
                      <span>{repoName}</span>
                      <p>{timeAgo(commitDate)}</p>
                    </div>
                    <div className="recent">
                      <span>{commitMessage}</span>
                    </div>
                  </div>
                )
              )
            ) : (
              <li>Loading recent commits...</li>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Github;
