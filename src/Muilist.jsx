import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

function Muilist() {
  function Neo(){
console.log("Button is clicked")
  }

  return (
    <>
      <div>
       <Button onClick={Neo} variant="contained" startIcon={<DeleteIcon />}> Delete </Button>
       <Button disabled  size="small" href="#text-buttons">Disabled</Button>
       <Button variant="contained" endIcon={<SendIcon />}></Button>
       <IconButton color="primary" aria-label="add to shopping cart"></IconButton> <AddShoppingCartIcon />
      
      </div>
     
    </>
  )
}
export default Muilist