import React from "react";
import '../Components/styles/Ministries.css';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Ministries = () =>{
    const arrowStyles = {
        position: "absolute",
        top: "50%",
        zIndex:2,
        backgroundColor:"transparent"
       
        
    };

    return(
        <div className="ministries-body" >
           <div className="children-minis" >
            <div style={{width:"80%"}} >
                <Carousel infiniteLoop showStatus={false} showIndicators={false}  
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                      <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        className="slide-bt"
                        style={{
                          ...arrowStyles,
                          color:"#cf0d2f",
                          left: "1.3em",    
                          border:"none",
                          fontSize:"35px"
                          
                        }}
                      >
                          <i class="fas fa-chevron-left"></i>                  
                      </button>
                    )
                  }
                  renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                      <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        className="slide-bt"
                        style={{
                          ...arrowStyles,
                          color:"#cf0d2f",
                          right: "1.3em",   
                          border:"none",
                          fontSize:"35px",
                        }}
                      >
                         <i class="fas fa-chevron-right"></i>
                      </button>
                    )
                  }
                useKeyboardArrows >
                    <p>Jk</p>
                    <p>Hjk</p>
                </Carousel>
            </div>
               <p> This was the first ministry we started before even starting the church.By God's grace we are
                now doing children ministry more in four villages.We always had a burden on children.We are very happy 
                that by the grace of God our church has more that 15 Sunday Class teachers and more than 
                250 students are blessed by our ministry.</p>
           </div>
           <div className="youth-mins">

               <p>
                   Youth ministry was started in the year 2012 ,as youths were the arrows in the
                   hands of warriors.Our church always encourages youths to grow more in christ.
                   Yearly once our youths are encouraged to do arrange a youth meeting.
               </p>
               <div style={{width:"80%"}} >
               <Carousel infiniteLoop showStatus={false} showIndicators={false}  
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                      <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        className="slide-bt"
                        style={{
                          ...arrowStyles,
                          color:"#cf0d2f",
                          left: "1.3em",    
                          border:"none",
                          fontSize:"35px"
                          
                        }}
                      >
                          <i class="fas fa-chevron-left"></i>                  
                      </button>
                    )
                  }
                  renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                      <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        className="slide-bt"
                        style={{
                          ...arrowStyles,
                          color:"#cf0d2f",
                          right: "1.3em",   
                          border:"none",
                          fontSize:"35px",
                        }}
                      >
                         <i class="fas fa-chevron-right"></i>
                      </button>
                    )
                  }
                useKeyboardArrows >
                    <p>Jk</p>
                    <p>Hjk</p>
                </Carousel></div>
           </div>
           <div className="women-fellowship" >
           <div style={{width:"80%"}} >
               <Carousel infiniteLoop showStatus={false} showIndicators={false}  
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                      <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        className="slide-bt"
                        style={{
                          ...arrowStyles,
                          color:"#cf0d2f",
                          left: "1.3em",    
                          border:"none",
                          fontSize:"35px"
                          
                        }}
                      >
                          <i class="fas fa-chevron-left"></i>                  
                      </button>
                    )
                  }
                  renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                      <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        className="slide-bt"
                        style={{
                          ...arrowStyles,
                          color:"#cf0d2f",
                          right: "1.3em",   
                          border:"none",
                          fontSize:"35px",
                        }}
                      >
                         <i class="fas fa-chevron-right"></i>
                      </button>
                    )
                  }
                useKeyboardArrows >
                    <p>Jk</p>
                    <p>Hjk</p>
                </Carousel></div>
               <p>
                    Weekly once our church women fellowship and pray for church and other ministries.
                    Women are the warriors of prayers.Our church women always gather and pray.Every year
                    on mother's day and on women's day we have special women's worship session.
               </p>
           </div>
        </div>
    )
}
export default Ministries;