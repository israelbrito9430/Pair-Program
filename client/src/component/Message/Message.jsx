import React, {useEffect} from 'react';


const Message = (props) =>{
    useEffect(() => {
      setTimeout(() => {
          props.setShowMessage(false)
      }, 2000);  
    }, [])
    return <p>{props.msg}</p>
}
export default Message;