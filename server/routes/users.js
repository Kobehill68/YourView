const express = require("express");
const router = express.Router();


const { getSingleUser, searchUser } = require("../controllers/user");


router.post("/user/single", getSingleUser);
router.post("/user/search", searchUser);

module.exports = router;