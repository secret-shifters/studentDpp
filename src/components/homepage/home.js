import React from "react";
import styles from "./home.module.css";


export default function Home() {
  return (
    <>
      <div className={styles.homePage}>
        <div className={styles.container}>
          <div className={`${styles.gridItemLeft} ${styles.homeLeft}`}>
            <div className={styles.topText}>
              <div className={styles.slideLeft}>
                A place to <strong> securely </strong> <br />
              </div>

              <div className={styles.slideRight}>
                store <strong> Your  Credentials</strong>
              </div>
            </div>

           <br></br>

            <a href="/carbonCalculator" passHref>
              <span className={styles.button}>Add student &rarr;</span>
            </a>
            <br></br>
            <br></br>
            <a href="/carbonCalculator" passHref>
              <span className={styles.button}>View School &rarr;</span>
            </a>
           
          </div>
          

          <div className={`${styles.gridItemRight} ${styles.homeRight}`}>
            <img
              src="https://assets.entrepreneur.com/content/3x2/2000/20190306164637-GettyImages-959546498.jpeg"
              placeholder="blur"
              alt="Home"
              width={730}
              height={740}
            />
          </div>
        </div>
       
      </div>
    </>
  );
}
