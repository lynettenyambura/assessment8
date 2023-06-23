const nodemailer  = require('nodemailer');
const express = require('express');
const  dotenv = require('dotenv');
dotenv.config();

const sendMail = (to, subject, message) => {
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});
const options = {
    from: process.env.EMAIL_SENDER,
    to:"jonathan.mwaniki@thejitu.com",
    subject : "week 8 report",
    text: "This is my week 8 report",
};
transporter.sendMail(options,(error, info)=>{
    if(error){
        console.log(error);
    }else{
        console.log(info);
    }
});
}

sendMail();
