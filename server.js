
var express = require('express');
const cors = require('cors');
const path = require('path');

var servers = [
    {host: "www.localhost.com", port: 80}
]

const app = express();
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
app.get('/ping', function (req, res) {
    return res.send('pong');
});
app.get('/', function (req, res) {
    console.group('REQ');
    console.log("Req: ",req);
    console.groupEnd();
    console.group("Path details");
    console.log("Path: ", req.path);
    console.log("Dir: ", req.dir);
    console.log("Original url: ", req.originalUrl);
    console.log("BaseUrl: ", req.baseUrl);
    console.groupEnd();
// app.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
    console.group("Dirnames");

    console.log("__Dirname", __dirname);
    console.log("another: ", path.resolve(__dirname, '..'));
    // console.log("another: ",path.basename(path.dirname(filename)));
    console.groupEnd();

    res.send("success");
});

app.get("/performancemonitor",(req,res)=>{
    let path = __dirname.split("/");
    res.sendFile(path.join("PerformanceMonitor", 'build', 'index.html'),{root: "/var/www"});
    console.group('REQ');
    console.log("Req: ",req);
    console.groupEnd();
    console.group("Path details");
    console.log("Path: ", req.path);
    console.log("Dir: ", req.dir);
    console.log("Original url: ", req.originalUrl);
    console.log("BaseUrl: ", req.baseUrl);
    console.groupEnd();
// app.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
    console.group("Dirnames");

    console.log("__Dirname", __dirname);
   
    // console.log("another: ",path.basename(path.dirname(filename)));
    console.groupEnd();

    res.send("success");
})

app.post("/live",(req,res)=>{
    console.log(req.body);
    res.send("am primit chestia asta", req.body);
})

app.listen(8081);