const express = require('express')
const {
    createBlog, 
    getAllBlogs, 
    getSingleBlog, 
    updateBlog, 
    deleteBlog
} = require("../controllers/blogController.js")
const requireAuth = require('../middleware/RequireAuth.js')
 
const router = express.Router();

//GET all blogs
router.get('/api/blogs', getAllBlogs);

//GET a single blog
router.get('/api/blog/:id', getSingleBlog)

//Protecting routes
router.use(requireAuth)

//POST a blog
router.post("/api/blog", createBlog);

//UPDATE a blog
router.patch("/api/blog/:id", updateBlog)

//DELETE a blog
router.delete('/api/blog/:id', deleteBlog)

module.exports = router;