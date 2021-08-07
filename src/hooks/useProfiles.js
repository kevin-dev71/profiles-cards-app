import { useEffect, useState } from "react"

const BASE_URL = 'https://kevprofiles-api.herokuapp.com/api/profiles'

export const useProfiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    (async function () {
      let response = await fetch(BASE_URL)
      setProfiles(await response.json())
    })()
  }, [])

  const deleteProfile = async (id, setLoader) => {
    setLoader(true)
    await fetch(`${BASE_URL}/${id}` , {
      method: 'DELETE'
    })
    const newState = profiles.filter(profile => profile._id !== id)
    setLoader(false)
    setProfiles(newState)
  }

  const createProfile = async (profile, setLoader) => {
    setLoader(true)
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profile)
  })

  const data = await res.json()
  if(!data.error){
    setProfiles([...profiles, data])
  } 
  // TODO handleError
  setLoader(false)
  }

  const updateProfile = async (profile, setLoader) => {
    setLoader(true)
    const res = await fetch(`${BASE_URL}/${profile._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profile)
  })

  const data = await res.json()
  if(!data.error){    
    setProfiles([...profiles.filter(item => item._id !== profile?._id), data])
  } 
  // TODO handleError
  setLoader(false)
  }
  
  return {
    profiles, deleteProfile, createProfile, updateProfile
  }
}