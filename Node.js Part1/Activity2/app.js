/* HTTP Module with Routing */
const http = require("http");
const fs = require("fs");
http.createServer((req, res)=> 
{
        if(req.url === "/")
        { /* Render the default page */
                fs.readFile("./index.html", function(err, data) 
                {
                        res.statusCode = 200;
                        res.setHeader("Content-Type","text/html");
                        res.write(data);
                        res.end();
                });
        }
        else if(req.url === "/name")
        { /* Render the name page */
                fs.readFile("./name.html", function(err, data) 
                {
                        console.log(data.toString)
                        res.statusCode = 200;
                        res.setHeader("Content-Type","text/html");
                        res.write(data);
                        res.end();
                });
        }  
        else if(req.url === "/color")
        { /* Render the color page */
                fs.readFile("./color.html", function(err, data) 
                {
                        res.statusCode = 200;
                        res.setHeader("Content-Type","text/html");
                        res.write(data);
                        res.end();
                });
        }
        else
        {
                res.statusCode = 404;
                res.write("404 : NONGNAM PAGE NOT FOUND");
                res.end();
        }
}).listen(8081); 

