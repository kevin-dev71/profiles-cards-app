import "./App.css"
import { useState } from 'react'

import ProfileCard from "./components/ProfileCard"
import AddProfileCard from "./components/AddProfileCard"
import Loader from "./components/Loader"

import { useProfiles } from "./hooks/useProfiles"

function App() {
  const { profiles, deleteProfile, createProfile, updateProfile } = useProfiles()
  const [loader, setLoader] = useState(false)

  const renderList = () => {
    return (<>
      <AddProfileCard createProfile={createProfile} setLoader={setLoader} />
          {profiles.map((profile) => {
            return <ProfileCard key={profile._id} profile={profile} deleteProfile={deleteProfile} setLoader={setLoader} updateProfile={updateProfile} />
          })}
    </>)
  }

  return (
    <>
      <div className="drop">
        <div className="drop__container">
          { loader ? <Loader /> : renderList() }
          
        </div>
      </div>
    </>
  )
}

export default App
