const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: "liudmylabolotova@ukr.net",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const nodemailerEmail = async (verifyEmail) => {
  console.log(verifyEmail);
  await transport
    .sendMail(verifyEmail)
    .then(() => {
      console.log("Email send success");
    })
    .catch((error) => console.log(error.message));
};

module.exports = nodemailerEmail;
