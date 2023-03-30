import React from 'react'
import assets from '../assets';
import styles from '../styles/Global';

const Download = () => {
  return (
    <div className={`${styles.section}
    ${styles.bgWhite}`}>
      <div className={`${styles.subSection}
      flex-col text-cente`}>
        <div>
          <h1 className={`${styles.h1Text}
          ${styles.blackText}`}>Download the App</h1>
          <p className={`${styles.pText}
          ${styles.blackText}`}>Try our app to get more amazing experience</p>
        </div>
        <button className={styles.btnPrimary}>
          Download
        </button>
        <div className={styles.flexCenter}>
          <img 
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
      </div>

    </div>
  )
}

export default Download