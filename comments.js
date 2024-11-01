// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Handle requests
router.get('/', commentController.getAllComments);
router.post('/', commentController.createComment);
router.get('/:id', commentController.getCommentById);
router.put('/:id', commentController.updateCommentById);
router.delete('/:id', commentController.deleteCommentById);

// Export router
module.exports = router;

