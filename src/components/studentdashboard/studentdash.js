import React from 'react';
import styles from './student.module.css';


export default function StudentDashboard(props) {
 

  return (
    <>
      <div className={styles.dashPage}>
      <h2>STUDENT DASHBOARD</h2>
        <div className={styles.container1}>
          <div className={styles.LeftPosition}>
            <div className={styles.img}>
              <img
                src="https://www.pngrepo.com/png/263585/512/graduate-student.png"
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
                  Student Name
                 </span>
                 : Sarita Srivastava
                 </div>

                 <div className={styles.row}>
                 <span className={styles.dataSpan}>
                  Roll No.
                  </span>
                  : 1906176
                 </div>

                 <div className={styles.row}>
                  <span className={styles.dataSpan}>
                   MailId
                  </span>
                    : saritaSrivastava@nitp.ac.in
                 </div>

                 <div className={styles.row}>
                 <span className={styles.dataSpan}>                 
                  Contact
                  </span>                  
                   : 7564745864
                 </div>
                 <div className={styles.row}>
                 <span className={styles.dataSpan}>                 
                  Aadhar Numaber
                  </span>                  
                   : 645374757369
                 </div>
                 <div className={styles.row}>
                 <span className={styles.dataSpan}>                 
                  Date of Birth
                  </span>                  
                   : 15-06-2001
                 </div>
                 <div className={styles.row}>
                 <span className={styles.dataSpan}>                 
                  School Name
                  </span>                  
                   : National Institute of Technology, Patna
                 </div>

                 <div className={styles.row}>
                 <span className={styles.dataSpan}> School Address </span>  : Ashok rajpath, NIT More , <br />
                 {/* <span className={styles.dataSpan}> City</span> : {props.data[0].location[0].city }, <br /> */}
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


