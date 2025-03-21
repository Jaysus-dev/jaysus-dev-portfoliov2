import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";

function Github() {
  const username = import.meta.env.VITE_APP_USERNAME;
  const [recentCommits, setRecentCommits] = useState([]);

  // Helper function to calculate time ago
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

  // Fetch all repositories for the user
  const fetchRepositories = async () => {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    return response.json();
  };

  // Fetch the latest commits for a given repository
  const fetchCommitsForRepository = async (repo) => {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repo.name}/commits`
    );
    const commits = await response.json();
    return commits.map((commit) => ({
      repoName: repo.name,
      commitMessage: commit.commit.message,
      commitDate: commit.commit.author.date,
      commitUrl: commit.html_url,
    }));
  };

  // Fetch and process all commits
  const fetchAllCommits = async () => {
    try {
      const repos = await fetchRepositories();
      const commitData = await Promise.all(
        repos.map((repo) => fetchCommitsForRepository(repo))
      );
      const allCommits = commitData.flat();
      allCommits.sort(
        (a, b) => new Date(b.commitDate) - new Date(a.commitDate)
      );
      setRecentCommits(allCommits.slice(0, 2));
    } catch (error) {
      console.error("Error fetching commits:", error);
    }
  };

  useEffect(() => {
    fetchAllCommits();
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
