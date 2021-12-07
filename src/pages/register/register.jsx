import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal'
import { CircularProgress } from '@material-ui/core';
import {apiUrl} from '../../config.json'
import axios from 'axios'
import Joi from 'joi-browser'
import _ from 'lodash'
import Footer from '../home/components/footer';
import './components/css/register.css'

const Register = () => {
    const [userData, setUserData] = useState({
        username:'',
        email:'',
        password:'',
        permitId:''
    })
    const [success_msg, setSuccess_msg] = useState(null)
    const [error_msg, setError_msg] = useState(false)
    const [formError, setFormError] = useState({})
    const [showProgress, setShowProgress] = useState(false)

    const handleChange = (e)=>{
        const data = {...userData}
        data[e.currentTarget.name] = e.currentTarget.value
        setUserData(data)
        
        // console.log(userData);
    }
    const Validate = ()=>{
        const schema = {
            username:Joi.string().min(2).required(),
            email:Joi.string().email().required(),
            password:Joi.string().required()
        }

        try{
            const PickedData = _.pick(userData, ['username', 'email', 'password'])
            const {error} = Joi.validate(PickedData, schema, {abortEarly:false})
            if(!error) return null

            const errors = {}
            for(let item of error.details){
                errors[item.path[0]] = item.message
            }
            return errors
        }catch(ex){
            console.log(ex)
        }
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const errors = Validate()
        console.log(errors, userData);
        if(userData.permitId !== '123') {
             setError_msg('Permit id is wrong')
             setSuccess_msg(false)
             return;        }
        if(!errors){
            setShowProgress(true)
            const PickedData = _.pick(userData, ['username', 'email', 'password'])
            try{
                const response = await axios.post(`${apiUrl}/user`, PickedData, {headers:{
                    'content-type':'application/json'
                }})
                console.log(response);
                if(response.data.success){
                    setError_msg(null)
                    setSuccess_msg(true)
                    setShowProgress(false)
                }
            }catch(ex){
                console.log(ex.response?.data)
                setError_msg(ex.response?.data)
                setShowProgress(false)
            }
        }

        setFormError(errors||{})
    }

    return ( 
        <Zoom duration={300} clear>
        
            <div className="register row">
            <div className="form-box col-lg-4 col-md-5 col-sm-8 col-xs-12 offset-lg-0 offset-md-0 ">
                <div className="form-header text-center">NEW ADMIN</div>
                {success_msg? <div className="alert alert-success">
                    You have been successfully registered as an <b>ADMIN</b> .
                     You can now upload blogs to this webpage. continue to sign in <Link to ="/login">sign in</Link>
                     
                </div>:''}
                {error_msg? <div className="alert alert-danger text-center"> {error_msg} </div>:''}
                <form method="post" onSubmit={(e)=>handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control input-box"  onChange={(e)=>handleChange(e)} name="username" />
                        {formError.username?<div className="error_msg">{formError.username}</div>:''}
                    </div>

                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input type="email" className="form-control input-box"  onChange={(e)=>handleChange(e)} name="email" />
                        {formError.email?<div className="error_msg">{formError.email}</div>:''}
                    </div>

                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" className="form-control input-box"  onChange={(e)=>handleChange(e)} name="password" />
                        {formError.password?<div className="error_msg">{formError.password}</div>:''}
                    </div>

                    <div className="form-group">
                        <label htmlFor="PermitId">Permit ID</label>
                        <input type="password" className="form-control input-box"  onChange={(e)=>handleChange(e)} name="permitId" />
                        {formError.password?<div className="error_msg">{formError.password}</div>:''}
                    </div>
                    

                    <div className="form-group">
                        <button className="btn btn-register btn-lg form-control"  style={{fontSize:'14px'}}>{showProgress?<CircularProgress size={20}/>:'Register'}</button>
                    </div>
                </form>
                <div className="condition">
                    By creating an account, you agree to abide by the 
                    terms and conditions to upload blogs to this page
                </div>
                <div className="query">
                    Already have an account? <Link to ="/login">Login</Link>
                </div>
                  
            </div>  
        </div>
        <Footer/>
        </Zoom>
     );
}
 
export default Register;