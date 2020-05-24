/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var request = null;
var rooturl = "http://localhost:8080/FriendsDB/webresources/restclient.friends";
function createRequest() {
 try {
 request = new XMLHttpRequest();
 } catch (trymicrosoft) {
 try {
 request = new ActiveXObject("MsXML2.XMLHTTP");
 } catch (othermicrosoft) {
 try {
 request = new ActiveXObject("Microsoft.XMLHTTP");
 } catch (failed) {
 request = null;
 }
 }
 }
 if (request == null)
 alert("Error creating request object!");
}
function getAllFriends()
{
 document.getElementById('id').value = "";
 document.getElementById('name').value = "";
 document.getElementById('course').value = "";

 createRequest();
 request.onreadystatechange = handleListJSONResponse;
 request.open("GET", rooturl, true);
 request.send(null);
}
function getFriends()
{
document.getElementById("output").innerHTML = "";
 document.getElementById("name").value = "";
 document.getElementById("course").value = "";
 createRequest();
 var friendsid = document.getElementById("id").value;
 id = eval(friendsid);
 var url = rooturl + "/" + id;
 request.onreadystatechange = handleJSONResponse;
 request.open("GET", url, true);
 request.send(null);
}
function addFriends()
{
 document.getElementById("output").innerHTML = "";
 var id = document.getElementById('id').value;
 var name = document.getElementById('name').value;
 var course = document.getElementById('course').value;

 createRequest();
 var data = JSON.stringify({"name": name.toString(), "id":
id.toString(),"course": course.toString()});
 request.open("POST", rooturl);
 request.setRequestHeader('Content-type', 'application/json');
 request.setRequestHeader("Content-Length", data.length);
 request.setRequestHeader('Accept', 'application/json');
 request.send(data);
 document.getElementById('id').value = "";
 document.getElementById('name').value = "";
 document.getElementById('course').value = "";

}
function updateFriends ()
{
 document.getElementById("output").innerHTML = "";
 var id = document.getElementById('id').value;
 var name = document.getElementById('name').value;
 var course = document.getElementById('course').value;

 createRequest();
 var data = JSON.stringify({"name": name.toString(), "id":
id.toString(),"course": course.toString()});
 var id = document.getElementById("id").value;
 id = eval(id);
 var url = rooturl + "/" + id;
 request.open("PUT", url);
 request.setRequestHeader('Content-type', 'application/json');
 request.setRequestHeader("Content-Length", data.length);
 request.setRequestHeader('Accept', 'application/json');
 request.send(data);
 document.getElementById('id').value = "";
 document.getElementById('name').value = "";
 document.getElementById('course').value = "";

}
function deleteFriends()
{
 document.getElementById("output").innerHTML = "";
 createRequest();
 var id = document.getElementById("id").value;
 id = eval(id);
 var url = rooturl + "/" + id;
 request.open("DELETE", url, true);
 request.send(null);
 document.getElementById('id').value = "";
 document.getElementById('name').value = "";
 document.getElementById('course').value = "";
}
function handleJSONResponse() {
 if (request.readyState == 4 && request.status == 200)
 {
    var det = JSON.parse(request.responseText);
    document.getElementById('name').value = det.name;
    document.getElementById('course').value = det.course;
 }
}
function handleListJSONResponse() {
 if (request.readyState == 4 && request.status == 200)
 {
 var det = JSON.parse(request.responseText);
 var output = "<table border = '1'>";
 output += "<tr>" + "<th>ID</th>" + "<th> Name</th>" +
"<th>Course </th>" + "</tr>";
 for (i = 0; i < det.length; i++) {
 output += "<tr>";
 output += "<td>" + det[i].id + "</td>";
 output += "<td>" + det[i].name + "</td>";
 output += "<td>" + det[i].course + "</td>";
 output += "</tr>";
 }
 output += "</table>";
 document.getElementById("output").innerHTML = output;
 }
}


