import { useState } from "react";
import Weather from "./Weather";
import Weatherdata from "./Weatherdata";

function Weatherapp(){
const [weatherinfo,setweatherinfo]=useState( { })

const updateinfo = (newinfo) => {
setweatherinfo(newinfo)
}
    return(
        <div>
            <h4>Akash Weather Info </h4>
            <Weather updateinfo={updateinfo} />
            <Weatherdata info={weatherinfo}/>
        </div>
    )
}
export default Weatherapp;