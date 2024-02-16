import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import { baseURL } from '../helpers/data'

const GetData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  let count = 1

  const handleGetData = () => {
    axios
      .get(`${baseURL}get-data`)
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

  return (
    <div className='w-screen h-screen px-3 py-5 '>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className='flex xs:flex-col sm:flex-row flex-wrap gap-2'>
          {data.map((d) => {
            const { id, userID, password } = d
            const currentCard = (
              <Card userID={userID} password={password} key={id} no={count} />
            )
            count++
            return currentCard
          })}
        </div>
      )}
    </div>
  )
}

export default GetData
