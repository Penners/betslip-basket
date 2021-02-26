import { useState, useEffect } from 'react'

const DateTime = ({unix}) => {

    const date = new Date(parseInt(unix) * 1000)
    return (
        <time dateTime={date.toISOString()}>{date.toUTCString()}</time>
    )
    
}

export default DateTime