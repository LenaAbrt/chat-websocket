import React from 'react';
import {CONNECTION_STATUS} from "../../utils/statuses";

const ConnectionStatus = ({isConnected, disconnect, connectionStatus, userName}) => {
    const getStatusText = () => {
        switch (connectionStatus) {
            case CONNECTION_STATUS.CONNECTING:
                return 'connecting';
            case CONNECTION_STATUS.CONNECTED:
                return 'connected';
            case CONNECTION_STATUS.ERROR:
                return 'Error';
            default:
                return 'Disconnected'
        }
    }

    return (
        <div>
            <div>
                {getStatusText()}

            </div>
            <div>{userName}</div>
            <button type='button'
                    onClick={disconnect}
            >Disconnect</button>
        </div>
    );
};

export default ConnectionStatus;
