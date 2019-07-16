import React, {useState} from 'react';
import { Grid, Header, Input, Popup } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './home.css';
export function Home() {
    const[name, setName] = useState('test');

    return (
        <Grid divided='vertically'>
            <Grid.Row columns={2}>
                <Grid.Column id="first-segment">
                    <div>
                        <Header as='h1'>Download your favourite Youtube Video in 3 easy steps</Header>
                        <ol>
                            <ul>
                                Enter your Url
                            </ul>
                            <ul>
                                Verify your video
                            </ul>
                            <ul>
                                Download. Its' easy and Free
                            </ul>
                        </ol>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <Header as='h2'>
                        <Header.Content>
                        DYV - Download Youtube Video
                        <Header.Subheader>Free | Fast | Fun</Header.Subheader>
                        </Header.Content>
                    </Header>
                    <Popup
                        trigger={<Input
                            action={{ color: 'teal', labelPosition: 'left', icon: 'download', content: 'https://youtube.com/' }}
                            actionPosition='left'
                            placeholder='Search...'
                        />       }
                        header='Video Search'
                        content='Click after you enter an url'
                        on='hover'
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}