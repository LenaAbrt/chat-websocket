import React from 'react';

const TechInfo = ({websocketUrl, connectionStatus}) => {
    return (
        <div>
            <h3>Teh info</h3>
            <div>
                <p>Websocket: {websocketUrl}</p>
                <p>Status: {connectionStatus}</p>
                <p>Protocol: WebSocket (wss//)</p>
                <p>Type: </p>
            </div>
        </div>
    );
};

export default TechInfo;
