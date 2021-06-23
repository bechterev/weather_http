const http = require('http');
const { config } = require('process');
const {urlWeather} = require('./config');
const url = require('url');

http.createServer((request, response)=>{
    const urlParsed =  request.url;
    console.log(urlWeather);
    const pathname = urlParsed.replace('/','');
    console.log(urlParsed)
    response.setHeader('Content-Type', 'text/html; charset=utf-8;');
    if(pathname !== '/'){
       
        response.statusCode = 302;
        console.log(urlWeather+pathname)
        response.setHeader('Location', urlWeather+pathname);
    }
    response.end();
}).listen(3000);
