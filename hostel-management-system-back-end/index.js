const fs = require("fs");

const http = require("http");
const server = http.createServer((req, res) => {
    res.end('hello from other side');
});

server.listen(8000, "127.0.0.1", () => { console.log('listening to port 3200'); });


var hostelInfo = {};

const hostel = [];


// const hostelObj = JSON.stringify(hostel);
// fs.writeFileSync('../hostel-management-system-front-end/src/data-json-file/hostel.json', hostelObj);
