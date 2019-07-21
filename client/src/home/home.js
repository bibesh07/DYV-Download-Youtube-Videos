import React, {useState} from 'react';
import { Grid, Header, Input, Popup, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './home.css';
import {VideoDescription} from '../videoDescription/VideoDescription';

export function Home() {
    const[videoUrl, setVideoUrl] = useState('');
    const[isOpen, setIsOpen] = useState(false);
    const[videoTitle, setVideoTitle] = useState('Test Title');
    const[videoDescription, setVideoDescription] = useState('This is a test video Description');
    // const[videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed/DPwiFdWAUHk');
    const[videoFileName, setVideoFileName] = useState('test.mp4');

    const validateVideo = (e) => {
        console.log('The video has been clicked');
        console.log(e);
    }   


    const trimVideoInput = (e) => {
        let stringToTrim = e.target.value;
        console.log(stringToTrim);
        if (stringToTrim.match('https')) {
            setVideoUrl(stringToTrim.slice(stringToTrim.indexOf('=')+1, stringToTrim.length));
        } else {
            setVideoUrl(stringToTrim);
        }

        e.target.Value = videoUrl;
    }

    return (
        <Grid divided='vertically'>
            <VideoDescription isOpen={isOpen} videoTitle={videoTitle} videoDescription={videoDescription} videoFileName={videoFileName} videoUrl={videoUrl}/>
            <Grid.Row columns={2}>
                <Grid.Column id="first-segment">
                    <div id="instruction-segment">
                        <h1>Download your favourite <a target='_blank' href='https://youtube.com'>Youtube</a> Video in 3 easy steps</h1>
                        <ol>
                            <ul>
                                <h3><Icon name="keyboard outline" size="huge"/> &emsp;&emsp; Enter Youtube Url You Want to Download</h3>
                            </ul>
                            <br/>
                            <ul>
                                <h3><Icon name="check circle outline" size="huge"/> &emsp;&emsp; Verify your video</h3>
                            </ul>
                            <br/>
                            <ul>
                                <h3><Icon name="cloud download" size="huge"/> &emsp;&emsp; Click Download. Thats it you're all set</h3>
                            </ul>
                        </ol>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div id='search-segment'>
                        <Header as='h2'>
                            <Header.Content>
                                <Icon color='red' name="youtube"/>
                            </Header.Content>
                            <Header.Content>
                            DYV - Download Youtube Video
                            <Header.Subheader>Free | Fast | Fun</Header.Subheader>
                            </Header.Content>
                        </Header>
                        <Popup
                            trigger={<Input
                                action={{ color: 'red', labelPosition: 'left', icon: 'download', content: 'https://youtube.com/watch?v=', onClick: validateVideo }}
                                actionPosition='left'
                                placeholder='Search...'
                                onChange={trimVideoInput}
                                value={videoUrl}
                            />       }
                            header='Video Search'
                            content='Click after you enter an url'
                            on='hover'
                            position='bottom left'
                        />
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}