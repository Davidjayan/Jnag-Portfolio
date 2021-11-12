import React,{useState,useEffect} from "react";
import '../Components/styles/Watch.css';


const Watch = () =>{
    const [ids,setids]=useState([]);
    const [mainvideo,setmainvideo]=useState();
    const [autoply,setautoply] = useState(false);
   
    
    


    useEffect (()=>{
        fetch("http://192.168.0.115:8080/jehovanissi/api/fetchyoutubeid.php",{
            method:'GET',
            headers:{
              'Accept' : 'application/json', 
              'Content-Type' : 'application/json'
              
            },
          })    
            .then(res => res.json())
            .then((result) => {
                  setmainvideo(result[result.length-1]);
                  let c = result.reverse();
                  setids(c);
                  
              }).catch((error)=>{
                console.error(error);
              });
    },[]);
    
    

    return(
        <div className="watch-body">
            
                <div className="mainframe" >
                  <iframe src={"https://www.youtube.com/embed/"+mainvideo+"?autoplay="+autoply} title="JNAG live" allowfullscreen="true" ></iframe> 
            </div>

            
         <h2>Watch More</h2>
         <span className="spanclass"><span className="trans"></span></span>

            <div className="container">
        
             {ids.map((l)=>{
                
                 return(
                  <div className="thum" >
                    <img onClick={()=>{setmainvideo(l);setautoply(true)}} src={"https://img.youtube.com/vi/"+l+"/0.jpg"} />
                    
                    </div>
                          );
                          })}
                          </div>
         
       
        </div>
    )
}
export default Watch;