import React from "react";
import { useState } from "react/cjs/react.development";
import '../Components/styles/PrayerRequest.css';

const PrayerRequest = () =>{
    const [name,setname] = useState('');
    const [mobile,setmobile] = useState('');
    const [prayreq,setprayreq] = useState('');

    const submit = () =>{
            if(name!==''&&mobile!==''&&prayreq!==''){
            fetch("http://192.168.0.115:8080/jehovanissi/api/prayer_request.php",{
                method:'POST',
                headers:{
                  'Accept' : 'application/json', 
                  'Content-Type' : 'application/json'
                  
                },
                body:JSON.stringify({
                    name:name,
                    mobile:mobile,
                    prayreq:prayreq
                })
              })    
                .then(res => res.json())
                .then((result) => {
                      alert(result);
                      
                  }).catch((error)=>{
                    console.error(error);
                  });
        
    }
    else{
        alert("Input All Required");
    }
}

    return(
        <div className="pray-req-body" >
            <label className="label1">Enter Name</label><input className="input-name" value={name}  onChange={(event)=>setname(event.target.value)}  type="text" placeholder="Name"></input>
            <label className="label2">Enter Mobile</label><input className="input-phone" value={mobile} onChange={(event)=>setmobile(event.target.value)} type="text" placeholder="Mobile No"></input>
            <label className="label3">Enter Prayer Request</label><textarea className="input-address" value={prayreq} onChange={(event)=>setprayreq(event.target.value)} type="text" placeholder="Prayer Request"></textarea>
            <button className="btn" onClick={()=>submit()} >Submit</button>
        </div>
    )
}
export default PrayerRequest;