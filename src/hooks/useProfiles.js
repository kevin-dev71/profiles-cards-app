import { useEffect, useState } from "react"

export const useProfiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    (async function () {
      let response = await fetch('http://localhost:8080/api/profiles')
      setProfiles(await response.json())
    })()
  }, [])

  const deleteProfile = async (id, setLoader) => {
    setLoader(true)
    await fetch(`http://localhost:8080/api/profiles/${id}` , {
      method: 'DELETE'
    })
    const newState = profiles.filter(profile => profile._id !== id)
    setLoader(false)
    setProfiles(newState)
  }

  const createProfile = async (profile, setLoader) => {
    setLoader(true)
    const res = await fetch(`http://localhost:8080/api/profiles`, {
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
    const res = await fetch(`http://localhost:8080/api/profiles/${profile._id}`, {
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