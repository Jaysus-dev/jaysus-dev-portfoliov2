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

  const getTimeSince = (date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds}s ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    }
  };

  useEffect(() => {
    const fetchContributions = async () => {
      console.log(
        "Fetching contributions at:",
        new Date().toLocaleTimeString()
      );
      try {
        const eventsResponse = await axios.get(
          `https://api.github.com/users/${username}/events`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Raw API Data:", eventsResponse.data);

        const contributions = eventsResponse.data
          .filter(
            (event) =>
              event.type === "PushEvent" || event.type === "PullRequestEvent"
          )
          .slice(0, 2)
          .map((event) => ({
            type: event.type,
            repo: event.repo.name.split("/")[1],
            date: new Date(event.created_at).toLocaleDateString(),
            message: event.payload.commits
              ? event.payload.commits[0].message
              : event.payload.pull_request.title,
          }));

        console.log("Filtered Contributions:", contributions);
        setRecentContributions(contributions);
      } catch (err) {
        console.error("Error fetching GitHub contributions:", err);
        if (err.response && err.response.status === 403) {
          setError("Rate limit exceeded. Please try again later.");
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();

    // Set up polling to refetch data every 5 minutes
    const interval = setInterval(fetchContributions, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [username, token]);

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
            {recentContributions.length > 0 ? (
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
