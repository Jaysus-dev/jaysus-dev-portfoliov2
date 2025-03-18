import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";
import axios from "axios";

const Github = () => {
  const username = import.meta.env.VITE_APP_USERNAME;
  const token = import.meta.env.VITE_APP_GITHUB_TOKEN;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recentContributions, setRecentContributions] = useState([]);

  // Function to calculate time since contribution
  const getTimeSince = (date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  };

  // Fetch recent contributions
  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch GitHub events with timestamp cache buster
        const eventsResponse = await axios.get(
          `https://api.github.com/users/${username}/events?timestamp=${new Date().getTime()}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log("GitHub API Response:", eventsResponse.data); // Debugging

        // Filter and map the events to get recent contributions
        const contributions = eventsResponse.data
          .filter(
            (event) =>
              event.type === "PushEvent" || event.type === "PullRequestEvent"
          )
          .slice(0, 2) // Get the last 2 contributions
          .map((event) => ({
            type: event.type,
            repo: event.repo.name.split("/")[1], // Extract only the repository name
            date: new Date(event.created_at), // Store the contribution date
            message:
              event.type === "PushEvent" && event.payload.commits?.length > 0
                ? event.payload.commits[0].message
                : event.type === "PullRequestEvent"
                ? event.payload.pull_request?.title || "No title"
                : "No commit message available",
          }));

        setRecentContributions(contributions);
      } catch (err) {
        console.error("Error fetching GitHub contributions:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username, token]); // Include `token` in dependencies

  return (
    <section className="git section__margin">
      <h2 className="section__title">GitHub.</h2>
      <span className="section__subtitle">Recent Contributions</span>
      <div className="gitcalendar grid">
        <div className="gitcalendar__container">
          <div className="gitcalendar__wrapper">
            <GitHubCalendar
              username={username}
              color="hsl(120, 100%, 50%)"
              colorScheme="dark"
              blockSize={10}
              blockMargin={4}
              fontSize={12}
              showWeekdayLabels
              showMonthLabels
              year={2025}
              transformData={(data) => data}
              style={{
                border: ".1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
              }}
            />
          </div>
        </div>
        <div className="contributions__top grid">
          <div className="contributions__header">
            <h3>Contribution Activity</h3>
            <span>
              <i>Note: This is a new GitHub</i>
            </span>
          </div>
          <div className="contributions__bottom">
            {loading ? (
              <p>Loading GitHub contributions...</p>
            ) : error ? (
              <p>Error loading GitHub contributions: {error}</p>
            ) : recentContributions.length > 0 ? (
              <ul>
                {recentContributions.map((contribution, index) => (
                  <div className="contributions__container grid" key={index}>
                    <div className="contributions__wrapper">
                      <li>{contribution.repo}</li>
                      <li>{getTimeSince(contribution.date)}</li>
                    </div>
                    <div className="recent">
                      {contribution.type === "PushEvent"
                        ? "Commit"
                        : "Pull Request"}
                      : {contribution.message}
                    </div>
                  </div>
                ))}
              </ul>
            ) : (
              <p>No recent contributions found.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github;
