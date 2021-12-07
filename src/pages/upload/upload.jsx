import React, {useState} from 'react'
import axios from 'axios'
import {apiUrl} from '../../config.json'
import './css/upload.css'
import _ from 'lodash'
import Joi from 'joi-browser'

const Upload = () => {
    const [data, setData] = useState({
        file:'',
        text:'',
        fileUrl:null
    })
    const [error, setError] = useState(null)
    const [success, setsuccess] = useState(null)

    const handleImgSelection = (e)=>{
        e.preventDefault()
        let reader= new FileReader()
        let file = e.target.files[0]

        reader.onloadend= ()=>{
            const clone = {...data}
            clone['file'] = file
            clone['fileUrl']= reader.result
            setData(clone)
        }
        reader.readAsDataURL(file)
        // console.log(data);
    }

    const validate = ()=>{
        const schema = {
            text:Joi.string().min(10).required()
        }

        const payload = _.pick(data, ['text'])
         return Joi.validate(payload, schema, {abortEarly:false})
        
    }

    const handleChange = (e)=>{
        const clone = {...data}
        clone[e.currentTarget.name] = e.currentTarget.value
        setData(clone)
        // console.log(data);
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        let formData = new FormData()
        formData.append('file', data.file)
        formData.append('text', data.text)
       
        const {error} = validate()
        if(!error){
            try{
                const response = await axios.post(`${apiUrl}/upload`, formData)
                console.log(response)
                if(response.data.textUploaded){
                    setError(null)
                    setsuccess('Your post has been successfully uploaded')
                }
           }catch(ex){
               console.log(ex);
               setError('There was problem uploading your post . Try again later')
           }
        }else{
            setError(error.details[0].message)
            setsuccess(null)
        }
        // if(error.details[0].message){
           
        // }
        
        // console.log(error.details[0].message);
    }

    return ( 
        <div className="upload">
            <div className="row">
                <div className="form-bo col-lg-8 col-md-8 col-sm-12 col-xs-12 offset-lg-2 offset-md-0  " style={{backgroundColor:'inherit'}}>
                    
                    <form action="" method="post" onSubmit={(e)=>handleSubmit(e)}>
                        <div className="form-group">
                            <input type="file" onChange={(e)=>handleImgSelection(e)} name="file"  className="form-control file-box" />
                        </div>
                        {data.file? <img src={data.fileUrl} alt="preview" className="img-preview" />:''}
                        
                        <div className="form-group">
                            <textarea onChange={(e)=>handleChange(e)} name="text" placeholder="Write something ..." className="textArea"></textarea>
                        </div>
                        {error? <div className="alert alert-danger text-center">{error}</div>:''}
                        {success? <div className="alert alert-success text-center">{success}</div>:''}
                        <button  className="btn form-control btn-upload">Upload Post</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Upload;