import React, {useState} from 'react';

const MessageInput = ({handleSendMessage}) => {
    const [inputMessage, setInputMessage] = useState('');

    const onSend = () => {
        if(inputMessage.trim()){
            handleSendMessage(inputMessage);
            setInputMessage('')
        }
    }


    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            onSend();
        }
    }

    return (
        <div>
            <input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder='Enter message'
                type='text'
            />
            <button
                onClick={onSend}
            >Send
            </button>
        </div>
    );
};

export default MessageInput;
