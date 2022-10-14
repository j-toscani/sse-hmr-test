const express = require('express');
const chokidar = require("chokidar");
const path = require("path");
const app = express();

app.use("/", express.static('public'));

app.get("/events", (_req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    chokidar.watch("./public").on('change', (path) => {
        console.log(`[${new Date().toString()}] File: ${path} changed.`)
        res.write("data: reload \n\n");
    })
})

app.listen(3000, () => console.log('SSE app listening on port 3000!'))
