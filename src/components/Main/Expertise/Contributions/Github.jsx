import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar"; // Import GitHub calendar component
import "./Github.css"; // Import CSS for styling
import axios from "axios"; // Import axios for making HTTP requests

const Github = () => {
  // Fetch GitHub username and token from environment variables
  const username = import.meta.env.VITE_APP_USERNAME;
  const token = import.meta.env.VITE_APP_GITHUB_TOKEN;

  // State variables for loading, error, and recent contributions
  const [loading, setLoading] = useState(true); // Tracks if data is being fetched
  const [error, setError] = useState(null); // Stores any error that occurs
  const [recentContributions, setRecentContributions] = useState([]); // Stores recent contributions

  // If username or token is missing, show an error message
  if (!username || !token) {
    return <p>Error: GitHub username or token is missing.</p>;
  }

  // Function to calculate how much time has passed since a given date
  const getTimeSince = (date) => {
    const now = new Date(); // Get the current date and time
    const diffInSeconds = Math.floor((now - date) / 1000); // Calculate difference in seconds

    // Convert the difference into a human-readable format
    if (diffInSeconds < 60) {
      return `${diffInSeconds}s ago`; // Less than 1 minute
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60); // Less than 1 hour
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600); // Less than 1 day
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400); // More than 1 day
      return `${days} day${days > 1 ? "s" : ""} ago`;
    }
  };

  // useEffect hook to fetch recent contributions when the component mounts
  useEffect(() => {
    const fetchContributions = async () => {
      try {
        // Fetch GitHub events for the user
        const eventsResponse = await axios.get(
          `https://api.github.com/users/${username}/events?timestamp=${new Date().getTime()}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Authenticate with GitHub token
            },
          }
        );

        // Filter and map the events to get recent contributions
        const contributions = eventsResponse.data
          .filter(
            (event) =>
              event.type === "PushEvent" || event.type === "PullRequestEvent" // Only include Push and Pull Request events
          )
          .slice(0, 2) // Limit to the last 2 contributions
          .map((event) => ({
            type: event.type, // Type of event (PushEvent or PullRequestEvent)
            repo: event.repo.name.split("/")[1], // Extract repository name
            date: new Date(event.created_at), // Convert event date to a Date object
            message: event.payload.commits
              ? event.payload.commits[0].message // Use commit message for PushEvent
              : event.payload.pull_request.title, // Use PR title for PullRequestEvent
          }));

        // Update the state with the fetched contributions
        setRecentContributions(contributions);
      } catch (err) {
        // If an error occurs, set the error state
        setError(err.message);
      } finally {
        // Set loading to false once the fetch is complete
        setLoading(false);
      }
    };

    // Call the fetchContributions function
    fetchContributions();
  }, [username, token]); // Re-run effect if username or token changes

  // Render the component
  return (
    <section className="git section__margin ">
      <h2 className="section__title">GitHub.</h2>
      <span className="section__subtitle">Recent Contributions</span>
      <div className="gitcalendar grid">
        <div className="gitcalendar__container ">
          <div className="gitcalendar__wrapper ">
            {/* GitHub Calendar Component */}
            <GitHubCalendar
              username={username} // GitHub username
              color="hsl(120, 100%, 50%)" // Custom color for the calendar
              colorScheme="dark" // Use dark theme
              blockSize={10} // Size of each calendar block
              blockMargin={4} // Margin between blocks
              fontSize={12} // Font size for labels
              showWeekdayLabels={true} // Show weekday labels
              showMonthLabels={true} // Show month labels
              year={new Date().getFullYear()} // Display the current year
              transformData={(data) => data} // Custom transform function (not used here)
              style={{
                border: ".1px solid #ccc", // Add a border
                borderRadius: "8px", // Round the corners
                padding: "16px", // Add padding
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
            {/* Display recent contributions if available */}
            {recentContributions.length > 0 ? (
              <ul>
                {recentContributions.map((contribution, index) => (
                  <div className="contributions__container grid" key={index}>
                    <div className="contributions__wrapper ">
                      <li>{contribution.repo}</li> {/* Repository name */}
                      <li>{getTimeSince(contribution.date)}</li>{" "}
                      {/* Time since contribution */}
                    </div>
                    <div className="recent">
                      {/* Display "Commit" or "Pull Request" based on event type */}
                      {contribution.type === "PushEvent"
                        ? "Commit"
                        : "Pull Request"}
                      : {contribution.message}{" "}
                      {/* Commit message or PR title */}
                    </div>
                  </div>
                ))}
              </ul>
            ) : (
              // Show a message if no contributions are found
              <p>No recent contributions found.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github; // Export the component
