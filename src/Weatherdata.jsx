import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function Weatherdata({info}){
  const { temp, humidity, temp_max } = info || {};
let img="https://media.istockphoto.com/id/1322716422/photo/thick-dark-black-heavy-storm-clouds-covered-summer-sunset-sky-horizon-gale-speed-wind-blowing.jpg?s=612x612&w=0&k=20&c=59zIPIcaTb9U8SvJmNCwtArVwQtMaRuojh2X5RRRXBI="
    


    return( 
        <div style={{ marginTop:"10px"}}>
            
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image={img}
    />
     <CardContent>
      <Typography gutterBottom variant="h5" component="div">
    
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <h6>Temp: {temp}°C </h6>
            <h6>Humidity: {humidity}% </h6>
            <h6>Max_Tem: {temp_max}°C </h6> 
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
     </CardActions>
     </Card>
        </div>
    )
} 
export default Weatherdata