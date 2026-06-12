# GitHub Repo Explorer

A full-stack GitHub Repository Explorer built with React, Node.js, and Express that allows users to search for any public GitHub profile and explore repositories with advanced analytics. The application provides profile insights, repository statistics, language distribution charts, sorting options, pagination, dark/light mode, recent searches, and detailed repository information through a clean and responsive user interface.

---

## 🔗 Live Demo

### Frontend
https://github-repo-explorer-chi-five.vercel.app/

### Backend API
https://github-repo-explorer-k8sm.onrender.com/

---

## ✨ Features

### GitHub Profile Search
- Search any public GitHub username
- Display profile avatar
- Display name and username
- Display bio information
- Display followers count
- Display following count
- Display public repository count
- Direct link to GitHub profile

### Repository Explorer
- Display repository list
- Repository search/filter functionality
- Sort repositories by Stars
- Sort repositories by Name
- Sort repositories by Last Updated
- Repository pagination
- Repository language badges
- Repository descriptions
- Repository star count
- Repository fork count
- Repository open issues count
- Repository last updated date
- Direct repository links
- Expand/Collapse repository details

### Repository Insights
- Language distribution chart
- Language statistics summary
- Repository count per language
- Analytics dashboard

### User Experience
- Responsive design
- Loading states
- Error handling
- Empty state UI
- Dark Mode
- Light Mode
- Recent search history using Local Storage
- Server-side caching for improved performance
- Reduced GitHub API requests
- Faster repeated searches

---

## 🏗️ System Architecture

React Frontend  
⬇  
Express Backend API  
⬇  
GitHub REST API

The frontend communicates with an Express backend that acts as a proxy layer between the client application and the GitHub REST API. This architecture improves security, centralizes API handling, enables caching, and provides better error management.

---

## ⚡ Caching Strategy

The backend implements an in-memory server-side caching mechanism with a 60-second TTL (Time To Live).

When a user searches for a GitHub username:

1. The backend checks whether the requested data already exists in cache.
2. If cached data is available and has not expired, the cached response is returned immediately.
3. If no cached data exists, the backend fetches fresh data from the GitHub API.
4. The response is stored in cache for 60 seconds before expiring.

### Benefits

- Faster response times for repeated searches
- Reduced GitHub API requests
- Lower risk of hitting GitHub API rate limits
- Improved overall application performance

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Axios
- Chart.js
- CSS3

### Backend
- Node.js
- Express.js
- Axios

### Deployment
- Vercel
- Render

### External API
- GitHub REST API

---

## 🤔 Why These Technologies?

### React.js
Used for building a reusable and component-based user interface with efficient state management.

### Vite
Chosen for its fast development server, optimized production builds, and modern tooling.

### Express.js
Provides a lightweight and flexible backend framework for handling API requests and responses.

### Node.js
Enables JavaScript development across both frontend and backend environments.

### Axios
Simplifies HTTP requests and API communication.

### Chart.js
Used to visualize language statistics and repository analytics.

### GitHub REST API
Provides real-time GitHub profile and repository information.

### Vercel
Selected for fast and reliable frontend deployment.

### Render
Used for backend hosting with simple deployment and free-tier support.

---

## 📂 Project Structure

```text
github-repo-explorer/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── routes/
│   ├── index.js
│   └── package.json
│
├── .gitignore
├── README.md
└── API Documentation
```

---

## 📡 API Documentation

### Get GitHub User and Repository Data

**Method**

```http
GET
```

**Endpoint**

```http
/api/github/:username
```

**Example Request**

```http
GET /api/github/facebook
```

**Path Parameters**

| Parameter | Type | Description |
|------------|--------|-------------|
| username | string | GitHub username to search |

**Request Body**

```json
{}
```

### Success Response

```json
{
  "user": {
    "login": "facebook",
    "name": "Meta",
    "avatar_url": "https://avatars.githubusercontent.com/u/69631",
    "bio": "We are working to build community through open source technology.",
    "followers": 35805,
    "following": 0,
    "public_repos": 165,
    "html_url": "https://github.com/facebook"
  },
  "repos": [
    {
      "name": "react",
      "description": "The library for web and native user interfaces.",
      "language": "JavaScript",
      "stargazers_count": 240000,
      "forks_count": 50000,
      "open_issues_count": 1200,
      "default_branch": "main",
      "created_at": "2013-05-24T16:15:54Z",
      "updated_at": "2026-06-12T10:30:00Z",
      "html_url": "https://github.com/facebook/react"
    }
  ]
}
```

### User Not Found Response

```json
{
  "message": "GitHub user not found"
}
```

### Server Error Response

```json
{
  "message": "Internal Server Error"
}
```

---

## 🚀 How To Run Locally

### Clone Repository

```bash
git clone https://github.com/Tanishnegi012/github-repo-explorer.git
```

### Navigate to Project

```bash
cd github-repo-explorer
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Start Frontend

```bash
npm run dev
```

Frontend runs at:

```http
http://localhost:5173
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

### Start Backend

```bash
npm start
```

Backend runs at:

```http
http://localhost:5000
```

---

## 🎯 Next Steps

The primary focus of this project was to implement all core requirements while maintaining a clean architecture, responsive design, and reliable API integration.

### Features Not Implemented

- Automated unit and integration testing
- Debounced search suggestions while typing
- Advanced repository filtering options

### Future Enhancements

- GitHub OAuth authentication
- Repository comparison tools
- Organization-level GitHub analytics
- Contributor activity tracking
- Advanced filtering and search capabilities
- CI/CD workflows using GitHub Actions
- Improved accessibility and keyboard navigation support

---

## 📸 Screenshots

### Home Dashboard

<img width="1891" height="899" alt="Screenshot 2026-06-12 085952" src="https://github.com/user-attachments/assets/922e1686-b362-4e37-a595-ade53cda4242" />

### User Profile Overview

<img width="1871" height="899" alt="Screenshot 2026-06-12 090028" src="https://github.com/user-attachments/assets/feb6dabb-9165-4264-af1d-fad2b672ac8c" />

### Repository Analytics & Language Statistics

<img width="1881" height="886" alt="Screenshot 2026-06-12 090051" src="https://github.com/user-attachments/assets/ae581377-71bd-47be-b08c-a379cac5ae57" />

### Dark Mode Interface

<img width="1878" height="888" alt="Screenshot 2026-06-12 090409" src="https://github.com/user-attachments/assets/0fde3ee5-5a6c-41ac-a80a-237491202434" />

---

## 📋 Commit History

This project was developed incrementally following best development practices:

- Initial project setup
- Set up Express backend and GitHub API proxy
- Set up React frontend with Vite
- Build GitHub profile and repository explorer
- Prepare backend for deployment

---

## 👨‍💻 Author

**Tanish Negi**

B.Tech Computer Science Engineering (2026)

GitHub: https://github.com/Tanishnegi012

---

## 📄 License

Licensed under the MIT License.
