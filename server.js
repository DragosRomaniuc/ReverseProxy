
var express = require('express');
const cors = require('cors');
// const path = require('path');

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
    res.send("success");
});
app.listen(8081);