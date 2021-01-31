import React,{ useState} from "react";
import axios from "axios"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
  MDBNavLink
} from "mdbreact";

const FormPages = () => {
    const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[token,setToken]=useState("");


  const postLogin=()=>{

    axios.post('https://cors-anywhere.herokuapp.com/https://vast-atoll-08416.herokuapp.com/login', {
       
          email: email,
          password:password
      })
      .then(response => { 
       
        if(response.status===201){
          
          setToken(response.data.token);
          
          alert("Sucessfull, You may now click Login");

          
        }
       
      })
      .catch(error => {
           const x=error.response.data;
           alert(x);
    

  }
      )


}



const getLogin=()=>{
    
let data = {
    
    headers: {
        'X-Auth-Token': token,
        'content-type': "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*'
    }
};

axios.get('https://cors-anywhere.herokuapp.com/https://vast-atoll-08416.herokuapp.com/login', data).then(function(response) {

 alert(" Welcome " +response.data.name);
 
}).catch(function(error) {
    const x=error.response.data;
         alert(x);
});
}


  return (
    <MDBContainer>
      <MDBRow className="d-flex justify-content-center mt-5 mb-5">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Login:<br/>
                  <span style={{fontSize:"15px"}}>Two Step Login (Security Breach)</span>


                </h3>
              </MDBCardHeader>
              <form>
                <div className="grey-text">
                  <MDBInput
                  value={email}
                    label="Type your email"
                    suggested="current-email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                  <MDBInput
                  value={password}
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    suggested="current-password"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="light-blue"
                  className="mb-3"
                  onClick={postLogin}
                >
                  Security Check
                </MDBBtn>
              </div>
              <div className="text-center mt-4">
                <MDBBtn
                  color="light-blue"
                  className="mb-3"
                  onClick={getLogin}
                  
                  
                >
                  Login
                </MDBBtn>
              </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light">
                <MDBNavLink color="transparent" to="/register" className="float-right" style={{color:'black',fontweight:"900"}}>
                Not a member? Sign Up
                  </MDBNavLink>
                  <br/>
                  <MDBNavLink color="transparent" to="/" className="float-right" style={{color:'black',fontweight:"900"}}>
                      Home
                  </MDBNavLink>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPages;