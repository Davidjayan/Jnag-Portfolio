import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import coverphoto from '../Cover.jpg';
import './styles/Home.css';

const Home = () =>{

    useEffect(()=>{
        Aos.init({duration:1000});
    },[]);

    return(
        <div className="home-body">
            <div className="cover-photo-container">
            <img className="coverimage" src={coverphoto} alt="cover"/>
            <button className="aboutbutton"><a className="h-link" style={{textDecoration:"none"}} href="/about" >Learn More</a></button></div>
        
           
          
            <div data-aos="zoom-out" className="frame">
            
                <div className="center" ></div>
                <div className="centerwidth">
                <div  className="verse-middle" >
                <i data-aos="fade" data-aos-delay="1000" className="fas fa-quote-left ic" style={{fontSize:"35"}}></i>
            Moses built an altar there and named it <span className="spanclass1" >Yahweh-Nissi</span> (which means “the LORD is my banner”).
            <i data-aos="fade" data-aos-delay="1000"  className="fas fa-quote-right ic2"></i>
            </div>   
                </div>
            </div>
            <div className="services-and-prayers" >
                <div data-aos="flip-down" data-aos-delay="1500" className="col">
                   <span className="live" > Live </span> Services and prayers
                   <p style={{fontFamily:"'Righteous',cursive"}} ><a href="#"> Subscribe to our channel</a></p>
                </div>
                <div data-aos="flip-down" data-aos-delay="1000" className="col1">
                <h3>Online Services</h3>    
                    <div>
                       <p style={{borderBottom:"1px solid #c50d2f"}}> Sunday Services </p>
                       <p> Sun 7:00am</p>
                    </div>
                    <div>
                       <p style={{borderBottom:"1px solid #c50d2f"}}> Special Thursday Services</p>
                        <p>Thur 7:00am</p>
                    </div>

                </div>
                <div data-aos="flip-up" data-aos-delay="2000" className="col2">
                    <h3>Weekly Prayers</h3>
                    <div>
                        <p style={{borderBottom:"1px solid #c50d2f"}}>Sunday Services</p>
                        Sun 7:00am
                    </div>
                    <div>
                        <p style={{borderBottom:"1px solid #c50d2f"}}>Thursday Services</p>
                        <p>Thur 5:00am</p>
                        <p>Thur 7:00am</p>
                        <p>Thur 7:00pm</p>
                    </div>
                    <div>
                      <p style={{borderBottom:"1px solid #c50d2f"}}>  &Every Evening 7:00pm</p>
                    </div>

                </div>
            </div>
        
        </div>
    )
}
export default Home;