import React from 'react'
import c from "./Message.module.css"

export type messageDataType = {
    avatar: string
    name: string
    message: string
    time: string

}

function Message(props: messageDataType) {
    return (
        <div className={c.message}>
            <div className={c.avatar}>
                <div className={c.avatar}>
                    <img src={props.avatar} title="ava"/>
                </div>
                <div className={c.name}>
                    {props.name}
                </div>
            </div>
            <div className={c.text}>
                <div>
                    {props.message}
                </div>
                <div className={c.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message;
