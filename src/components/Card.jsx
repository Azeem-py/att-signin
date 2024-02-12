import React from 'react'

const Card = ({ userID, password, no }) => {
  return (
    <div className='flex flex-col gap-3 text-xl font-semibold border rounded-xl p-2 drop-shadow-lg'>
      <span className=''>
        <p className='text-red-800 italic mb-2'>No. {no}</p>
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
