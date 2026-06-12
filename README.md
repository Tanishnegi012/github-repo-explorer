# 🚀 GitHub Repo Explorer

<div align="center">

### Search GitHub Users • Explore Repositories • Analyze Languages

A modern full-stack web application that helps users discover GitHub profiles, explore repositories, visualize programming language statistics, and analyze repository insights through an intuitive dashboard.

### 🌐 Live Demo

**https://github-repo-explorer-chi-five.vercel.app/**

</div>

---

## 📌 About The Project

GitHub Repo Explorer is a full-stack web application built using React, Node.js, and the GitHub REST API.

The application allows users to search any GitHub profile and instantly access repository information, language analytics, repository statistics, and profile details through a clean and responsive interface.

The project demonstrates practical implementation of:

* REST API Integration
* Full-Stack Development
* State Management
* Data Visualization
* Responsive UI Design
* Deployment & Production Hosting

---

## ✨ Features

### 🔍 GitHub Profile Search

* Search any public GitHub user
* View profile details instantly
* Access GitHub profile directly
* Real-time API integration

### 📂 Repository Explorer

* Browse public repositories
* Repository search functionality
* Sort repositories by stars
* Pagination support
* Repository detail expansion

### 📊 Analytics Dashboard

* Language distribution chart
* Language usage statistics
* Repository count by language
* Visual repository insights

### 🎨 Modern User Experience

* Dark Mode / Light Mode
* Responsive design
* Loading indicators
* Error handling
* Recent search history
* Local storage persistence

---

## 🏗️ System Architecture

```text
User
 │
 ▼
React Frontend
 │
 ▼
Express Backend
 │
 ▼
GitHub REST API
 │
 ▼
Processed Repository Data
```

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Axios
* CSS3
* Recharts

### Backend

* Node.js
* Express.js

### APIs

* GitHub REST API

### Deployment

* Vercel (Frontend)
* Render (Backend)

### Version Control

* Git
* GitHub

---

## 📁 Project Structure

```bash
github-repo-explorer
│
├── client
│   ├── public
│   ├── src
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/Tanishnegi012/github-repo-explorer.git
```

### Move Into Project

```bash
cd github-repo-explorer
```

### Backend Setup

```bash
cd server
npm install
npm start
```

Server:

```bash
http://localhost:5000
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Application:

```bash
http://localhost:5173
```

---

## 📡 API Endpoint

### User Information

```http
GET /api/github/:username
```

Returns:

* User Profile
* Followers
* Following
* Repository Count
* Repository Data

---

## 🎯 Key Highlights

✔ Full Stack Architecture
✔ GitHub REST API Integration
✔ Interactive Language Analytics
✔ Responsive User Interface
✔ Dark/Light Theme Support
✔ Recent Search Persistence
✔ Repository Filtering & Sorting
✔ Production Deployment

---

## 📚 What I Learned

During development of this project, I gained hands-on experience with:

* React Hooks
* Axios API Requests
* Express Server Development
* REST API Consumption
* State Management
* Data Visualization
* Full Stack Deployment
* Git Workflow & Version Control

---

## 🔮 Future Enhancements

* GitHub Organization Support
* Repository Contribution Graphs
* Advanced Repository Filters
* Authentication & User Accounts
* Favorite Repository System
* Export Repository Analytics
* GitHub Activity Tracking

---

## 🌍 Live Deployment

Frontend:

https://github-repo-explorer-chi-five.vercel.app/

Backend:

https://github-repo-explorer-k8sm.onrender.com

---

## 👨‍💻 Author

### Tanish Negi

B.Tech Computer Science Engineering (2026)

GitHub: https://github.com/Tanishnegi012

---

## ⭐ Show Your Support

If you found this project useful or interesting:

* ⭐ Star this repository
* 🍴 Fork this repository
* 📢 Share your feedback
