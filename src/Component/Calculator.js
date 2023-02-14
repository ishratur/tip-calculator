import {useState} from 'react';
import '../style.css'


const Calculator = () => {

    const [total, setTotal] = useState(0)
    const [percentage, setPercentage] = useState(14)


    const calculateTip = () => {
        return percentage/100 * total 
    }
    return ( 
        <div className='container'>
            <label>
                Total:
                <input 
                    type="number"
                    required
                    value={total}
                    min={1}
                    onChange={(e) => setTotal(e.target.value)}
                />       
            </label>
            <br />

            <label>
                Set Percentage: 
                <input 
                    type="number"
                    required
                    value={percentage}
                    min={0}
                    onChange={(e) => setPercentage(e.target.value)}
                />       
            </label>
            <h2>Tender: {total - calculateTip()}</h2>
            <h2>Tip: {calculateTip()}</h2>
            

        </div>
     );
}
 
export default Calculator;