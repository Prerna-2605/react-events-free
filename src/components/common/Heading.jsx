import React from 'react'

const Heading = ({ className = '', text }) => {
    return (
        <h2 className={`font-poppins font-bold text-5xl max-lg:text-4xl ${className} `}>
            {text}
        </h2>
    )
}

export default Heading