import React, {useState} from 'react';
import { Button, Header, Icon, Modal, Card, Container, Popup } from 'semantic-ui-react'

export function VideoDescription(props) {
    return (
        <Modal open={props.isOpen} size='tiny' closeOnEscape={true} closeOnDimmerClick={false}>
            <Modal.Header>Is this the video you are looking to download?</Modal.Header>
            <Modal.Content>
                <iframe id="ytplayer" type="text/html"  width="470" height="300" src={props.videoUrl} frameborder="0"></iframe>
            </Modal.Content>
            <Modal.Content>
                <Modal.Description>
                    <Header>{props.videoTitle}</Header>
                    <p>{props.videoDescription}</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Content>
                <Popup content={props.videoFileName} position='bottom center' trigger={<Button icon='download' content='Download Video' color='green'/>} />
                <Button icon='close' color='red' content='Nope! Cancel'/>
            </Modal.Content>
        </Modal>
    )
}
