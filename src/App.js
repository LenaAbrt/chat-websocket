import './App.css';
import {useWebsocket} from "./hooks/useWebsocket";
import {WEBSOCKET_URL} from "./utils/statuses";
import {useState} from "react";
import ConnectionForm from "./components/connection/ConnectionForm";
import ConnectionStatus from "./components/connection/ConnectionStatus";
import TechInfo from "./components/ui/TechInfo";
import ChatArea from "./components/chat/ChatArea";
import MessageInput from "./components/chat/MessageInput";

function App() {
    const [userName, setUserName] = useState('');

    const {
        isConnected,
        connect,
        //todo connectionStatus,
        //todo sendMessage
    } = useWebsocket(WEBSOCKET_URL);


    const handleConnect = (userNameFromInput) => {
        setUserName(userNameFromInput);
        connect(userNameFromInput);
    }

    const handleSendMessage = (text) => {
        sendMessage(userName, text)
    }

    return (
        <div className="App">
            <div>
                <h1>WEB socket chat demo</h1>
                <h5>How of Websocket work in React?</h5>
            </div>
            {
                !isConnected ? (
                    <ConnectionForm
                        userName={userName}
                        setUserName={setUserName}
                        handleConnect={handleConnect}
                        connectionStatus={connectionStatus}
                    />
                ) : (
                    <>
                        <div>
                            <ConnectionStatus isConnected={isConnected}/>
                        </div>
                        <div>
                            <ChatArea/>
                            <MessageInput handleSendMessage={handleSendMessage}/>
                        </div>
                    </>
                )
            }
            <TechInfo websocketUrl={WEBSOCKET_URL} connectionStatus={connectionStatus}/>
        </div>
    );
}

export default App;
