
var express = require('express');
const cors = require('cors');
const path = require('path');
var serveStatic = require('serve-static')
var compression = require('compression');
const app = express();
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.resolve('../../', 'PerformanceMonitor', 'client', 'build')));
app.use(compression());
app.use(serveStatic(path.resolve('../../', 'PerformanceMonitor', 'client', 'build'), {
    maxAge: '1d',
    setHeaders: setCustomCacheControl
  }))
// console.log(path.join(__dirname, '..', '..', 'PerformanceMonitor', 'client', 'build'))
// console.log(path.resolve('../../', 'PerformanceMonitor', 'client', 'build'), 'from here');
// app.use(cors());

// for (route of routes) {
//     app.use(route.route,
//         proxy({
//             target: route.address,
//             pathRewrite: (path, req) => {
//                 return path.split('/').slice(2).join('/');
//             }
//         })
//     );
// }

// app.listen(80, ()=>{
//     console.log("Proxy listening on port 80");
// })
app.use(cors());
// app.get('/ping', function (req, res) {
//     return res.send('pong');
// });
// app.get('/', function (req, res) {
//     console.group('REQ');
//     console.log("Req: ",req);
//     console.groupEnd();
//     console.group("Path details");
//     console.log("Path: ", req.path);
//     console.log("Dir: ", req.dir);
//     console.log("Original url: ", req.originalUrl);
//     console.log("BaseUrl: ", req.baseUrl);
//     console.groupEnd();
// // app.get('/', function (req, res) {
//     // res.sendFile(path.join(__dirname, 'build', 'index.html'));
// // });
//     console.group("Dirnames");

//     console.log("__Dirname", __dirname);
//     console.log("another: ", path.resolve(__dirname, '..'));
//     // console.log("another: ",path.basename(path.dirname(filename)));
//     console.groupEnd();

//     res.send("success");
// });
// app.get("*",(req,res)=>{
//     next();
// })

app.get("/performancemonitor",(req,res)=>{
    // dynamicStatic.setPath(path.join(__dirname, '..', '..', 'PerformanceMonitor', 'client', 'build'));
//     let path = __dirname.split("/");
//     // console.group('REQ');
//     // console.log("Req: ",req);
//     // console.groupEnd();
//     console.group("Path details");
//     console.log("Path: ", req.path);
//     console.log("Dir: ", req.dir);
//     console.log("Original url: ", req.originalUrl);
//     console.log("BaseUrl: ", req.baseUrl);
//     console.groupEnd();
// // app.get('/', function (req, res) {
//     // res.sendFile(path.join(__dirname, 'build', 'index.html'));
// // });
//     console.group("Dirnames");

//     console.log("__Dirname", __dirname);
   
//     // console.log("another: ",path.basename(path.dirname(filename)));
//     console.groupEnd();
// app.use(express.static(path.resolve('../../', 'PerformanceMonitor', 'client', 'build')));
console.log("got here");
    res.setHeader("Cache-Control", "no-cache");
    res.sendFile('PerformanceMonitor' + "/" + "client" + "/" + "build" + "/" + "index.html",{'root':'../../'});
 
})


app.listen(8081);

function setCustomCacheControl (res, path) {
    if (serveStatic.mime.lookup(path) === 'text/html') {
      // Custom Cache-Control for HTML files
      res.setHeader('Cache-Control', 'public, max-age=0')
    }
  }