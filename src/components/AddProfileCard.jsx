import styles from "./ProfileCard.module.css"

import { useState } from "react"

import { PlusIcon } from "@heroicons/react/solid"
import { XCircleIcon } from "@heroicons/react/solid"
import { CheckIcon } from "@heroicons/react/solid"

const AddProfileCard = ({setLoader, createProfile}) => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    lastname: "",
    age: "",
  })
  const [showForm, setShowForm] = useState(false)

  function handleChange(evt) {
    setProfile({
      ...profile,
      [evt.target.name]: evt.target.value,
    })
  }

  function handleSubmit() {
    // setShowForm(false)
    createProfile(profile, setLoader)
    setProfile({
      name: "",
      email: "",
      lastname: "",
      age: "",
    })
  }

  return (
    <article>
      {showForm ? (
        <div className={styles.drop__card}>
          <div className={styles.drop__data}>
            <img
              src="https://image.flaticon.com/icons/png/512/3011/3011270.png"
              alt="avatar"
              className={styles.drop__img}
            />
            <div>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Name"
              />
              <input
                type="text"
                name="lastname"
                value={profile.lastname}
                onChange={handleChange}
                placeholder="Last Name"
              />
              <input
                type="number"
                name="age"
                value={profile.age}
                onChange={handleChange}
                placeholder="Age"
              />
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
          </div>
          <div>
            <CheckIcon
              className={`${styles.add__button} ${styles.btn}`}
              onClick={() => handleSubmit()}
            />
            <XCircleIcon
              className={`${styles.add__button} ${styles.btn}`}
              onClick={() => {
                setShowForm(false)
                setProfile({
                  name: "",
                  email: "",
                  lastname: "",
                  age: "",
                })
              }}
            />
          </div>
        </div>
      ) : (
        <div
          className={`${styles.drop__card} ${styles.btn}`}
          onClick={() => setShowForm(true)}
        >
          <PlusIcon className={styles.add__button} />
        </div>
      )}
    </article>
  )
}

export default AddProfileCard
