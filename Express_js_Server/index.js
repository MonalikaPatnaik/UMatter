//imported express
const express = require("./node_modules/express");
const app = express();

//imported npm package "cors"
const cors = require('cors');
app.use(cors());

//imported nodemailer for using SMTP server
const nodemailer = require('nodemailer');

//this is the port number
const port = 3001;

//imported "sqlite" and "sqlite3"
const sqlite3 = require('sqlite3');
const { Database } = sqlite3;
const { open } = require('sqlite');

//this will help to read json objects in requests as javascript objects.
app.use(express.json());
const path = require('path');

//required "bcrypt" npm package for password incryption.
const bcrypt = require('./node_modules/bcrypt');

//required jsonwebtokens npm package for authorization.
const jwt = require('./node_modules/jsonwebtoken');

//this is secrete key used to generate tokens
const jwtSecretKey = "!@#$%^&*";
const dbPath = path.join(__dirname, '/User_Database.db');
let db = null;

async function databaseSetup() {
    try {
        db = await open({
            filename: dbPath,
            driver: Database
        });
        console.log(db);
        console.log("database connected");


    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

databaseSetup();

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})

app.get("/allData", async (req, res) => {

    let sqlDeleteCommand = `DROP TABLE  user_details`;

    let bringAllData = `SELECT * FROM user_details`;

    let sqlQuery = `
    CREATE TABLE user_details (
        user_id integer primary key not null unique,
        email varchar(100),
        username varchar(100),
        name char(100),
        contact_number varchar(15),
        password varchar(100),
        feedback varchar(100)
    );`;

    let insertDataQuery = `
    INSERT INTO user_details (email, username, name, contact_number, password, feedback)  
    VALUES ("bhola@gmail.com", "bhola8", "bhola singh", "7089442999", "1234","some feedback"),
    ("chirayuhumar@gmail.com", "chirayu", "chirayu humar", "3214325678", "4235","some feedback"),
    ("vaibhav@gmail.com", "vaibhav123", "vaibhav kumar", "0987893451", "9264","some feedback"),
    ("kalyansingh@gmail.com", "kalyan321", "kalyan thakur", "4327652354", "1987","some feedback"),
    ("priyanshmishra@gmail.com", "priyansh!", "priyansh mishra", "5347658679", "2567","some feedback");`;



    let output = await db.all(bringAllData);
    console.log("table created");

    res.json(output);
});

app.post('/SignUp', async (req, res) => {
    const { email = '', username = '', name = '', contactNumber = '', password1 = '', password2 = '' } = req.body;
    console.log(req.body);
    const bringUserWithUsernameQuery = `
    select * from user_details where
     username like '${username}';`;

    const bringUserWithEmailQuery = `
    select * from user_details where
     email like '${email}';`;

    const bringUserWithContactNumber = `
    select * from user_details where
     contact_number like '${contactNumber}';`;

    const UserWithSameUsername = await db.get(bringUserWithUsernameQuery);
    const UserWithSameEmail = await db.get(bringUserWithEmailQuery);
    const UserWithSameContactNumber = await db.get(bringUserWithContactNumber);
    if (UserWithSameUsername !== undefined) {
        res.set({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'ETag': '12345'
        })
        res.json({ message: "username already taken" });
    } else if (UserWithSameEmail !== undefined) {
        res.set({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'ETag': '12345'
        })
        res.json({ message: "email already taken" });
    } else if (UserWithSameContactNumber !== undefined) {
        res.set({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'ETag': '12345'
        })
        res.json({ message: "contact_number already in use" });
    } else if (password1 !== password2) {
        res.set({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'ETag': '12345'
        })
        res.json({ message: "password does not match" });
    } else {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password1, saltRounds);
        const createNewUserQuery = `
        INSERT INTO user_details (email, username, name, contact_number, password)
        VALUES ("${email}", "${username}", "${name}", "${contactNumber}", "${hashedPassword}");`;
        const output = await db.run(createNewUserQuery);
        res.set({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'ETag': '12345'
        })
        res.json(req.body);
    }
});

app.post('/SignIn', async (req, res) => {
    const { email, password } = req.body;
    const bringUserWithEmailQuery = `
    select * from user_details where
     email like '${email}';`;
    const dbUser = await db.get(bringUserWithEmailQuery);
    if (dbUser === undefined) {
        res.set({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'ETag': '12345'
        })
        res.status(400);
        res.send("this user is not present");
    } else {
        const isPasswordMatched = await bcrypt.compare(password, dbUser.password);
        if (isPasswordMatched) {
            const payLoad = {
                username: dbUser.username
            };
            const jwtToken = await jwt.sign(payLoad, jwtSecretKey);
            res.set({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'ETag': '12345'
            })
            res.json({ jwtToken: jwtToken, username: dbUser.username });
        } else {
            res.status(400);
            res.set({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'ETag': '12345'
            })
            res.send("invalid password");
        }
    }
});

app.get('/profile/:username/', async (req, res) => {
    const authHeader = req.headers["authorization"];
    // console.log(req.headers);
    let jwtToken;
    if (authHeader !== undefined) {
        jwtToken = authHeader.split(" ")[1];
    }
    if (jwtToken === undefined) {
        res.status(401);
        res.json({ message: "AuthorizationToken is not defined" });
    } else {
        jwt.verify(jwtToken, jwtSecretKey, async (error, payLoad) => {
            if (error) {
                res.json({ message: "Invalid Token" })
            } else {
                //this need to be defined
                const { username } = req.params;
                const bringUserDetailsQuery = `
                select * from user_details where
                username like '${username}';`;
                const dbUser = await db.get(bringUserDetailsQuery);
                console.log(dbUser);
                const { email, contact_number, name } = dbUser;
                res.json({ username: username, contactNumber: contact_number, name: name });
            }
        })
    }
});

app.post('/feedback', async (req, res) => {
    try {
      const { username, feedback } = req.body;
  
      const existingUserQuery = `
        SELECT * FROM user_details
        WHERE username = ?`;
      const existingUser = await db.get(existingUserQuery, username);
  
      if (!existingUser) {
        const maxUserIdQuery = `
          SELECT MAX(user_id) as max_user_id FROM user_details`;
        const { max_user_id } = await db.get(maxUserIdQuery);
  
        const newUserQuery = `
          INSERT INTO user_details (user_id, username, feedback)
          VALUES (?, ?, ?)`;
        const userId = max_user_id ? max_user_id + 1 : 1;
  
        await db.run(newUserQuery, [userId, username, feedback]);
  
        console.log('New user created:', { user_id: userId, username, feedback });
        res.status(200).json({ message: 'New user created and feedback submitted successfully' });
      } else {
        const updateQuery = `
          UPDATE user_details
          SET feedback = ?
          WHERE username = ?`;
  
        await db.run(updateQuery, [feedback, username]);
  
        console.log('Feedback updated for user:', { username, feedback });
        res.status(200).json({ message: 'Feedback submitted successfully' });
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      res.status(500).json({ message: 'Failed to submit feedback' });
    }
  });
  
  


app.get('/feedback', async (req, res) => {
    const getAllDataQuery = `SELECT * FROM user_details`;
    const updatedData = await db.all(getAllDataQuery);
    res.json(updatedData);
  });
  


app.get("/", async (req, res) => {
    res.send("HEllo world");
});




// SMTP server for Contact Form
app.post('/mail', (req, res) => {
    // console.log(req.body)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', 
            pass: 'generated-password' 
            // https://myaccount.google.com/u/1/apppasswords
        }
    });

    var options = {
        from: 'your-email@gmail.com',
        to: 'your-email@gmail.com', 
        subject: "Contact Request",
        html: `
        <div style="padding:10px; border-style: ridge">
        <h3>You have a new contact request.</h3>
        <h4>Contact Details</h4>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.mail}</li>
            <li>Subject: Contact Request </li>
            <li>Message: ${req.body.message}</li>
        </ul>
        </div>
        `
    };

    transporter.sendMail(options, function (error, info) {
        if (error) {
            console.log(error)
            res.json('Couldnot send Email')
        }
        else {
            console.log("Email Sent Successfully")
            res.json('Email Sent Successfully')
        }

    });
});