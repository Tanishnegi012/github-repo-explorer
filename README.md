# 🚀 GitHub Repo Explorer

A full-stack web application that enables users to search GitHub profiles and explore repositories in real time. Built using React, Node.js, and Express, the application provides detailed GitHub user insights, repository analytics, language statistics, sorting, pagination, repository details, recent searches, server-side caching, and dark/light theme support through a modern and responsive interface.

---

## 🌐 Live Demo

### Frontend

https://github-repo-explorer-chi-five.vercel.app/

### Backend API

https://github-repo-explorer-k8sm.onrender.com/

---

## 📌 Project Overview

GitHub Repo Explorer helps users quickly discover GitHub profiles and repositories while providing useful insights such as profile information, repository statistics, language distribution, repository filtering, sorting options, and repository details.

The application integrates the GitHub REST API through a custom Express.js backend and presents the data through a clean, responsive, and interactive dashboard.

---

## ✨ Features

### 👤 GitHub Profile Search

* Search any public GitHub username
* View profile avatar
* View name and username
* View bio information
* View followers count
* View following count
* View public repository count
* Direct link to GitHub profile

### 📂 Repository Explorer

* Display public repositories
* Repository search functionality
* Sort repositories by Stars
* Sort repositories by Name
* Sort repositories by Last Updated
* Repository pagination
* Repository language badges

### 📊 Repository Analytics

* Language distribution chart
* Language statistics summary
* Repository count by language
* Visual analytics dashboard

### 📄 Repository Insights

* Repository description
* Star count
* Fork count
* Open issues count
* Default branch information
* Repository creation date
* Last updated date
* Direct GitHub repository link
* Expand/Collapse repository details

### 🎨 User Experience

* Responsive design
* Dark Mode / Light Mode support
* Loading states
* Error handling
* Empty state UI
* Recent search history using LocalStorage
* Server-side caching for optimized API requests
* Reduced GitHub API calls for repeated searches
* Improved response performance
* Clean and modern user interface

---

## 🏗️ System Architecture

```text
Frontend (React + Vite)
        │
        ▼
Backend (Node.js + Express)
        │
        ▼
GitHub REST API
```

The React frontend communicates with an Express.js backend API which acts as a proxy between the client application and GitHub's REST API.

The backend also implements in-memory caching to temporarily store recently requested GitHub user data. When the same username is searched again within the cache duration, the cached response is returned instead of making another GitHub API request. This improves performance, reduces API usage, and helps prevent rate-limit issues.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Axios
* Chart.js / Recharts
* CSS3

### Backend

* Node.js
* Express.js
* Axios

### Deployment

* Vercel (Frontend Hosting)
* Render (Backend Hosting)

### External API

* GitHub REST API

---

## 🤔 Why These Technologies?

### React.js

React was chosen because of its component-based architecture, reusability, and efficient UI rendering capabilities.

### Vite

Vite provides faster development startup times and optimized production builds compared to traditional build tools.

### Express.js

Express.js offers a lightweight and flexible framework for creating backend APIs and handling HTTP requests.

### Node.js

Node.js enables JavaScript to be used across both frontend and backend development, simplifying the development workflow.

### Axios

Axios simplifies API communication and provides consistent request and response handling.

### Chart.js / Recharts

Used to visualize language statistics and repository analytics through interactive charts.

### GitHub REST API

Provides real-time GitHub profile and repository data.

### Vercel

Chosen for fast and reliable frontend deployment with automatic builds and updates.

### Render

Used to host the backend API with minimal configuration and easy deployment.

---

## 📁 Project Structure

```text
github-repo-explorer
│
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── routes
│   ├── index.js
│   └── package.json
│
├── .gitignore
└── README.md
```

### Folder Overview

#### client/

Contains the React frontend application responsible for rendering the user interface and displaying repository analytics.

#### server/

Contains the Express.js backend API responsible for communicating with the GitHub REST API.

#### components/

Reusable React components used throughout the application.

#### styles/

Application styling and theme configuration.

---

## 🔌 API Documentation

### Get GitHub User and Repository Data

**Method**

```http
GET
```

**Endpoint**

```http
/api/github/:username
```

### Path Parameters

| Parameter | Type   | Description                      |
| --------- | ------ | -------------------------------- |
| username  | string | Public GitHub username to search |

### Example Request

```http
GET /api/github/facebook
```

### Request Body

```json
{}
```

### Success Response (200)

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
      "stargazers_count": 235000,
      "forks_count": 48500,
      "open_issues_count": 1100,
      "default_branch": "main",
      "created_at": "2013-05-24T16:15:54Z",
      "updated_at": "2026-06-12T10:00:00Z",
      "html_url": "https://github.com/facebook/react"
    }
  ]
}
```

### Error Response (404)

```json
{
  "message": "GitHub user not found"
}
```

### Error Response (500)

```json
{
  "message": "Internal Server Error"
}
```

---

## ⚙️ Running Locally

### Clone Repository

```bash
git clone https://github.com/Tanishnegi012/github-repo-explorer.git
```

### Navigate Into Project

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

### Install Backend Dependencies

```bash
cd ../server
npm install
```

### Start Backend

```bash
npm start
```

Frontend runs on:

```text
http://localhost:5173
```

Backend runs on:

```text
http://localhost:5000
```

---

## 🎯 Next Steps

The primary focus of this project was to implement all core requirements while maintaining a clean architecture, responsive design, and smooth user experience.

### Features Not Implemented

* Automated unit and integration testing
* Debounced search suggestions while typing
* Advanced repository filtering options

### Future Enhancements

* Add GitHub OAuth authentication
* Add repository comparison tools
* Add organization-level GitHub analytics
* Add contributor statistics and activity tracking
* Add advanced filtering and search capabilities
* Implement CI/CD workflows using GitHub Actions
* Improve accessibility and keyboard navigation support

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
