import React, {useState} from 'react';
import {CONNECTION_STATUS} from "../../utils/statuses";
import Infobox from "./Infobox";

const ConnectionForm = ({userName, setUserName, handleConnect, connectionStatus}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        handleConnect(userName);
    }

    return (
        <div>
            <h3>Connection to chat</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Your name</label>
                    <input
                        type='text'
                        value={userName}
                        placeholder='Enter your name'
                        onChange={(event) => setUserName(event.target.value)}
                    />
                </div>
                <button>
                    {/*todo wifi sign*/}
                    {
                        connectionStatus === CONNECTION_STATUS.CONNECTED ? 'Connected' : 'Connecting...'
                    }
                </button>
            </form>

            <Infobox/>

        </div>
    );
};

export default ConnectionForm;
