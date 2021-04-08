import React, { Component } from 'react'
import Container from './Container';
import '../CSS/Home.css';
import Moon from './Moon';
export class Home extends Component {
    render() {
        const style1={
            top:'30%',
            'animation-name': `move,scale,rotate`,
        }
        const style2={
            top:'50%',
            'animation-name': `move2,scale,rotate`,
        }
        const style3={
            top:'80%',
            'anim8ation-name': `move1,scale,rotate`,
        }
        const style4={
            top:'20%',
            'animation-name': `move2,scale,rotate`,
        }
        const style5={
            top:'30%',
            'animation-name': `move1,scale,rotate`,
        }
        return (
            <div className="Home">
                <div className="earth" style={style1}>
                <Moon left="30%" top="40%" url={process.env.PUBLIC_URL+"/Images/Moon.jpg"} maskShadow='inset -10px -10px 40px #ffffff, inset 10px 10px 30px -10px rgb(246 246 246 / 60%)'/>
                </div>
                <div className="earth" style={style2}>
                <Moon left="50%" top="90%" url={process.env.PUBLIC_URL+"/Images/planet2.jpg"} maskShadow='inset -10px -10px 40px #ffffff, inset 10px 10px 30px -10px rgb(246 246 246 / 60%)'/>  
                </div>
                <div className="earth" style={style3}>
                <Moon left="70%" top="70%" url={process.env.PUBLIC_URL+"/Images/planet3.jpg"} maskShadow='rgb(15 5 5) -10px -10px 40px inset, rgb(0 0 0 / 60%) 10px 10px 30px -10px inset'/>
                </div>
                <div className="earth" style={style4}>
                <Moon left="90%" top="40%" url={process.env.PUBLIC_URL+"/Images/planet4.jpg"} maskShadow='rgb(54 78 254) -10px -10px 40px inset, rgb(255 255 255 / 60%) 10px 10px 30px -10px inset'/>
                </div>
                <div className="earth" style={style5}>
                <Moon left="80%" top="80%" url="https://i.stack.imgur.com/3SLqF.jpg" maskShadow='rgb(156 159 184) -10px -10px 40px inset, rgb(53 53 53 / 60%) 10px 10px 30px -10px inset'/>
                </div>
                {/* <div className="earth"></div> */}
                <Container/>
            </div>
        )
    }
}

export default Home
