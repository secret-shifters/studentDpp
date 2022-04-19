import React from 'react';
import styles from './school.module.css';


export default function SchoolDashboard(props) {
 

  return (
    <>
      <div className={styles.dashPage}>
      <h2>SCHOOL DASHBOARD</h2>
        <div className={styles.container1}>
          <div className={styles.LeftPosition}>
            <div className={styles.img}>
              <img
                src="https://d3jlwjv6gmyigl.cloudfront.net/images/2019/11/school1.jpg"
                placeholder="blur"
                alt="school logo"
                width={350}
                height={300}
              />
            </div>
          </div>
          
          <div className={styles.RightPosition}>
            <div className={styles.organisation}>

               <div className={styles.organisationData}>
                 <div className={styles.row}>
                 <span className={styles.dataSpan}>
                  School ID 
                 </span>
                 : 335487
                 </div>

                 <div className={styles.row}>
                 <span className={styles.dataSpan}>
                  School Name 
                  </span>
                  : National Institute of Technology Patna
                 </div>

                 

                 <div className={styles.row}>
                  <span className={styles.dataSpan}>
                   MailId
                  </span>
                    : administrator@nitp.ac.in
                 </div>

                 <div className={styles.row}>
                 <span className={styles.dataSpan}>                 
                  Contact
                  </span>                  
                   : 7564745864
                 </div>

                 <div className={styles.row}>
                 <span className={styles.dataSpan}> Address </span>  : Ashok rajpath, NIT More , <br />

                 <span className={styles.dataSpan}> Pincode </span> : 800005 , <br />
                 <span className={styles.dataSpan}>
                  State 
                  </span> : Bihar , <br />
                  <span className={styles.dataSpan}>
                  Nation 
                  </span> : India,
                 </div>
                 
               </div>

            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}


