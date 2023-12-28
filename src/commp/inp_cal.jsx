import React, { useEffect, useState } from 'react';



function Inp_cal() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
    let dsa = event.target.value;

    if (dsa !== '') {
        document.getElementById("sunmit").style.display = 'block'
    }
    else {
        document.getElementById("sunmit").style.display = 'none'
    }


      setValue(dsa);
    };
    function dwa() {
        let o = JSON.parse(localStorage.kcal_list);
        o.push({ kcal: Number(value) });
        localStorage.kcal_list = JSON.stringify(o);
    
        setValue('');
        document.getElementById("sunmit").style.display = 'none';
    
        localStorage.kcal = Number(localStorage.kcal) + Number(value); 
      }
      
return (

<>

<input 
type='number'
placeholder="kcal" 
id="inp_kcal"

value={value}
onChange={handleChange}

/>

<button 
id='sunmit'
onClick={dwa}
>submit</button>

</>

)
    
}



export default Inp_cal;