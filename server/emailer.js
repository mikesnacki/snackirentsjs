const mailer = require("nodemailer")

const smtpTransport = mailer.createTransport("SMTP", {
    service: "Gmail",
    auth:{
        user: "snackirents@gmail.com",
        pass: "snackirents123"
    }
})

smtpTransport.verify((error, success)=>{
    (error) ? console.log(error) : console.log(`${success}`)
})

export const transporter = ()=> {smtpTransport.sendMail(mail, (error, response)=>{
    error ? console.log(error) : console.log(`message sent ${response.message}`)
    smtpTransport.close()
})}