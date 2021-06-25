import React, {useEffect} from 'react';
import  '../Message/Message.scss'


const Message = (props) =>{
    useEffect(() => {
      setTimeout(() => {
          props.setShowMessage(false)
      }, 2000);  
    }, [])
    return <p className="messageTab">{props.msg}</p>
}
export default Message;