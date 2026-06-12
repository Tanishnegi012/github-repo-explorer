const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const cache = {};

app.get("/", (req, res) => {
  res.send("GitHub Repo Explorer API is running");
});

app.get("/api/github/:username", async (req, res) => {
  try {
    const { username } = req.params;

    if (cache[username] && Date.now() - cache[username].timestamp < 60000) {
      console.log(`Serving ${username} from cache`);
      return res.json(cache[username].data);
    }

    const userResponse = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const reposResponse = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=100`
    );

    const result = {
      user: userResponse.data,
      repos: reposResponse.data,
    };

    cache[username] = {
      data: result,
      timestamp: Date.now(),
    };

    res.json(result);
  } catch (error) {
    res.status(404).json({
      message: "GitHub user not found",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});