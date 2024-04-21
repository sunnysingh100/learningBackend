require("dotenv").config();
// import express from "express";
const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  login: "sunnysingh100",
  id: 121339249,
  node_id: "U_kgDOBzt9cQ",
  avatar_url: "https://avatars.githubusercontent.com/u/121339249?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/sunnysingh100",
  html_url: "https://github.com/sunnysingh100",
  followers_url: "https://api.github.com/users/sunnysingh100/followers",
  following_url:
    "https://api.github.com/users/sunnysingh100/following{/other_user}",
  gists_url: "https://api.github.com/users/sunnysingh100/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/sunnysingh100/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/sunnysingh100/subscriptions",
  organizations_url: "https://api.github.com/users/sunnysingh100/orgs",
  repos_url: "https://api.github.com/users/sunnysingh100/repos",
  events_url: "https://api.github.com/users/sunnysingh100/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/sunnysingh100/received_events",
  type: "User",
  site_admin: false,
  name: "Sunny Singh",
  company: null,
  blog: "",
  location: "Lucknow,Uttar Pradesh, India",
  email: null,
  hireable: null,
  bio: "Hi, this is Sunny. I am  react developer . Currently I am delving into various facets and avenues of React .",
  twitter_username: null,
  public_repos: 12,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2022-12-24T10:07:03Z",
  updated_at: "2024-04-20T01:21:51Z",
};
app.get("/", (req, res) => {
  res.send("Hello World hai!");
});

app.get("/twitter", (req, res) => {
  res.send("ji tw");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
