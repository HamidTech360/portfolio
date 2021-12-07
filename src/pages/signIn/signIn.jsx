import React, {useState} from 'react'
import { useHistory } from 'react-router';
import  Zoom  from 'react-reveal';
import { Link } from 'react-router-dom';
import {apiUrl} from '../../config.json'
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import Footer from '../home/components/footer';

import './css/signin.css'
const SignIn = () => {
    let history = useHistory()
    const [userData, setUserData] = useState({
        username:'',
        password:''
    })
    const [showProgress, setShowProgress] = useState(false)
    const [showErrMsg, setShowErrMsg] = useState(null)
    const handleChange = (e)=>{
        const data = {...userData}
        data[e.currentTarget.name] = e.currentTarget.value
        setUserData(data)
        //console.log(userData);
    }
    const handleSubmit =async (e)=>{
        e.preventDefault()
        setShowProgress(true)
        try{
            const response = await axios.post(`${apiUrl}/auth`, userData, {
                headers:{
                    'content-type':'application/json'
                }
            })

            console.log(response);
            if(response.data.authorised){
                localStorage.clear()
                localStorage.setItem('auth_token', response.data.auth_token)
                history.push('/')
            }


        }catch(ex){
            console.log(ex.response?.data)
            setShowErrMsg(ex.response?.data)
            setShowProgress(false)
        }
    }
    return ( 
        <Zoom duration={1000} clear>
            
            <div className="register row" id="login">
                <div className="form-box col-lg-4 col-md-5 col-sm-10 col-xs-12 offset-lg-0 offset-md-0 ">
                    <div className="form-header text-center">SIGN IN</div>
                    {showErrMsg? <div className="alert alert-danger text-center"> {showErrMsg} </div>:''}
                    <form action="" method="post" onSubmit={(e)=>handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input onChange={(e)=>handleChange(e)} name="username" type="text" className="form-control input-box"  />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input onChange={(e)=>handleChange(e)} name="password" type="password" className="form-control input-box" />
                        </div>
                        <div className="forgotPwd">Forgot password?</div>

                        <div className="form-group">
                            <button className="btn btn-register form-control" style={{}}>{showProgress?<CircularProgress size={20}/>:'Login'}</button>
                        </div>
                    </form>
                    <div className="query">
                            Don't have an account? <Link to ="/register">Register</Link>
                    </div>
                </div>  
            </div>
            <Footer/>
        </Zoom>
     );
}
 
export default SignIn;