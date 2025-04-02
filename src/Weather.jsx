import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function Weather( {updateinfo}){
    const API_KEY="99f50afdba2646a530c83b0cbe0f0a0c";
    const API_URL="https://api.openweathermap.org/data/2.5/weather"

    const [Inp,setInp]=useState(" ");

    const fetchWeatherData= async() =>{
     let response = await fetch(`${API_URL}?q=${Inp}&appid=${API_KEY}&units=metric`);
     const jsonresponse=await response.json();
     console.log(jsonresponse); 
     let Result ={
        
     temp: jsonresponse.main.temp,

     temp_max:jsonresponse.main. temp_max,

     humidity:jsonresponse.main.humidity
     };
     console.log(Result);
     return(Result);
 };
 
   
 const handleInputChange = (event) => setInp(event.target.value);
  const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(Inp);
        const newinfo = await fetchWeatherData();
        updateinfo(newinfo);
    };
    
    return( 
        <Box style={{justifyContent:"center"}}
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        >
        <div style={{display:"flex",flexDirection:"column", gap:"10px", justifyContent:"center"}}>
            <h3>Check Weather</h3>
            <TextField
          required
          id="outlined-required"
          label="Enter City"
          onChange={handleInputChange}
          value={Inp}
        />
           <Button variant="contained" onClick={handleSubmit}>Search</Button>
           
           
            
         
        </div> </Box>
    )
}
export default Weather