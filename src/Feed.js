import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))  
        ))
    }, [])

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <Post 
            displayName="Devin Põlluste"
            username="devinpolluste"
            verified={true}
            text="Have a great day!"
            avatar="https://pbs.twimg.com/profile_images/1343633760542208002/CZ5ETyT__400x400.jpg"
            image="https://e-cdns-images.dzcdn.net/images/cover/d4d73176ffe0577da3cf464cb6334afa/500x500.jpg"
            />
        </div>
    );
}

export default Feed;
