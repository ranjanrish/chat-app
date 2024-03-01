import React from "react";
import './MessageList.css';

function MessageList() {
    return (
        <div id="container">
            <div id="message-header">
                <p>Messages</p>
                <hr />
            </div>
            <div id="messages">
                {/**
                <MessageBody 
                profilepic={}
                name={}
                recentMessage={}
                />
                 */}                            
            </div>
        </div>
    );
}

export default MessageList;