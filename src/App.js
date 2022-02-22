import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import { ButtonGroup, Checkbox, FormControlLabel, TextField } from '@mui/material';
import {makeStyles} from '@mui/styles'
import { useState } from 'react';

const useStyle = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px'
  }
})

function ButtonStyles() {
  const classes = useStyle()

  return <Button className={classes.root}>Styled Button</Button>
}

function CheckBox() {

  const [checked, setCheckBox] = useState(true)

  return(
    <div>
      <FormControlLabel 
        control={
          <Checkbox 
          checked={checked}
          onChange={(e) => setCheckBox(e.target.checked)}
        /> 
        }
        label="Checkbox checking"
      />
     
   
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <ButtonGroup>
      <Button variant='contained' color='primary' endIcon={<SaveIcon />}>
        Save
      </Button>
      
      <Button variant='contained' color='secondary' endIcon={<DeleteIcon />}>
          Discard
      </Button>

      </ButtonGroup>

      <CheckBox />

      <TextField variant='standard' color='secondary' type="email" label='Email' />

      <ButtonStyles />
    </div>
  );
}

export default App;
