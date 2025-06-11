import {CONNECTION_STATUS, MESSAGE_STATUS} from "../utils/statuses";
import {useRef, useState} from "react";

export const useWebsocket = (url) => {
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
        if (!userName.trim()) {
            alert('Enter your name, please')
            return;
        }
        // status from connecting to connected
        try {
            setConnectionStatus(CONNECTION_STATUS.CONNECTING);
            ws.current = new WebSocket(url);

            ws.current.onopen = () => {
                setIsConnected(true);
                setConnectionStatus(CONNECTION_STATUS.CONNECTED)

                const joinMessage = {
                    type: MESSAGE_STATUS.JOIN,
                    useName: userName,
                    timeStamp: new Date().toISOString(),
                }

                ws.current.send(JSON.stringify(joinMessage))

                addNewMessage({
                    type: MESSAGE_STATUS.SYSTEM,
                    text: `${userName} connected`,
                    timeStamp: new Date().toLocaleTimeString(),
                })
            }
            ws.current.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data)
                    if (data.type === MESSAGE_STATUS.MESSAGE) {
                        addNewMessage({
                            type: MESSAGE_STATUS.RECEIVED,
                            userName: data.userName,
                            text: data.text,
                            timeStamp: new Date(data.timeStamp).toLocaleTimeString()
                        })
                    }
                } catch (err) {
                    addNewMessage({
                        type: MESSAGE_STATUS.RECEIVED,
                        userName: 'Server',
                        text: event.data,
                        timeStamp: new Date().toLocaleTimeString(),
                    })
                }
            }
            ws.current.onerror = error => {
                console.log(error, 'Websocket error');
                setConnectionStatus(CONNECTION_STATUS.ERROR);
            }

        } catch (err){
            console.log(err)
        }

    }

    const disconnect = () => {
        if(ws.current){
            ws.current.close();
        }
    }

    const sendMessage = (userName, text) => {
        if(!text.trim() || !isConnected ) return;
        const messageData = {
            type: MESSAGE_STATUS.MESSAGE,
            userName: userName,
            text: text,
            timeStamp: new Date().toISOString(),
        }

        addNewMessage({
            type: MESSAGE_STATUS.SENT,
            userName: userName,
            text: text,
            timeStamp: new Date().toLocaleTimeString(),
        });
        ws.current.send(JSON.stringify(messageData))
    }



    return {
        isConnected,
        connect,
        disconnect,
        sendMessage,
        connectionStatus,
        messages
    }
}

