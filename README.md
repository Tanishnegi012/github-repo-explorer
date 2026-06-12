# GitHub Repo Explorer

A full-stack web application that allows users to search for any public GitHub profile and explore repository information in a clean and interactive dashboard. The application fetches real-time data from the GitHub REST API through a custom Express.js backend and provides repository analytics, sorting, filtering, pagination, language statistics, and theme switching. This project was built as a full-stack coding exercise focusing on API integration, user experience, and clean architecture.

---

## 🚀 Live Demo

### Frontend
https://github-repo-explorer-chi-five.vercel.app/

### Backend API
https://github-reo-explorer-k8sm.onrender.com/

---

## ✨ Features

### GitHub Profile Search
- Search any public GitHub username
- Display profile avatar
- Display name and username
- Display bio information
- View followers count
- View following count
- View public repository count
- Direct link to GitHub profile

### Repository Explorer
- Display public repositories
- Search repositories by name
- Sort repositories by Stars
- Sort repositories by Name
- Sort repositories by Last Updated
- Repository pagination
- Repository language badges

### Repository Insights
- Repository description
- Star count
- Fork count
- Open issues count
- Default branch information
- Repository creation date
- Last updated date
- Direct GitHub repository link
- Expand/Collapse repository details

### Analytics Dashboard
- Language distribution chart
- Language statistics summary
- Repository count per language

### User Experience
- Responsive design
- Loading states
- Error handling
- Empty state UI
- Recent search history using LocalStorage
- Dark Mode / Light Mode support
- Clean and modern interface

### System Architecture
- React Frontend
- Express Backend API
- GitHub REST API Integration

---

## 🛠 Tech Stack

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
- Vercel (Frontend Hosting)
- Render (Backend Hosting)

### External API
- GitHub REST API

---

## 🤔 Why These Technologies?

### React.js
React was used to build a reusable and component-based user interface. It simplifies state management and enables a clean application structure.

### Vite
Vite provides extremely fast development startup and optimized production builds, improving the overall development experience.

### Express.js
Express.js was chosen to create a lightweight backend API that acts as a secure proxy between the frontend and GitHub's REST API.

### Axios
Axios simplifies API communication and provides consistent request and response handling across both frontend and backend.

### Chart.js
Chart.js was used to visualize language statistics and repository analytics in an interactive way.

### GitHub REST API
The GitHub REST API provides real-time profile and repository data for public GitHub users.

### Vercel
Vercel was selected for frontend deployment because of its simple workflow, automatic deployments, and excellent React support.

### Render
Render was selected for backend deployment because it provides free and reliable hosting for Node.js applications.

---

## 🏗 Architecture

The application follows a client-server architecture.

The React frontend communicates with an Express.js backend API. The backend acts as a proxy layer between the client application and the GitHub REST API. This approach improves security, centralizes error handling, and keeps API communication organized.

```
Frontend (React + Vite)
        │
        ▼
Backend (Node.js + Express)
        │
        ▼
GitHub REST API
```

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
│   │
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
└── package.json
```

### Folder Overview

#### client/
Contains the React frontend application responsible for the user interface, repository visualization, analytics dashboard, and theme management.

#### server/
Contains the Express.js backend API responsible for communicating with the GitHub REST API and returning formatted data to the frontend.

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

**Path Parameters**

| Parameter | Type | Description |
|-----------|------|-------------|
| username | string | Public GitHub username |

---

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
  "message": "User not found"
}
```

### Error Response (500)

```json
{
  "message": "Internal Server Error"
}
```

---

## 💻 Running Locally

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

## 🎯 Future Improvements

- Add server-side caching to reduce GitHub API requests
- Implement debounced search suggestions
- Add repository language filtering
- Add GitHub organization analytics
- Add contributor statistics
- Add repository activity charts
- Add unit and integration tests
- Add advanced repository comparison tools

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

## 🚀 Future Improvements

- GitHub OAuth Authentication
- Advanced repository filtering
- Repository comparison tool
- Contribution graph visualization
- Bookmark favorite profiles
- Export analytics reports
- Trending repository recommendations

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
