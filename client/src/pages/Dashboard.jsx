import React from 'react'
import { useState } from 'react'
import { ShieldCheck } from 'lucide-react'
const Dashboard = () => {
  const[meetingCode, setMeetingCode] =useState({
    new_code:""
  })
  return (
    <div className='dashboard_wrapper'>
      <div className='dashboard_content'>
        <div className='dashboard_left_message_wrapper'>
            <div className='dashboard_message'>
          <span className='dashboard_security_message'><ShieldCheck size={10} />Secure Peer-to-Peer Encryption</span>  
          <h2 className='dashboard_title'>High Quality Video Calls 
            <span className='dashboard_highlighted_title'> Built for Everyone</span>
            </h2>
            <p>Connect collaboratea and celebrate from anywhere with ultra-low latency video calls, screen sharing and real time chat</p>
            <div>
              <button>+ New Meeting</button>
              <input 
              type="text"
              placeholder='Enter Meeting Code'
              value={meetingCode.new_code}
              onChange={(event) => setMeetingCode({...meetingCode, new_code: event.target.value})}
              />
              <button>Join</button>
            </div>
        </div>
        </div>
      
          
          
      </div>
    </div>
  )
}

export default Dashboard
