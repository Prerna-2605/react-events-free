import React from 'react'

const Heading = ({ className = '', text }) => {
    return (
        <h2 className={`poppins font-bold text-5xl ${className} `}>
            {text}
        </h2>
    )
}

export default Heading