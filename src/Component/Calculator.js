import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { round } from 'lodash';
import '../style.css'


export default function Calculator() {
    const [total, setTotal] = useState(1)
    const [percentage, setPercentage] = useState(14)


    const calculateTipAmount = () => {
        const tip = percentage/100 * total
        return round(tip, 2)
    }

    const calculateTenderAmount = () => {
      const tender = total - calculateTipAmount()

      return round(tender,2)
    }

    const preventMinus = (e) => {
        if(e.code === 'Minus'){
            e.preventDefault();
        }
    }
  return (
    <>
    <h3>Calculate Tip</h3>     
    <Box
      component="form"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="30vh"
      
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        label="Total"
        type="Number"
        value={total}
        onKeyPress={preventMinus}
        onChange={(e) => setTotal(e.target.value)}
        InputProps={{
            inputProps: { min: 1 }
          }}
        />

      <TextField 
        label="Tip(%)"
        type="Number"
        value={percentage}
        onKeyPress={preventMinus}
        onChange={(e) => setPercentage(e.target.value)}
        InputProps={{
          inputProps: { min: 1 }
        }}
        /> 
     
    </Box>

    <Box
          component="form"
          display="flex"
          justifyContent="center"
          alignItems="center"
        //   minHeight="10vh"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
    >
        <TextField
        label="Tender Amount"
        InputProps={{
            readOnly: true,
        }}
        value={calculateTenderAmount()}
        variant="filled"
        />

        <TextField
        label="Tip Amount"
        InputProps={{
            readOnly: true,
        }}
        value={calculateTipAmount()}
        variant="filled"
        />  
    </Box>
    </>

  );
}