import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./Github.css";
import axios from "axios";

const GithubContributions = ({ username }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recentContributions, setRecentContributions] = useState([]);

  // Function to calculate time since contribution
  const getTimeSince = (date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
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

  // Fetch recent contributions
  useEffect(() => {
    const fetchContributions = async () => {
      try {
        // Fetch GitHub events
        const eventsResponse = await axios.get(
          `https://api.github.com/users/${username}/events`
        );

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
            message: event.payload.commits
              ? event.payload.commits[0].message
              : event.payload.pull_request.title,
          }));

        setRecentContributions(contributions);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username]);

  if (loading) {
    return <p>Loading GitHub contributions...</p>;
  }

  if (error) {
    return <p>Error loading GitHub contributions: {error}</p>;
  }

  return (
    <div className="git  grid">
      <div className="gitcalendar__container">
        <div className="gitcalendar__wrapper ">
          <div className="gitcalendar__header">
            <h3>GitHub Contributions</h3>
            <a className="gitcalendar__profile" href="">
              GitHub Profile
              <MdOutlineArrowOutward />
            </a>
          </div>
          <GitHubCalendar
            username={username}
            color="hsl(120, 100%, 50%)" // Custom color
            colorScheme="dark" // dark theme
            blockSize={10} // Size of each block
            blockMargin={4} // Margin between blocks
            fontSize={12} // Font size for labels
            showWeekdayLabels={true} // Show weekday labels
            showMonthLabels={true} // Show month labels
            year={2025} // Show the last year
            transformData={(data) => data} // Custom transform function
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
            <i>note: This is a new GitHub </i>
          </span>
        </div>
        <div className="contributions__bottom">
          {recentContributions.length > 0 ? (
            <ul>
              {recentContributions.map((contribution, index) => (
                <div className="contributions__container grid" key={index}>
                  <div className="contributions__wrapper ">
                    <li>{contribution.repo}</li>
                    <li>{getTimeSince(contribution.date)}</li>{" "}
                    {/* Display time since contribution */}
                  </div>
                  <div className="recent">
                    {" "}
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
  );
};

export default GithubContributions;
