# 🚀 GitHub Repo Explorer

A full-stack web application that enables users to search GitHub profiles and analyze repositories in real time. Built with React, Node.js, and Express, the application provides detailed GitHub user insights, repository analytics, language statistics, interactive charts, pagination, repository filtering, and dark/light theme support.

## 🔗 Live Demo

**Frontend:**  
https://github-repo-explorer-chi-five.vercel.app/

**Backend API:**  
https://github-repo-explorer-k8sm.onrender.com/

---

## ✨ Features

### 👤 GitHub User Search
- Search any public GitHub username
- View profile information, avatar, bio, and statistics
- Access GitHub profile directly

### 📊 Repository Analytics
- Display repositories with detailed information
- Repository search and filtering
- Sort repositories by stars
- Pagination for large repository collections
- Repository language classification

### 📈 Language Statistics
- Interactive language chart
- Repository count by language
- Visual analytics dashboard

### 📂 Repository Insights
- Fork count
- Open issues
- Default branch
- Creation date
- Direct GitHub repository links

### 🎨 Modern User Experience
- Dark Mode / Light Mode
- Responsive design
- Loading states
- Error handling
- Recent search history
- Clean and intuitive interface

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

## 🏗️ Architecture

```text
Client (React)
      │
      ▼
Express Backend API
      │
      ▼
GitHub REST API
```

The frontend communicates with an Express backend which acts as a proxy layer for GitHub API requests. The backend handles API communication and returns processed data to the frontend.

---

## 📁 Project Structure

```text
github-repo-explorer/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── index.js
│   ├── routes/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🔌 API Documentation

### Get User Profile and Repositories

```http
GET /api/github/:username
```

### Example

```http
GET /api/github/facebook
```

### Success Response

```json
{
  "user": {},
  "repos": []
}
```

### Error Response

```json
{
  "message": "User not found"
}
```

---

## ⚙️ Run Locally

### Clone Repository

```bash
git clone https://github.com/Tanishnegi012/github-repo-explorer.git
cd github-repo-explorer
```

### Backend Setup

```bash
cd server
npm install
npm start
```

Backend runs on:

```text
http://localhost:5000
```

### Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

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
