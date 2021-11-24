import React from 'react'
import c from "./AlternativeMessage.module.css"

export type AlternativeMessageDataType = {
    avatar: string
    name: string
    message: string
    time: string

}

function AlternativeMessage(props: AlternativeMessageDataType) {
    return (
        <div className={c.message}>
            <img src={props.avatar} alt="avatar"/>

            <div className={c.radius}/>

            <div className={c.content}>
                <div className={c.name}>{props.name}</div>
                <div className={c.text}>{props.message}</div>
                <div className={c.time}> {props.time}</div>
            </div>

        </div>
    )
}

export default AlternativeMessage;

