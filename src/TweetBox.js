import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1343633760542208002/CZ5ETyT__400x400.jpg"/>
                    <input placegolder="What's happening?" type="text" />
                    <input placeholder="Enter image URL" type="text" />
                </div>
                <Button>Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
