import { useState} from "react";
import Keyboard from "./Components/keyboard";

function App() {
    const [expression, setExpression] = useState("");
    const [variables, setVariables] = useState(
        // ['x', 'y', 'z', 'w']
        [0,1]
    );
    const [operations, setOperations] = useState(['\u2227', '\u2228', '\u00AC','\u2223', '\u2193', '\u2295', '\u2192', '\u2190', '\u27F7', '(', ')'])
    const [numbers, setNumbers] = useState([])


    const changeExpression = (value) => {
        setExpression(value)
    }




    return (
        <div className="App">
            <div className="calculator">
                <div className="display">
                    <span>(0)</span> {expression}
                </div>
                <Keyboard variables = {variables} expression = {expression} changeExpression = {changeExpression} operations = {operations} numbers = {numbers}/>

            </div>
        </div>
    );
}

export default App;
