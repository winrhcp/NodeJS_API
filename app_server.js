//ทำการ import express เข้ามาใช้งาน โดยสร้างตัวแปร express ขึ้นมาเพื่อรับค่า
var express = require('express');

var path = require('path');
var pug = require('ejs');

//ทำการสร้าง Instance ของ express และสร้างตัวแปร app ขึ้นมาเพื่อรับค่า
var app = express();

app.set('view engine', 'ejs');
app.set('views', './AdminLTE-2.4.15');
app.use(express.static(path.join(__dirname, '/AdminLTE-2.4.15')))
//สร้าง route ขึ้นมา 1 ตัว โดยกำหนดให้ path คือ / หรือ index ของ host นั่นเอง
app.get('/home', function(req, res){
    res.render('index', {});
});
//run web server ที่เราสร้างไว้ โดยใช้ PORT ที่เรากำหนดไว้ในตัวแปร PORT
var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listening at http://%s%s", host, port);
});
//ทำการ export app ที่เราสร้างขึ้น เพื่อให้สามารถนำไปใช้งานใน project อื่นๆ 
//เปรียบเสมือนเป็น module ตัวนึง
//module.exports = app