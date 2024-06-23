import { useState } from 'react'; // Importing the useState hook from React for managing component state
import axios from 'axios'; // Importing the Axios library for making HTTP requests
import './App.css'; // Importing the CSS file for styling the component

function App() { // Defining the functional component named App
  const [name,setName] = useState(''); // Declaring state variable 'name' and its setter function 'setName', initialized to an empty string
  const [mobile,setMobile] = useState(''); // Declaring state variable 'mobile' and its setter function 'setMobile', initialized to an empty string
  const [email,setEmail] = useState(''); // Declaring state variable 'email' and its setter function 'setEmail', initialized to an empty string

  const handleSubmit = () => { // Defining a function named handleSubmit to handle form submission
    if(name.length === 0){ // Checking if the 'name' field is empty
      alert("Name has left Blank!"); // Displaying an alert if 'name' is empty
    }
    else if(mobile.length === 0){ // Checking if the 'mobile' field is empty
      alert("Mobile has left Blank!"); // Displaying an alert if 'mobile' is empty
    }
    else if(email.length === 0){ // Checking if the 'email' field is empty
      alert("Email has left Blank!"); // Displaying an alert if 'email' is empty
    }
    else{ // If all fields are filled
      const url = 'http://localhost:8888/api/formsubmit.php'; // Defining the URL for form submission
      let fData = new FormData(); // Creating a new FormData object to hold form data
      fData.append('name', name); // Appending the 'name' field value to the FormData object
      fData.append('mobile', mobile); // Appending the 'mobile' field value to the FormData object
      fData.append('email', email); // Appending the 'email' field value to the FormData object
      axios.post(url, fData) // Making a POST request to the server with the form data
        .then(response=> alert(response.data)) // Handling the response from the server and showing it in an alert
        .catch(error=> alert(error)); // Handling any errors that occur during the request and showing them in an alert
    }
  }
 
  return (
    <div className="registration form">
    <header>REACT PROJECT</header>
    <form action="#">
    <div className="form-outline mb-4">
    <label className="form-label" htmlFor="name">USER Name</label>
    <input type="text" className="form-control form-control-lg" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div className="form-outline mb-4">
    <label className="form-label" htmlFor="mobile">USER Mobile</label>
    <input type="text" className="form-control form-control-lg" name="mobile" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
    </div>
    <div className="form-outline mb-4">
    <label className="form-label" htmlFor="email">USER Email</label>
    <input type="email" className="form-control form-control-lg" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /> 
    </div> {/*باختصار، setEmail(e.target.value) تقوم بتحديث حالة المتغير email بالقيمة الجديدة المدخلة في حقل إدخال البريد الإلكتروني.*/}

    <div className="d-flex justify-content-center">
    <button className="button-92" role="button" onClick={handleSubmit} >S A V E </button>
    <div>
    <ul> 
    <li>
        <a href="https://www.facebook.com/moody.bunyarit.3?mibextid=LQQJ4d">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span className="fa fa-facebook"></span>
      </a> 
      </li>
      <li>
         <a href="https://l.messenger.com/l.php?u=https%3A%2F%2Fline.me%2Fti%2Fp%2FeDr98ALcWg&h=AT0Q9jx_Pv844J4iDc0u7NxLagtyr47J1ggOMS1ZiyWkednF_zGJonvMc6Vqroe4ogoSQ0_QmltYA05ZB-WkrA5vJofF8mI9uhtGpGxTKkvpGQAjhu--D4ae_-da3mxRnZBMlA">
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span className="fa fa-twitter"></span>
       </a> 
       </li>
       <li>
        <a href="https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fm_7hb%3Figsh%3DMWcwODVjaXdxbmgxcQ%253D%253D%26utm_source%3Dqr&h=AT0Q9jx_Pv844J4iDc0u7NxLagtyr47J1ggOMS1ZiyWkednF_zGJonvMc6Vqroe4ogoSQ0_QmltYA05ZB-WkrA5vJofF8mI9uhtGpGxTKkvpGQAjhu--D4ae_-da3mxRnZBMlA">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span className="fa fa-instagram"></span>
       </a> 
       </li>
       <li>
       <a href="https://www.linkedin.com/in/muhammad-bunyarit-4687862a7/">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span className="fa fa-linkedin"></span>
      </a> 
      </li>
      </ul> 
           </div> 
        </div>
     </form> 
  </div>

  );
}
 
export default App;








  //the orginal code 
  //<div className="vh-100 gradient-custom">
      //<div className="mask d-flex align-items-center h-100 gradient-custom-3">
        //<div className="container h-100">
            //<div className="row d-flex justify-content-center align-items-center h-100">
            //<div className="col-12 col-md-9 col-lg-7 col-xl-6">
            //<div className="card">
              //<div className="card-body p-5">
                //<h3 className="text-center mb-5">React JS Submit Form with php mysql</h3>
                //<form>
                  //<div className="form-outline mb-4">
                  //<label className="form-label" htmlFor="name">Your Name</label>
                  //<input type="text" className="form-control form-control-lg" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                  //</div>
                  //<div className="form-outline mb-4">
                  //<label className="form-label" htmlFor="mobile">Your Mobile</label>
                  //<input type="text" className="form-control form-control-lg" name="mobile" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                  //</div>
                  //<div className="form-outline mb-4">
                  //<label className="form-label" htmlFor="email">Your Email</label>
                  //<input type="email" className="form-control form-control-lg" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  //</div>
                  
                  //<div className="d-flex justify-content-center">
                  //<input type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" name="submit" id="submit" value="Register" onClick={handleSubmit} />
                  //</div>
 
              
 
                //</form>
            //</div>
            //</div>
            //</div>
            //</div>
        //</div>
      //</div>
    //</div>