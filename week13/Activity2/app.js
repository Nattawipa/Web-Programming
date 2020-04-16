const express  = require('express');
const year = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

/* Connection to MySQL */
const mysql = require('mysql');
const dotenv = require('dotenv');
const router = express.Router();
const app = express();
dotenv.config()
app.use(express.urlencoded({
        extended: true
    }));
    
app.use('/', router);
var connection = mysql.createConnection
({
        host : process.env.MYSQL_HOST,
        user : process.env.MYSQL_USERNAME,
        password : process.env.MYSQL_PASSWORD,
        database : process.env.MYSQL_DATABASE
});

function render(data)
{
        let output =`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <title>Student List</title>
        <style>
            table, th, td 
            {
                border: 2px solid black;
                border-collapse: collapse;
            }
    
            tr>td 
            {
                padding: 12px;
                font-size: 20px;
            }
    
            .big 
            {
                font-size: 30px;
            }
        </style>
    </head>
    <body>
        <h1>Student List</h1>
        <ul>
            <table style="width:100%">
                <tr style="font-size: 30px;">
                    <td class="big">Name</td>
                    <td class="big">DoB</td>
                    <td class="big">Mobile</td>
                </tr>`
                data.forEach(value=>
                {
                        output += `<tr> 
                                                <td>${value.Firstname} ${value.Lastname}</td>
                                                <td>${value.DoB.getDate()}-${year[value.DoB.getMonth()]}-${value.DoB.getFullYear()}</td>
                                                <td>${value.Phone}</td>
                                        </tr>`;
                });
                output+= `</table><br>
                <form action="/submit-form" method="POST">
                        <table border="2">
                                <tr> 
                                        <th colspan="6">INSERT A NEW STUDENT INFORMATION</th>
                                </tr>
                                <tr>
                                        <td>ID: <input type="text"  id="id" name="id" required></td> 
                                        <td>Firstname: <input type="text"  id="firstname" name="firstname" required></td>
                                        <td>Lastname: <input type="text"  id="lastname" name="lastname" required></td>
                                        <td>Date Of Birth: <input type="date"  id="birthday" name="birthday" required></td>
                                        <td>Mobile:  <input type="text" maxlength="10" id="phone" name="phone" required></td>
                                        <td><button type="submit">SUBMIT</button></td>
                                </tr>
                        </table>
                </form>`; 
                
         return output
}

/* Connect to DB */
router.get('/',(req,res)=>
{
        connection.connect(function(err)
        {
                if(err) throw err;
                console.log("Connected DB: "+process.env.MYSQL_DATABASE);
                        //-----------------------------------SELECT-----------------------------------
                        let sql = "SELECT * FROM personal_info"; 
                        connection.query(sql, function (err, results) 
                        {
                                if (err) throw err;
                                /* Show each record */
                                res.send(render(results))
                        });
        });
})

router.post(`/submit-form`,(req,res)=>
{
        console.log(req.body);
        const id = req.body.id;
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const birthday = req.body.birthday;
        const phone = req.body.phone;
        const sql  = `insert into personal_info values (${id}, '${ firstname}', '${lastname}', '${birthday}', '${phone}');`
        connection.query(sql,(err)=>
        {
                if(err) throw err;
                res.send(`DONE`);
        })
})                                                                    

//--------------------------------RUN SERVER--------------------------------
app.listen(process.env.PORT, function () 
{
        console.log("Server listening at Port "+process.env.PORT);
});

