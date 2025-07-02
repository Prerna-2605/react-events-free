import React from 'react'
import AddComment from './common/AddComment'

const UserData = () => {
    return (
        <div className="max-w-[1320px] mx-auto px-3 ">
            {[...Array(5)].map((_, index) => (
                <AddComment key={index} />
            ))}
        </div>
    )
}

export default UserData