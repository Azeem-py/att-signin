import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const GetData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  const handleGetData = () => {
    axios
      .get('http://127.0.0.1:3000/get-data')
      .then((resp) => {
        console.log(resp.data)
        setData(resp.data)
        setIsLoading(false)
      })
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    isLoading && handleGetData()
  }, [])

  // const Cards = () => {
  //   data.map((d) => {
  //     const { userID, password } = d
  //     return <Card userID={userID} password={password} />
  //   })
  // }
  // console.log(Cards)
  return (
    <div className='w-screen h-screen px-3 py-5 '>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className='flex xs:flex-col sm:flex-row flex-wrap gap-2'>
          {data.map((d) => {
            const { userID, password } = d
            return <Card userID={userID} password={password} />
          })}
        </div>
      )}
    </div>
  )
}

export default GetData
