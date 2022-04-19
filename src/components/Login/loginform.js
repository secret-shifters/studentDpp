import styles from './login.module.css';
import React, { useRef, useState } from 'react';
  
export default function SignUPStudent(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dobInputRef = useRef();
  const contactInputRef = useRef();
  const confirmpasswordInputRef = useRef();
  const initialValues = {
    email: '',
    password: '',
    contact: '',
    confirmpassword: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name)
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className={styles.container}>
     
      <div className={styles.signu}>
        <section className={styles.section}>
          <div className={styles.left}>
            <div className={styles.imgBx}>
              <div className={styles.img}>
                <pic className={styles.pics}></pic>
              </div>
              <div className={styles.inputBx}>
                <p>
                  School administrator?<a href="./login">Signup Here!</a>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.formss}>
            <div className={styles.contentBx}>
              <div className={styles.formBx}>
                <h2>STUDENT LOGIN</h2>
                <div className={styles.bx}>
                  <p>
                    Add your credentials here
                  </p>
                </div>
                <form >
                  <div className={styles.inputBx}>
                    <input
                      className={styles.email}
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formValues.email}
                      onChange={handleChange}
                      required
                      ref={emailInputRef}
                    />
                    <p style={{ color: 'red' }}>{formErrors.email}</p>
                  </div>
                  <div className={styles.inputBxx}>
                    <input
                      type="text"
                      name="contact"
                      placeholder="First Name"
                      value={formValues.contact}
                      onChange={handleChange}
                      required
                      ref={contactInputRef}
                    />
                    <p style={{ color: 'red' }}>{formErrors.contact}</p>
                  </div>
                  <div className={styles.inputBxx}>
                    <input
                      type="text"
                      name="contact"
                      placeholder="Last Name"
                      value={formValues.contact}
                      onChange={handleChange}
                      required
                      ref={contactInputRef}
                    />
                    <p style={{ color: 'red' }}>{formErrors.contact}</p>
                  </div>

                  <div className={styles.inputBx}>
                    <input
                      type="date"
                      name=""
                      placeholder="Date of Birth"
                      required
                      ref={dobInputRef}
                    />
                  </div>
                  <div className={styles.inputBxx}>
                    <input
                      type="number"
                      name="contact"
                      placeholder="Aadhar Number"
                      value={formValues.contact}
                      onChange={handleChange}
                      required
                      ref={contactInputRef}
                    />
                    <p style={{ color: 'red' }}>{formErrors.contact}</p>
                  </div>
                  <div className={styles.inputBxx}>
                    <input
                      type="Text"
                      name="contact"
                      placeholder="School Name"
                      value={formValues.contact}
                      onChange={handleChange}
                      required
                      ref={contactInputRef}
                    />
                    <p style={{ color: 'red' }}>{formErrors.contact}</p>
                  </div>
                  <div className={styles.inputBxx}>
                    <input
                      type="Text"
                      name="contact"
                      placeholder="School Address"
                      value={formValues.contact}
                      onChange={handleChange}
                      required
                      ref={contactInputRef}
                    />
                    <p style={{ color: 'red' }}>{formErrors.contact}</p>
                  </div>
                  {/* <div className={styles.inputBx}>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                      ref={passwordInputRef}
                      value={formValues.password}
                      onChange={handleChange}
                    />
                    <p style={{ color: 'red' }}>{formErrors.password}</p>
                  </div>
                  <div className={styles.inputBx}>
                    <input
                      type="password"
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      required
                      ref={confirmpasswordInputRef}
                      value={formValues.confirmpasword}
                      onChange={handleChange}
                    />
                    <p style={{ color: 'red' }}>{formErrors.confirmpassword}</p>
                  </div> */}

                  <div className={styles.remember}>
                    <label>
                      <input type="checkbox" name="" />
                      Remember me
                    </label>
                  </div>
                  <div className={styles.inputBx}>
                    <input type="submit" value="SignUp" name="" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}