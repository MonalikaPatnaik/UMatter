// bcryptjs jsonwebtoken validator nodemailer cookie-parser body-parser

const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name!"],
        maxLength: [30, "Name cannot exceed 30 characters!"],
        minLength: [4, "Name should have more than 4 characters!"]
    },
    userName: {
        type: String,
        required: [true, "Please Enter Your Name!"],
        maxLength: [30, "Name cannot exceed 30 characters!"],
        minLength: [4, "Name should have more than 4 characters!"]
    },
    email: {
        type: String,
        required: [true, "Please Enter your Email!"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email!"]
    },
    password: {
        type: String,
        required: [true, "Please Enter your password!"],
        minLength: [8, "Password should be greater than 8 characters!"],
        select: false,                     // Password does not show up in the MongoDB compass
    },
    contactNumber: {
        type: String,
        required: [true, "Please enter your contact number!"],
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

userSchema.pre("save", async function(next) {

    // If password does not change
    if(!this.isModified("password")) {
        next();
    }

    // If password change
    this.password = await bcrypt.hash(this.password, 10);               // Hash the password by 10 salt round
});

// JWT TOKEN ==> Creates token and stores in cookie (Login after Register)
userSchema.methods.getJWTToken = function () {
    return jwt.sign({id:this._id},process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
}

// Compare Password
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);               //(password we entered, hashed password)
};

// Generating password reset token

userSchema.methods.getResetPasswordToken = function() {
    // Generate Token
    const resetToken = crypto.randomBytes(20).toString('hex');

    //Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000; // For converting into milisecond

    return resetToken;
}

module.exports = mongoose.model("user", userSchema);