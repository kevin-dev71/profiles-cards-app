import styles from "./ProfileCard.module.css"
import { useState } from 'react'

import { PencilAltIcon } from "@heroicons/react/solid"
import { TrashIcon } from "@heroicons/react/solid"
import { XCircleIcon } from "@heroicons/react/solid"
import { CheckIcon } from "@heroicons/react/solid"

const ProfileCards = ({ profile, deleteProfile, setLoader, updateProfile }) => {

  const [showForm, setShowForm] = useState(false)
  const [editProfile, setEditProfile] = useState(profile)

  function handleChange(evt) {
    setEditProfile({
      ...editProfile,
      [evt.target.name]: evt.target.value,
    })
  }

  function handleSubmit() {
    // setShowForm(false)
    updateProfile(editProfile, setLoader)
  }

  const renderArticle = <article>
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
            value={editProfile.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="lastname"
            value={editProfile.lastname}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <input
            type="number"
            name="age"
            value={editProfile.age}
            onChange={handleChange}
            placeholder="Age"
          />
          <input
            type="email"
            name="email"
            value={editProfile.email}
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
            setEditProfile(profile)
          }}
        />
      </div>
    </div>
  ) : (
    <article>
      <div className={styles.drop__card}>
        <div className={styles.drop__data}>
          <img
            src="https://image.flaticon.com/icons/png/512/3011/3011270.png"
            alt="avatar"
            className={styles.drop__img}
          />
          <div>
            <h1
              className={styles.drop__name}
            >{`${profile.name} ${profile.lastname} (${profile.age})`}</h1>
            <span className={styles.drop__email}>{profile.email}</span>
          </div>
        </div>
        <div>
          <PencilAltIcon className={styles.drop__social} onClick={() => setShowForm(true)} />
          <TrashIcon
            className={styles.drop__social}
            onClick={() => {
              deleteProfile(profile._id, setLoader)
            }}
          />
        </div>
      </div>
    </article>
  )}
</article>
  return renderArticle
}

export default ProfileCards
