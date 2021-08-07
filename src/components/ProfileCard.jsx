import styles from "./ProfileCard.module.css"

import { PencilAltIcon } from "@heroicons/react/solid"
import { TrashIcon } from "@heroicons/react/solid"

const ProfileCards = ({ profile, deleteProfile, setLoader }) => {
  return (
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
          <PencilAltIcon className={styles.drop__social} />
          <TrashIcon
            className={styles.drop__social}
            onClick={() => {
              deleteProfile(profile._id, setLoader)
            }}
          />
        </div>
      </div>
    </article>
  )
}

export default ProfileCards
