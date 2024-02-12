import React from 'react'

const Card = ({ userID, password }) => {
  return (
    <div className='flex flex-col gap-3 text-xl font-semibold border rounded-xl p-2 drop-shadow-lg'>
      <span className=''>
        <p>User ID:</p>
        <p className='text-red-700'>{userID}</p>
      </span>
      <span>
        <p>Password:</p>
        <p className='text-red-700'>{password}</p>
      </span>
    </div>
  )
}

export default Card
