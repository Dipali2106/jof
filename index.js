const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('assets'));


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.post('/', function(req, res) {
  var num1 = (req.body.num1);
  var num2 = (req.body.num2);


  res.send('Thank you for placing your order');

  async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gavalidipali2001@gmail.com', // generated ethereal user
      pass: '+', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Dipali Gavali" <gavalidipali2001@gmail.com>', // sender address
    to: "gavalidipali2001@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: 'you received an order '+ num1 + ' ' + num2, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
});

app.listen(3000, function(){
    console.log("Running on port 3000...");
} )
