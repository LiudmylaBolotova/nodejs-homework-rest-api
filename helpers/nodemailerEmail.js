const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: "SSL",
  auth: {
    user: "liudmylabolotova@ukr.net",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

// const email = {
//   to: "teyimix313@cwtaa.com",
//   from: "liudmylabolotova@ukr.net",
//   subject: "Registration",
//   html: "<p><strong>New!!!</strong>from localhost: 3000</p>",
// };

const nodemailerEmail = async (verifyEmail) => {
  console.log(verifyEmail)
  await transport
    .sendMail(verifyEmail)
    .then(() => {
      console.log("Email send success");
    })
    .catch((error) => console.log(error.message));
};

module.exports = nodemailerEmail;
