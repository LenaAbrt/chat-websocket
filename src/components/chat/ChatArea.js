import React, {useEffect, useRef} from 'react';
import Message from "./Message";

const ChatArea = ({messages}) => {
    const messagesEndRef = useRef(null);

    //will scroll down
    const scrollDown = () => {
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        scrollDown()
    }, [messages]);

    return (
        <div>
            {
                messages.map((message, index) => (
                    <Message key={index} message={message}/>
                ))
            }
            <div ref={messagesEndRef}/>
        </div>
    );
};

export default ChatArea;
