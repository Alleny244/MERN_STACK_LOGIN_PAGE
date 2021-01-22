import React, { useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBNavLink } from 'mdbreact';
import axios from "axios"
const FormPage = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[token,setToken]=useState("");
  
   const postRegister=()=>{ axios.post('https://vast-atoll-08416.herokuapp.com/users', {
      name: name,
        email: email,
        password:password
    })
    .then(response => { 
     
      if(response.status===201){
        setToken(response.data.token);
        console.log(token);
        alert("Registration Sucessfull");
        
      }
     
    })
    .catch(error => {
         const x=error.response.data;
         alert(x);
        
    });
  }

  return (
 
    <MDBContainer className="mb-5">
      <MDBRow className="d-flex justify-content-center mt-5 mb-5">
        <MDBCol md="6" >
          <MDBCard className="mb-5" color="#e1f5fe light-blue lighten-5">
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={(e)=>setName(e.target.value)}
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                 
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="rgba(3, 169, 244, 0.7) rgba-blue-strong" onClick={postRegister}>
                    Register
                  </MDBBtn>
                </div>
                <div className=" py-4 mt-3">
                  <MDBNavLink color="transparent" to="/" className="float-right" style={{color:'black',fontweight:"900"}}>
                    Home
                  </MDBNavLink>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;