var nodemailer = require('nodemailer');
var transporter =nodemailer.createTransport({
    service:'gmail',
    auth:{
    user:'tejaswi0418@gmail.com',
    pass:'xmccbgrexlbovwao' 
    }
});
var mailoptions={
    from:'tejaswi0418@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'A mail From 20A21A05F2',
    text:'Exam Time '
};
transporter.sendMail(mailoptions,function(error,info)
{
    if (error)
    {
        console.log(error);
    }
    else{
        console.log('Email sent: ' + info.response);
    }
})