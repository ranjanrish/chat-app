import React from "react";
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
import '../stylesheet.css'

interface MessageComponentData {
    avatar: string,
    name: string,
    lastText: string,
    lastTextAt: string
}

function MessageComponent(data: MessageComponentData) {
    const { avatar, name, lastText, lastTextAt } = data;
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar src={avatar} variant="rounded" />
            </ListItemAvatar>
            <ListItemText primary={name} secondary={lastText} />
            <Typography variant="body2" classes=".MuiTypography-alignRight" sx={{ fontSize: '12px' }}>
                {lastTextAt}
            </Typography>
        </ListItem>
    );
}

export default MessageComponent;