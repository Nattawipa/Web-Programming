/* Form Handling */
const express = require("express");
const app = express();
const path = require("path");

const router = express.Router(); /* Router Module for handling routing */
app.use(express.urlencoded({ extended: true }));
/* Handle POST Form submitted): greet users */
app.use("/", router); // Register the router
router.get("/", function (req,res) // Handle GET: display form.html 
{
         res.sendFile(path.join(__dirname + "/contactus.html"));
});

/* POST requests sending data in the form of some data object to the server encoded in the body */
router.post("/submit-form", function (req, res) 
{
        /* Use name from the form to get the value */
        //console.log(req.body)
        const name = req.body.name;
        const email = req.body.email;
        const txtMessage = req.body.txtMessage;

        console.log(`Form submitted by ${name} ${email} ${txtMessage}`);

        const html = `<h1>Thank you ${name} !! </h1>
                                <h3>We will contact you via <i>${email}</i> within 3 business days.</h3>
                                <h3>Your message: ${txtMessage}I am sending my message here </h3>`;

        res.send(html);
});

app.listen(3000, function () // Server listening
{
  console.log("Server listening at Port 3000");
});
