import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [sortBy, setSortBy] = useState("stars");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [repoSearch, setRepoSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [expandedRepoId, setExpandedRepoId] = useState(null);

  const reposPerPage = 5;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(saved);
  }, []);

  const searchUser = async () => {
    try {
      const cleanUsername = username.trim();

      if (!cleanUsername) {
        setError("Please enter a GitHub username");
        return;
      }

      setLoading(true);
      setError("");
      setRepoSearch("");
      setCurrentPage(1);
      setExpandedRepoId(null);

      const response = await axios.get(
  `https://github-repo-explorer-k8sm.onrender.com/api/github/${cleanUsername}`
);
      

      setUser(response.data.user);
      setRepos(response.data.repos);

      setRecentSearches((prev) => {
        const updated = [
          cleanUsername,
          ...prev.filter((item) => item !== cleanUsername),
        ].slice(0, 5);

        localStorage.setItem("recentSearches", JSON.stringify(updated));
        return updated;
      });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("GitHub user not found");
      setUser(null);
      setRepos([]);
    }
  };

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(repoSearch.toLowerCase())
  );

  const sortedRepos = [...filteredRepos].sort((a, b) => {
    if (sortBy === "stars") return b.stargazers_count - a.stargazers_count;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "updated")
      return new Date(b.updated_at) - new Date(a.updated_at);
    return 0;
  });

  const totalPages = Math.ceil(sortedRepos.length / reposPerPage);
  const startIndex = (currentPage - 1) * reposPerPage;
  const paginatedRepos = sortedRepos.slice(
    startIndex,
    startIndex + reposPerPage
  );

  const languageData = Object.entries(
    repos.reduce((acc, repo) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] || 0) + 1;
      }
      return acc;
    }, {})
  ).map(([language, count]) => ({
    language,
    count,
  }));

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="header">
        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

        <h1>GitHub Repo Explorer</h1>
        <p>Search GitHub users and explore repositories</p>
      </div>

      <div className="container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchUser()}
          />

          <button onClick={searchUser}>Search</button>
        </div>

        {recentSearches.length > 0 && (
          <div className="recent-section">
            <h3>Recent Searches</h3>

            {recentSearches.map((item, index) => (
              <button
                key={index}
                className="recent-btn"
                onClick={() => setUsername(item)}
              >
                {item}
              </button>
            ))}
          </div>
        )}
        {!user && !loading && (
  <div className="welcome-card">
    <img
      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      alt="GitHub"
      className="welcome-image"
    />

    <h2>Explore GitHub Profiles</h2>

    <p>
      Search any GitHub username to view profile information,
      repositories, language statistics, repository insights,
      and more.
    </p>
  </div>
)}

        {loading && <div className="loading">Loading GitHub data...</div>}
        {error && <div className="error">{error}</div>}

        {user && !loading && !error && (
          <div className="profile-card horizontal-profile">
            <img src={user.avatar_url} alt="avatar" className="avatar" />

            <div className="profile-info">
              <h2>{user.name || user.login}</h2>
              <p className="username">@{user.login}</p>
              <p className="bio">{user.bio || "No bio available"}</p>

              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="profile-btn"
              >
                View GitHub Profile
              </a>

              <div className="stats-grid">
                <div>
                  <h3>{user.followers}</h3>
                  <p>Followers</p>
                </div>

                <div>
                  <h3>{user.following}</h3>
                  <p>Following</p>
                </div>

                <div>
                  <h3>{user.public_repos}</h3>
                  <p>Repos</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {repos.length > 0 && !loading && !error && (
          <div className="dashboard-grid">
            <div>
              <div className="repo-header">
                <h2>Repositories ({filteredRepos.length})</h2>

                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setCurrentPage(1);
                    setExpandedRepoId(null);
                  }}
                >
                  <option value="stars">Sort by Stars</option>
                  <option value="name">Sort by Name</option>
                  <option value="updated">Sort by Updated</option>
                </select>
              </div>

              <input
                className="repo-search"
                type="text"
                placeholder="Search repositories..."
                value={repoSearch}
                onChange={(e) => {
                  setRepoSearch(e.target.value);
                  setCurrentPage(1);
                  setExpandedRepoId(null);
                }}
              />

              {paginatedRepos.length === 0 ? (
                <p className="empty-message">No repositories found.</p>
              ) : (
                paginatedRepos.map((repo) => (
                  <div key={repo.id} className="repo-card">
                    <div className="repo-title-row">
                      <h3>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {repo.name}
                        </a>
                      </h3>

                      <button
                        className="expand-btn"
                        onClick={() =>
                          setExpandedRepoId(
                            expandedRepoId === repo.id ? null : repo.id
                          )
                        }
                      >
                        {expandedRepoId === repo.id
                          ? "Hide Details"
                          : "View Details"}
                      </button>
                    </div>

                    <p>{repo.description || "No description available"}</p>

                    <div className="repo-meta">
                      <span>⭐ {repo.stargazers_count}</span>
                      <span>🍴 {repo.forks_count}</span>
                      <span>Issues: {repo.open_issues_count}</span>

                      <span className="badge">
                        {repo.language || "Not specified"}
                      </span>
                    </div>

                    <p className="updated-date">
                      Updated: {new Date(repo.updated_at).toLocaleDateString()}
                    </p>

                    {expandedRepoId === repo.id && (
                      <div className="repo-details">
                        <p>
                          <strong>Default Branch:</strong>{" "}
                          {repo.default_branch}
                        </p>

                        <p>
                          <strong>Created At:</strong>{" "}
                          {new Date(repo.created_at).toLocaleDateString()}
                        </p>

                        <p>
                          <strong>Open Issues:</strong>{" "}
                          {repo.open_issues_count}
                        </p>

                        <p>
                          <strong>Forks:</strong> {repo.forks_count}
                        </p>

                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Open Repository on GitHub
                        </a>
                      </div>
                    )}
                  </div>
                ))
              )}

              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => {
                      setCurrentPage(currentPage - 1);
                      setExpandedRepoId(null);
                    }}
                  >
                    Previous
                  </button>

                  <span>
                    Page {currentPage} of {totalPages}
                  </span>

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => {
                      setCurrentPage(currentPage + 1);
                      setExpandedRepoId(null);
                    }}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>

            <div className="language-card">
              <h2>Language Chart</h2>

              {languageData.length === 0 ? (
                <p>No language data available</p>
              ) : (
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={languageData}>
                    <XAxis dataKey="language" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="count" fill="#0969da" />
                  </BarChart>
                </ResponsiveContainer>
              )}

              <h3>Language Stats</h3>

              {languageData.map((item) => (
                <div key={item.language} className="language-row">
                  <span>{item.language}</span>
                  <strong>{item.count} repos</strong>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;