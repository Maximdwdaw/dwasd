import React, { useEffect, useState } from 'react';



function Pris() {

const [h,seth] = useState();

useEffect(()=>{
    setInterval(()=>{
seth(localStorage.kcal);
    },1)
},[])


return (

<>

<h1 id='tiitles'>
    

<p id='tiitles'>{h+" kcal"}</p>


</h1>



</>

)
    
}



export default Pris;