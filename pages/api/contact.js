export default function (req, res) {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      service: "gmail",
         auth: {
              user: 'jose.silva.eng.informatica@gmail.com',
              pass: 'EngenhariaInformatica2020',
           },
    });
    
    const mailData = {
        from: 'demo email',
        to: req.body.name,
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
      console.log(mailData)
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    console.log(req.body)
    res.send('success')
  }