const express = require("express");
const { 
    registerUser,
    loginUser,
    logOut,
} = require( "../controllers/userControllers" );

const { isAuthenticatedUser, authorizeRoles } = require( "../middleware/auth" );

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").post(logOut);

module.exports = router;