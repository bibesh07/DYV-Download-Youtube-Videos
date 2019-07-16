import React, {useState} from 'react';

export function VideoDescription() {
    const[videoUrl, setVideoUrl] = useState('test');
    return (
        <div>
            <iframe id="ytplayer" type="text/html" width="340" height="250" src="https://www.youtube.com/embed/S1edY5Plsu0" frameborder="0"></iframe>
        </div>
    )
}