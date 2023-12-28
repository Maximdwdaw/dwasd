import Inp_cal from "../commp/inp_cal"
import Pris from "../commp/prisnick"
import Table from "../commp/tavle"

function Home()  {
if (!localStorage.kcal) {
    localStorage.kcal = 0;
}
return (


    <>

    <Pris/>

    <Inp_cal/>    

    <button id="cleer" onClick={()=>{localStorage.kcal=0;localStorage.kcal_list= JSON.stringify([]);}}>clear</button>

    {/*<button id="prew" onClick={()=>alert(localStorage.kcal-500+"kcal")}>prew</button>*/}

    <Table/>

<ul>





</ul>


    </>
)
}

export default Home