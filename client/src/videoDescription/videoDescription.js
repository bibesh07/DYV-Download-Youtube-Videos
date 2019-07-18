import React, {useState} from 'react';
import { Button, Header, Icon, Modal, Card } from 'semantic-ui-react'

export function VideoDescription() {
    const[isOpen, setVideoUrl] = useState('true');
    
    return (
        <Modal open={isOpen} size='tiny' closeOnEscape={true} closeOnDimmerClick={false}>
            <Modal.Header>Is this the video you are looking to download?</Modal.Header>
            <Modal.Content>
                <iframe id="ytplayer" type="text/html"  width="470" height="300" src="https://www.youtube.com/embed/S1edY5Plsu0" frameborder="0"></iframe>
                <hr/>
                <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                    <p>Is it okay to use this photo?</p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}
