
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use("/performancemonitor", express.static('public'));
app.use(bodyParser.urlencoded({extended: true, limit:'50mb'}))
app.use(bodyParser.json())
app.all('*', function(req, res, next) {
    if (!req.get('Origin')) return next();

    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', '*');
    res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Key, Cache-Control');
    res.set('Access-Control-Request-Method', '*');
    res.set('Access-Control-Expose-Headers', '*');
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');

    if ('OPTIONS' == req.method) return res.send(200);

    next();
});
app.get("/performancemonitor",(req,res)=>{

    console.group("Dirnamess");

    console.log("__Dirname", __dirname);
   
//     // console.log("another: ",path.basename(path.dirname(filename)));
    console.groupEnd();
// app.use(express.static(path.resolve('../../', 'PerformanceMonitor', 'client', 'build')));
    console.log("got here");
    res.sendFile(path.join(__dirname, 'public', 'build-performancemonitor', 'index.html'));
    // res.setHeader("Cache-Control", "no-cache");
    // res.sendFile('PerformanceMonitor' + "/" + "client" + "/" + "build" + "/" + "index.html",{'root':'../../'});
    // res.sendFile('Portofolio' + "/" + "build" + "/" + "index.html",{'root':'../../'});
})

app.listen(8085);
