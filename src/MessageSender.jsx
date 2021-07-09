import { Avatar } from '@material-ui/core';
import React,{useState} from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useSelector } from 'react-redux';

function MessageSender() {
    const user = useSelector(state => state.user)
    const [input, setInput] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        

        setInput("")
        setImgUrl("")
    }

    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form action="" >
                    <input 
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    className="messageSender_input" 
                    placeholder={`What's on your mind?`}/>

                    <input 
                    value={imgUrl}
                    onChange={(e)=>setImgUrl(e.target.value)}
                    placeholder="image URL (Optional)"/>

                    <button onClick={handleSubmit} type="submit">Hiden</button>
                </form>
            </div>

            <div className="messageSender__bottom">
              <div className="messageSender__option">
                  <VideocamIcon style={{ color:"red" }}/>
                  <h3>Live Video</h3>
              </div>
              <div className="messageSender__option">
                  <PhotoLibraryIcon style={{ color:"green" }}/>
                  <h3>Photo/Video</h3>
              </div>
              <div className="messageSender__option">
                  <InsertEmoticonIcon style={{ color:"orange" }}/>
                  <h3>Deeling/Activity</h3>
              </div>
            </div>
        </div>
    )
}

export default MessageSender;
