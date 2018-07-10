const express = require("express");
const router = express.Router({
  mergeParams: true
}); /* params from the prefix route */
const {
  createMessage,
  getMessage,
  deleteMessage
} = require("../handlers/messages");

// prefix- /api/users/:id/messages
router.route("/").post(createMessage);

router
  .route("/:message_id")
  .get(getMessage)
  .delete(deleteMessage);

module.exports = router;
