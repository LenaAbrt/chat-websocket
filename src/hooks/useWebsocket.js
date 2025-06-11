import {CONNECTION_STATUS, MESSAGE_STATUS} from "../utils/statuses";
import {useRef, useState} from "react";

export const useWebsocket = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [connectionStatus, setConnectionStatus] = useState(CONNECTION_STATUS.DISCONNECTED);
    const [messages, setMessages] = useState([]);
    const ws = useRef(null);

    const addNewMessage = (message) => {
        setMessages(prevState => [...prevState, message])
    }
    // 1. connection to webSocket => newWebsocket()
    // 2. Current event (event handler) > connection, message receiving
    // 3.

    const connect = (userName) => {
        if(!userName.trim()){
            alert('Enter your name, please')
            return;
        }
        //todo connection > try
    }

    return {
        isConnected,
        connect
    }
}

