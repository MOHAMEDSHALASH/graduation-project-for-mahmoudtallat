/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Chat.css"

// REACT ICONS
import { FaMicrophoneAlt } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

import DATA from "./Data.json"


export default function Chat() {


    const [SearchValue,setSearchValue] = useState("")
    const [ChatData,setChatData] = useState ([])
    const [ChatContainer,setChatContainer] = useState(false)

    // START WHEN CLICK BUTTON SEND
    function submit(eo){
        if(SearchValue !==""){
            eo.preventDefault(eo);
            const Filtered = DATA.filter((val)=>(val.quastion.toLowerCase().includes(SearchValue.toLowerCase())))
            let data= {
                quastion:SearchValue,
                answer : Filtered.length>0 ? Filtered[0].answer : "أسف لا يمكنني فهمك . من فضلك ادخل المزيد من المعلومات عن المحتوي الذي تريده , شكرا لك",
                urlLink : Filtered.length>0 ? Filtered[0].URLlink : undefined

            }
            ChatData.push(data)
            setSearchValue("")

            let scroll=document.querySelector(".box_replay");
            scroll.scrollTo(0,scroll.scrollHeight)

            setTimeout(()=>{
                scroll.scrollTo(0,scroll.scrollHeight)
            },1)
        }
    }
    // END WHEN CLICK BUTTON SEND

    useEffect(()=>{
        setChatData(ChatData)
    },[SearchValue])

    // WHEN USE MIC
   function Mic(){
    let speech=true;
      window.SpeechRecognition= window.webkitSpeechRecognition;
      let recognition=new SpeechRecognition();
      recognition.lang="AR-ar"  //language 
      recognition.interimResults;
      recognition.addEventListener('result',e=>{
          let transcript=Array.from(e.results)
          .map(result=>result[0])
          .map(result =>result.transcript)
          setSearchValue(SearchValue + transcript +" ") ;
          console.log(transcript)
      })
      if(speech){
          recognition.start()
      }
   }

    // START AUTO MESSAGE FROM BOT
    useEffect(()=>{
        if(ChatContainer===true){
            let x=1;
        const autoWrite=document.querySelector('.auto');

          const autowritee=()=>{
          const title="مرحبا ! كيف يمكنني مساعدتك 🤔"
          autoWrite.innerHTML=title.slice(0,x);
          x++;
          if(title.length<x){
               x=title.length;
            }
        };

        const stoop=setInterval(autowritee,80);
        }
    },[ChatContainer])
    // END AUTO MESSAGE FROM BOT

  return (
    <>
        <div className='icon_chat' onClick={()=>{
            setChatContainer(ChatContainer===false ? true : false)
            setSearchValue("")
        }}
        >
            <img src="   https://cdn-icons-png.flaticon.com/512/9732/9732800.png " alt="" />
        </div>
        {/* ============ */}
        {ChatContainer && 
                <div className='chatBot'>
                <div className='overlay' onClick={()=>{
                    setChatContainer(false)
                }}></div>
        
                        <div className='chat_container'>
                        <div className='box_replay'>
                            <div className='item left '>
                                <img src={require("../../images/robot_icon.png")} alt="botAvatar" />
                                <p className='answer auto'></p>
                            </div>
            
                            {ChatData.map((val,i)=>(
                                <div key={i}>
                                    <div className='item right'>
                                        <img src={require("../../images/user_icon.png")} alt="userAvatar" />
                                        <p className='quastion'>{val.quastion}</p>
                                    </div>
                                    <div className='item left'>
                                        <img src={require("../../images/robot_icon.png")} alt="botAvatar" />
                                        <p className='answer'>{val.answer} {val.urlLink !== undefined ? <Link to={val.urlLink}>show more</Link> : ""}</p>
                                    </div>
                                </div>
                                
                            ))}
                        </div>
            
                        <div className='controls flex'>
                            <form action="#">
                                <input onChange={(eo)=>{
                                    setSearchValue(eo.target.value)
                                }}
                                value={SearchValue}
                                autoFocus
                                type="text" placeholder='اتريد المساعدة قم بطرح سؤالك ؟' required />
                                <button onClick={(eo)=>{submit(eo)}} type='submit' className='flex'><IoSend /></button>
                            </form>
                            <div className='mic' onClick={()=>{
                                Mic()
                            }}>
                                <FaMicrophoneAlt />
                            </div>
                        </div>
                    </div>
                 </div>
        }
    </>
  )
}
