const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtTokens");

// Register a user
exports.registerUser = catchAsyncErrors( async(req, res, next) => {
    const {name, email, password, userName, contactNumber } = req.body;
    const user = await User.create({
        name, email, password, userName, contactNumber
    });

    const token = user.getJWTToken();

    sendToken(user, 201, res);
});

// Login User
exports.loginUser = catchAsyncErrors( async(req, res, next) => {
    const {email, password} = req.body;

    // Checking if user has given password and email both

    if(!email || !password) {
        return next(new ErrorHandler("please Enter Email && Password!", 400))
    } 

    // If we get the user
    const user = await User.findOne({email}).select("+password");

    // If we don't get the user
    if(!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    const token = user.getJWTToken();

    sendToken(user, 200, res);
});

// Logout user
exports.logOut = catchAsyncErrors( async(req, res, next) => {

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })

    res.status(200).json({
        success: true,
        message: "Logged out!",
    });
})