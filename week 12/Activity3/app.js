/* Express with Routing */
const path = require('path');
const express = require('express');
const app = express();
app.get('/',function(req,res)
{
        res.sendFile(path.join(__dirname+'/index.html'));
        //__dirname : It will resolve to your project folder.
});
app.get('/name',function(req,res)
{
        res.sendFile(path.join(__dirname+'/name.html'));
});
/* And more pages here :) */
app.get('/color',function(req,res)
{
        res.sendFile(path.join(__dirname+'/color.html'));
});
app.get('/*',(req,res)=>
{
        res.status(404).send('Ooops...Σ(▼ᵜ▼)');
})
app.listen(8081);
console.log('Running at Port 8081');