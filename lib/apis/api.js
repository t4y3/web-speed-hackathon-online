const axios = require('axios');
const express = require("express");
const cors = require('cors');
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

app.use(cors());

const api = axios.create({
  baseURL: 'https://web-speed-hackathon-api.herokuapp.com/api',
});

// export function getBlogs(limit, offset) {
//   const params = { limit, offset };
//   return api.get('/blogs', { params });
// }
router.get("/blogs", (req, res) => {
  const { limit, offset } = req.query;
  const params = { limit, offset };
  const promise = api.get('/blogs', { params });
  promise.then(result => {
    const { data } = result;
    res.send(data);
  });
});

//
// export function getBlogById(blogId) {
//   return api.get(`/blog/${blogId}`);
// }
router.get("/blog/:blogId", (req, res) => {
  const { blogId } = req.params;
  const promise = api.get(`/blog/${blogId}`);
  promise.then(result => {
    const { data } = result;
    res.send(data);
  });
});

// export function getBlogEntries(blogId, limit, offset) {
//   const params = { limit, offset };
//   return api.get(`/blog/${blogId}/entries`, { params });
// }
router.get("/blog/:blogId/entries", (req, res) => {
  const { blogId } = req.params;
  const { limit, offset } = req.query;
  const params = { limit, offset };
  const promise = api.get(`/blog/${blogId}/entries`, { params });
  promise.then(result => {
    const { data } = result;
    res.send(data);
  });
});

// export function getBlogEntryById(blogId, entryId) {
//   return api.get(`/blog/${blogId}/entry/${entryId}`);
// }
router.get("/blog/:blogId/entry/:entryId", (req, res) => {
  const { blogId, entryId } = req.params;
  const promise = api.get(`/blog/${blogId}/entry/${entryId}`);
  promise.then(result => {
    const { data } = result;
    res.send(data);
  });
});

// export function getBlogEntryComments(blogId, entryId, limit, offset) {
//   const params = { limit, offset };
//   return api.get(`/blog/${blogId}/entry/${entryId}/comments`, { params });
// }
router.get("/blog/:blogId/entry/:entryId/comments", (req, res) => {
  const { blogId, entryId } = req.params;
  const { limit, offset } = req.query;
  const params = { limit, offset };
  const promise = api.get(`/blog/${blogId}/entry/${entryId}/comments`, { params });
  promise.then(result => {
    const { data } = result;
    res.send(data);
  });
});

// export function getBlogEntryCommentById(blogId, entryId, commentId) {
//   return api.get(`/blog/${blogId}/entry/${entryId}/comment/${commentId}`);
// }
router.get("/blog/:blogId/entry/:entryId/comment/:commentId", (req, res) => {
  const { blogId, entryId, commentId } = req.params;
  const promise = api.get(`/blog/${blogId}/entry/${entryId}/comment/${commentId}`);
  promise.then(result => {
    const { data } = result;
    res.send(data);
  });
});

// export function postBlogEntryLike(blogId, entryId) {
//   return api.post(`/blog/${blogId}/entry/${entryId}/like`);
// }
router.post("/blog/:blogId/entry/:entryId/like", (req, res) => {
  const { blogId, entryId } = req.params;
  const promise = api.post(`/blog/${blogId}/entry/${entryId}/like`);
  promise.then(result => {
    const { data } = result;
    res.send(data);
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
