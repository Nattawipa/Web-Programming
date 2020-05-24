const express = require('express');
const dotenv = require('dotenv');
const app = express();
const router = express.Router();
const mysql = require('mysql');
const bodyParse = require('body-parser');
dotenv.config();
app.use(bodyParse.json())

var cors = require(`cors`);
app.use(cors());
app.use(express.urlencoded(
{
        extended: true
}));
app.use('/', router);
var dbConn = mysql.createConnection(
{
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

dbConn.connect();

router.post('/student' , function(req, res) //insert
{
    let student = req.body.student;
    console.log(req.body.student);
    let birthday = 2020-(student.DOB);
    student.DOB = `${birthday}-04-23`
    student.Mobilephone = "0192837465"
     //console.log(student);
    if(!student)
    {
        return res.status(400).send({ error: true, message: 'please provide studnet'})
    }
    const sql = "INSERT INTO personal_info SET ? "
    dbConn.query(sql, student, function(error, results)
    {
        if(error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'New student has been created successfully. '});
    });
});

router.put('/student', function(req, res) //update
{
    console.log(req.body)
    let student_id = req.body.StudentID;
    let student = req.body.student;
    console.log(student_id)
    console.log(student)
    let birthday = 2020-(student.DOB);
    student.DOB = `${birthday}-04-23`
    student.Mobilephone = "0192837465"
    console.log(student);

    if(!student_id || !student)
    {
        return res.status(400).send({ error: student, message: 'Please provide student and student_id'});
    }
    dbConn.query("UPDATE personal_info SET ? WHERE StudentID =?",[student, student_id], function(error, results)
    {
        if(error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: "Student has been updated successfully."});
    });
});

router.delete('/student', function(req, res)
{
    let student_id = req.body.StudentID;
    if(!student_id){
        return res.status(400).send({ error: true, message: 'Please provide student_id'});
    }
    dbConn.query('DELETE FROM personal_info WHERE StudentID = ?', [student_id], function(error, results)
    {
        if(error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'Student has been deleted successfully.'});
    });
});

router.get('/student/:id', function(req, res) //select
{
    console.log(req.params)
    let student_id = req.params.id; 

    if(!student_id)
    {
        return ers.status(400).send({ error: true, message: 'Please provide student id.'});
    }
    dbConn.query('SELECT * FROM personal_info WHERE StudentID = ?', student_id, function(error, results)
    {
        if(error) throw error;
        return res.send({ error: false, data: results[0], messagee: 'Student ertrieved'});
    });
});

router.get('/students', function(req, res) //slect all
{
    dbConn.query('SELECT * FROM personal_info', function(error, results)
    {
        if(error) throw error;
        return res.send({ error: false, data: results, message: 'Student list.'});
    });
});
app.listen(process.env.PORT, function()
{
    console.log(`Server listening at Port ${process.env.PORT}`);
});