require('dotenv').config()
const express = require('express')
const app = express()
const port = 8080

const githubData = {
  login: "UmerMemon320940",
  id: 180817156,
  node_id: "U_kgDOCscNBA",
  avatar_url: "https://avatars.githubusercontent.com/u/180817156?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/UmerMemon320940",
  html_url: "https://github.com/UmerMemon320940",
  followers_url: "https://api.github.com/users/UmerMemon320940/followers",
  following_url:
    "https://api.github.com/users/UmerMemon320940/following{/other_user}",
  gists_url: "https://api.github.com/users/UmerMemon320940/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/UmerMemon320940/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/UmerMemon320940/subscriptions",
  organizations_url: "https://api.github.com/users/UmerMemon320940/orgs",
  repos_url: "https://api.github.com/users/UmerMemon320940/repos",
  events_url: "https://api.github.com/users/UmerMemon320940/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/UmerMemon320940/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 2,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2024-09-08T06:13:17Z",
  updated_at: "2024-09-08T06:43:22Z",
};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Wash', (req, res) => {
    res.send('<option>heloo</option>')
  })

  app.get('/youtube', (req, res) => {
    res.send(src = "https:www.yotube.com")
  } )

  app.get("/github", (req, res) => {
    res.json(githubData);
  });

app.get("/safe", (req, res) => {
    res.send(Sorry);
} )

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})