const express = require('express');
const app = express();
const port = process.env.PORT || 3300;
var fs = require('fs');
var youtubedl = require('youtube-dl');
var videoInfo;

app.listen(port, () => console.log(`listening to port ${ port }`));

app.get('/GetVideoDescription', (req,res) => {
    youtubedl.getInfo('https://www.youtube.com/watch?v=5AWBTk4OKp0', function(err, data) {
        videoInfo = (err || data == null) ? 'Could not find video. Please try a valid video URL.' : {
                'id:': data.id,
                'title:': data.title,
                // 'url:': info.url,
                'thumbnail:': data.thumbnail,
                'description:': data.description,
                'filename:': data._filename,
                'format id:': data.format_id
            };
    });
    res.send(videoInfo);
})
