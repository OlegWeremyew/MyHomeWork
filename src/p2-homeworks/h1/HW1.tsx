import React from 'react'
import Message from './Message'


const messageData = {
    avatar: 'data:image/jpeg;base64,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',
    name: 'Oleg',
    message: 'Hello! How are you? What are you doing tonight?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            <div>
                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                />
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1