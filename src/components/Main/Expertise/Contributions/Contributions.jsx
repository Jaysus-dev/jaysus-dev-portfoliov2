import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import "./Contributions.css";

function Contributions() {
  const [recentActivity, setRecentActivity] = useState([]);
  const username = "jaysus-dev"; // Replace with your GitHub username
  const token = import.meta.env.VITE_GITHUB_TOKEN; // Access the token from .env

  useEffect(() => {
    // Fetch recent GitHub activity
    fetch(`https://api.github.com/users/${username}/events`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Filter for relevant events (e.g., PushEvent, PullRequestEvent, IssuesEvent)
        const activity = data
          .filter((event) =>
            ["PushEvent", "PullRequestEvent", "IssuesEvent"].includes(
              event.type
            )
          )
          .slice(0, 5); // Show only the 5 most recent events

        setRecentActivity(activity);
      })
      .catch((error) =>
        console.error("Error fetching GitHub activity:", error)
      );
  }, [username, token]);

  return (
    <section className="github section">
      <div className="calendar-wrapper grid">
        <div className="calendar-container">
          {/* Days of the Week */}
          <div className="days-of-week">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>

          {/* GitHub Calendar */}
          <GitHubCalendar
            username={username}
            blockSize={8} // Larger squares
            blockMargin={3} // More spacing between squares
            fontSize={12} // Smaller font size
            color="#0e4429" // Darker green
          />
        </div>

        {/* Recent Contributions */}
        <div className="recent-contributions">
          <h3>Recent Contributions</h3>
          <ul>
            {recentActivity.map((event, index) => {
              let description = "";
              switch (event.type) {
                case "PushEvent":
                  description = `Pushed ${event.payload.commits.length} commits to ${event.repo.name}`;
                  break;
                case "PullRequestEvent":
                  description = `Opened a pull request in ${event.repo.name}`;
                  break;
                case "IssuesEvent":
                  description = `Opened an issue in ${event.repo.name}`;
                  break;
                default:
                  description = `Performed an action in ${event.repo.name}`;
              }
              return (
                <li key={index}>
                  <strong>
                    {new Date(event.created_at).toLocaleDateString()}
                  </strong>
                  : {description}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contributions;
