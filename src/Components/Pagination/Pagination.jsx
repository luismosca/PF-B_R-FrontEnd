import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Pagination() {
    const dispatch = useDispatch()
    const [index, setIndex] = useState(0);
    const reports = useSelector((state)=> state.allReports)


    // async function onMovement(e) {
        
    //     // if () {
    //     const response = await axios.get(`http://localhost:3001/reports/?page=${index+1}`).data.reports;
            
            
    // // }
    // }
    
 
    const increment = () => {
            setIndex(index + 1);
    }

    const decrement = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    }
            

                
        
    
    console.log(index);

    return (
        <div>
            <div>
            <button type="button" name="prev" id="prev" onClick={decrement}>Prev</button>
            </div>

            <div>
            <button type="button" name="next" id="next" onClick={increment}>Next</button>
            </div>
        </div>
    )
    

}

export default Pagination