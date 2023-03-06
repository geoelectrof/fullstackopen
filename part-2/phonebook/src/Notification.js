import React from 'react'

const Notification = ({ message, type }) => {
    console.log('message', message)
    if (message===null){
        return null
    }
    return (
        <div className={type}>{message}</div>
    )
}

export default Notification