import React from "react";
import { ThemeProvider, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import { TextField, List } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import MessageComponent from "./MessageComponent";

function MessagesList() {
    const headerTheme: Object = createTheme({
        typography: {
            fontSize: 15
        }
    });
    return (
        <div id="messages-list-container">
            <div id='header'>
                <ThemeProvider theme={headerTheme}>
                    <Typography>
                        Messages
                    </Typography>
                </ThemeProvider>
            </div>
            <Divider />
            <div id="search-bar">
                <TextField size='small' placeholder='Search messages' sx={{
                    left: '10px',
                    top: '10px',
                    width: '24vw'
                }} />
            </div>
            <div id='global-list'>
                <List>
                    {
                        MessagesListData
                            ? MessagesListData.map((listData) => {
                                return (<MessageComponent avatar={listData.avatar} name={listData.name} lastText={listData.lastText} lastTextAt={listData.lastTextAt} />)
                            })
                            : null
                    }
                </List>
            </div>
        </div>
    );
}

export default MessagesList;