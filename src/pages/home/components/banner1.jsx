import React from 'react'
import ReactWaterMark from 'react-watermark-component'
import { WindupChildren } from 'windups'
import { Fab } from '@material-ui/core'
import Fade from 'react-reveal/Fade'
import './css/banner1.css'

const Banner1 = ()=>{
    const options = {
        chunkWidth: 600,
        chunkHeight: 500,
        textAlign: 'left',
        textBaseline: 'center',
        globalAlpha: 0.27,
        font: '100px Pacifico, cursive',
        rotateAngle: -0.46,
        fillStyle: 'white'
      }
    return(
        <ReactWaterMark
        waterMarkText={'HamidTech'}
        openSecurityDefense
        //securityAlarm={beginAlarm}
        options={options}
      >
        <div className="banner1-wrapper">
          <div className="row">
            <div className="banner1-text col-lg-6 col-md-6 col-sm-12 col-xs-12" id="banner1-text" style={{}}>
            <Fade duration={1000} bottom>
            <div className="fabs">
                    <a href="https://github.com/HamidTech360" style={{textDecoration:'none'}}> <Fab style={FabStyles} className="fab">  <i className="fa fa-github fab-icons fa-2x" ></i> </Fab></a>
                    <a href="https://api.whatsapp.com/send?phone=2347015713905&text=hi" style={{textDecoration:'none'}}> <Fab style={FabStyles}>  <i className="fa fa-whatsapp fab-icons fa-2x" ></i> </Fab></a>
                    <a href="https://twitter.com/Hameed_360?t=rzVW6iMVrU-FThtmwWJpAQ&s=09" style={{textDecoration:'none'}}> <Fab style={FabStyles}> <i className="fa fa-twitter fab-icons fa-2x" ></i>  </Fab></a> 
                    <a href="https://www.facebook.com/owolabi.hammed.3994" style={{textDecoration:'none'}}> <Fab style={FabStyles}>  <i className="fa fa-facebook fab-icons fa-2x" ></i> </Fab></a>
                    <a href="https://www.linkedin.com/in/hammed-owolabi-a0038920a" style={{textDecoration:'none'}}> <Fab style={FabStyles}> <i className="fa fa-linkedin fab-icons fa-2x" ></i>  </Fab></a> 
                </div>
            </Fade>
               

               
                <div className="bold-text">
                    I am Owolabi Hammed
                </div>
               

                <div className="light-text">
                    I'm a full stack developer with long term experience in this field
                </div>

                <div className="banner-action-btns">
                    <a style={{textDecoration:'none'}} href="https://github.com/HamidTech360"><button className="btn-myportfolio">View projects</button></a>
                    <a href="https://youtube.com/we4325df" style={{textDecoration:'none'}}><button className="btn-play"><i className="fa fa-play fab-icons"></i></button></a>
                </div>
                <div className="icon-box">
                    <img src="./assets/react-icon-2.png" alt="" className="lang-icon" />
                    <img src="./assets/node-icon.png" alt="" className="lang-icon" />
                    <img src="./assets/php-icon-2.jpg" alt="" className="lang-icon" />
                </div>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-12 hideOnMobile">
                <img src="../../../assets/meda5.png" alt="my images" className="my-img" />
            </div>
          </div>
        </div>
    </ReactWaterMark>
    )}

    const FabStyles = {
        border:'3px solid #C84C5B', 
        height:'50px', width:'50px',
        backgroundColor:'inherit',
        marginRight:'10px'
    }
export default Banner1;