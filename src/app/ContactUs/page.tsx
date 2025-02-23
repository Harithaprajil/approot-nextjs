import React from 'react'
import contactstyles from './contact.module.css'

export default function ContactUs() {
  return (
    <div className="container">
          <form>
      <fieldset className={contactstyles.form}>
        <header>
          <h2 className='text-center'>Any queries please Contact Us</h2>
          
        </header>
        <div className={contactstyles.formchild}>
          <table>
            <thead>
              
            </thead>
            <tbody>
              <tr>
               <td>Full Name</td>
                <td><input type="text" className={contactstyles.formcontrol} /></td>
              </tr>
              <tr>
                <td> Email</td>
                <td><input type="email" className={contactstyles.formcontrol} /></td>
              </tr>
              <tr>
                <td> Contact Number</td>
                <td><input type="text" className={contactstyles.formcontrol} /></td>
              </tr>
              <tr>
                <td> Any queries/Any complaint</td>
                <td><input type="text" className={contactstyles.formcontrol} /></td>
              </tr>
              <tr>
                <td><button>Submit</button></td>
                <td><button>Clear</button></td>
              </tr>
            </tbody>
            
          </table>
        </div>
      </fieldset>
    </form>
    </div>
  )
}
