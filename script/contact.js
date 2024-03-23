
const sendEmail = ()=> {
    let name = document.getElementById("name").value
    let mobile = document.getElementById("mobile").value
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value
    let mainbody = ` The Details of The User Are Given Below: <br/><br/><br/> Name : ${name} <br/> Mobile Number : ${mobile} <br/> Email Address : ${email} <br/> Message : ${message}`
    let Usermainbody = ` Dear ${name}, <br/><br/><br/> Thank you for reaching out to Techno Engineering. We've received your message and are currently reviewing it. We'll get back to you shortly with the information you requested. If you have any further questions or concerns, feel free to contact us directly by the contact information provided in the website. We appreciate your patience and look forward to assisting you soon. <br/><br/><br/> Best Regards, <br/> Techno Engineering `

    // console.log(mainbody)
    Email.send({
        SecureToken: "00ae0dd5-74c7-4582-9267-a03ae0a9e282",
        To: 'arupjisumita2003@gmail.com',
        From: "amitroy251203@gmail.com",
        Subject: "Response From Techno Engineering",
        Body: mainbody
    }).then(
        message => alert("Your Message Has Been Sent Successfully")
    );

    Email.send({
        SecureToken: "00ae0dd5-74c7-4582-9267-a03ae0a9e282",
        To: email,
        From: "amitroy251203@gmail.com",
        Subject: "Response From Techno Engineering",
        Body: Usermainbody
    }).then(
        message => alert("A quick response has been sent to your Mail id. If not found do check the spam section of your Email ")
    );

    

}






    



