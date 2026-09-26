import React, { useEffect } from 'react'
import { useState } from 'react'
import { ShieldCheck,Plus,Keyboard } from 'lucide-react'
import {dummyStats, dummyUser} from "../assets/asset.js"
import "../CSS_folder/Dashboard.css"
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  const user= dummyUser;
  const userName= user.fullName;
  const userEmail= user.primaryEmailAddress.emailAddress
   const naviagte=useNavigate()

  const[meetingCode, setMeetingCode] =useState("");
  const[creating, setcreating]=useState(false);
  const[currentTime,setCurrentTime]=useState(new Date())
  const stats= dummyStats

  useEffect(()=>{
    const timer= setInterval(()=> setCurrentTime(new Date()),1000)
    return ()=> clearInterval(timer)
  },[])

  const handleCreateMeeting=()=>{
     setcreating(true)
     const chars="abcdefghijklmnopqrstuvwxyz"
     const segments= ()=> Array.from({length:3},()=> chars[Math.floor(Math.random()* chars.length)]).join("")
     const newMeetingId=`${segments()}-${segments()}-${segments()}`
     setTimeout(()=> {
      setcreating(false)
      console.log("meeting created successfully")

     },400)
     naviagte(`/meeting/${newMeetingId}`)
  }
  const handleJoinMeeting=(event)=>{
    event.preventDefault()
    const cleanId = meetingCode.trim()
    if(!cleanId){
      console.log("meeting id is incorrect, please enter the correct meeting id")
    return;
    }
    naviagte(`/meeting/${cleanId}`)
  }
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
            <div className='meeting_section'>
              <button onClick={handleCreateMeeting}>{creating ? ("Creating..."): (<span className='new_meeting_desc'><Plus size={10}/> New Meeting</span>)}</button>
             <div className='join_meeting_section'>
              <Keyboard size={12}/>
              <form onSubmit={handleJoinMeeting}>
               <input 
              type="text"
              placeholder='Enter Meeting Code'
              value={meetingCode}
              onChange={(event) => setMeetingCode(event.target.value)}
              />
              <button 
             disabled={!meetingCode.trim()}
              className='join_meeting_btn'>Join</button>
             </form>
             
             </div>

            </div>
        </div>
        </div>
       <div className='dashboard_right_message_wrapper'>
        <div className='dashboard_right_message_container'>
           <p className='username_in_right_Side'>Hi,<span className='user_name_show'>{userName}</span></p>
        <div className='timing_section'>
           <h2>{currentTime.toLocaleTimeString([],{hour:'2-digit', 
            minute:'2-digit', hour12:true})}</h2>
            <p>{currentTime.toLocaleDateString(undefined,{
              weekday:'long',
              month:'short',
              day:'2-digit',
              year:'numeric'
            })}</p>
        </div>
        <div className='user_email_with_plan'>
          <p className='user_logged_in'>Logged in as:<span>{userEmail}</span></p>
          
          {stats.plan == "premium" ? (<div className='premium_background_plan'>
           <span className='user_plan'>{stats.plan}</span>
          </div>) : (<span className='free_plan'>Free</span>)}
           
        </div>
        { stats && 
          <div className='user_meeting_details'>
          <div className='meeting_detail_container'>
            <span className='monthly_meeting'>Monthly Meetings </span>
              {
                stats.monthlyLimit ? (`${stats.monthlyCount} / ${stats.monthlyLimit} used `) : (`${stats.monthlyCount} created Unlimited`)
              }

            </div>  
            </div>  
        }
          
        </div>
       </div>
      </div>
    </div>
  )
}

export default Dashboard
