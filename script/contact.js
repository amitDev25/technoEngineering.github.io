function sendEmail() {
    let name = document.getElementById("name").value
    let mobile = document.getElementById("mobile").value
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value
    let mainbody = ` The Details of The User Are Given Below <br/> Name = ${name} <br/> Mobile Number : ${mobile} <br/> Email Address : ${email} <br/> Message : ${message}`

    // console.log(mainbody)
        Email.send({
        SecureToken : "00ae0dd5-74c7-4582-9267-a03ae0a9e282",
        // To: 'arupjisumita2003@gmail',
        To: 'aruproy65@yahoo.co.in',
        From: "amitroy251203@gmail.com",
        Subject: "Response From Techno Engineering",
        Body: mainbody
    }).then(
        message => alert("Your Message Has Been Sent Successfully")
    );

}