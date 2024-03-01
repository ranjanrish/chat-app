import React from 'react';
import './App.css';
import SideNavbar from './components/Navbar';
import MessageList from './components/MessageList';
import Inbox from './components/Inbox';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(' https://nontjncnzeoljixuhrbl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vbnRqbmNuemVvbGppeHVocmJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyNDE5OTAsImV4cCI6MjAyMzgxNzk5MH0.Pui_4drbOQHYqre_V7Dk760L2bKTMVuJ3hp6Lzjn8xU')

function App() {
  (async () => {
    const { data, error } = await supabase.from('group-chat-database').select();
    console.log(data)
  })()

  return (
    <>
      <div id='interface'>
        <div id='side-navbar'>
          <SideNavbar />
        </div>
        <div id='message-list'>
          <MessageList />
        </div>
        <div id='inbox'>
          <Inbox />
        </div>
      </div>
    </>
  );
}

export default App;
