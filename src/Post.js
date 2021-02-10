import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

function Post({ displayName, username, verified, text, image, avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://pbs.twimg.com/profile_images/1343633760542208002/CZ5ETyT__400x400.jpg"/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Devin Põlluste{" "}
                            <span>
                                <VerifiedUserIcon className="post__badge" />
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Dummy text</p>
                    </div>
                </div>
                <img src="https://images.shulcloud.com/111/uploads/Yael/Chagim/celebration-kiddush-220x220.jpg" alt=""/>
                <div className="post__footer">

                </div>
            </div>
        </div>
    );
}

export default Post;
