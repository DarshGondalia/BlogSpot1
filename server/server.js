// import express from "express";
// import { Database } from "./cassandra-connect";
// import * as url from 'url';
import { Database } from './cassandra-connect.js';
import express from 'express';
// import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import cors from 'cors';
console.log("I am starting");
// const { faDatabase } = require('@fortawesome/free-solid-svg-icons');
// const express = require('express');
const app = express();
const port = 3001;
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}))
const databaseAccess = new Database();
app.post('/register', async (req, res)=> {
    try{
        const {username, password, fullname, email, phone} = req.body;
        const register = await databaseAccess.createUser(username, password, fullname, email, phone);
        res.send(register);
    }catch(err){
        console.log(err);
    }
});

app.post("/login", async (req, res) => {
    try{
        const {username, password} = req.body;
        const login = await databaseAccess.login(username, password);
        res.send(login.rows[0]); 
    }catch(err){
        console.log(err);
    }
});

app.post("/MyBlogs/post", async (req, res) => {
    try{
        const {username, posttitle, postdescription, postkeywords, postcontent } = req.body;
        const post = await databaseAccess.postBlog(username, posttitle, postdescription, postkeywords, postcontent);
        console.log(post);
        res.send(post);
    }catch(err){
        console.log(err);
    }
});

app.get("/", (req, res) => res.sendFile("src/components/Home", {root: "./"}));

app.get("/home", async (req, res)=>{
    const blogs = await databaseAccess.getAllBlogs();

    res.send(blogs);
});

app.all("*", async(request, response) => {
    response.status(404).send(`Not found: ${request.path}`);
});

// Start the server on port 3000.
app.listen(process.env.PORT || port, () => {
    console.log(`Server started on http://localhost:${port}`);
});