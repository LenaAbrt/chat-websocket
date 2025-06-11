import React from 'react';
import {MESSAGE_STATUS} from "../../utils/statuses";

const Message = ({message}) => {
    return (
        <div>
            <div>
                {
                    message.type !== MESSAGE_STATUS.SYSTEM && message.type !== MESSAGE_STATUS.SENT && (
                        <div>
                            {message.userName}
                        </div>
                    )
                }

                <div>{message.text}</div>
                <div>{message.timeStamp}</div>

            </div>
        </div>
    );
};

export default Message;
