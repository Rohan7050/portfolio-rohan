import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>
        <form>
            <div className='formGroup'>
                <label htmlFor='name' hidden>
                    Name
                </label>
                <input type='text' name='name' id='name' placeholder='Enter Name' required/>
            </div>
            <div className='formGroup'>
                <label htmlFor='email' hidden>
                    Email
                </label>
                <input type='email' name='email' id='email' placeholder='Enter Email' required/>
            </div>
            <div className='formGroup'>
                <label htmlFor='nessage' hidden>
                    Message
                </label>
                <textarea name='message' id='message' placeholder='Enter Message' required></textarea>
            </div>
            <input className='submit-btn-form' type='submit' value='Submit'/>
        </form>
    </section>
  )
}

export default Contact