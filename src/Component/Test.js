import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { round } from 'lodash';


export default function Test() {
    const [total, setTotal] = useState(1)
    const [percentage, setPercentage] = useState(14)


    const calculateTip = () => {
        const tip = percentage/100 * total
        return round(tip, 2)
    }
  return (
    <>     
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
        onChange={(e) => setTotal(e.target.value)}
        InputProps={{
            inputProps: { min: 1 }
          }}
        />

      <TextField 
        label="Tip(%)"
        type="Number"
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
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
        value={total - calculateTip()}
        variant="filled"
        />

        <TextField
        label="Tip Amount"
        InputProps={{
            readOnly: true,
        }}
        value={round(calculateTip(),2)}
        variant="filled"
        />  
    </Box>
    </>

  );
}