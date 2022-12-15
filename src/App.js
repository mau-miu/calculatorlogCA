import { useState} from "react";

function App() {
  return (
    <div className="App">
     <div className="calculator">
        <div className="display">
            <span>(0)</span> 0
        </div>

         <div className="operators">
             <button>x</button>
             <button>y</button>
             <button>z</button>
             <button>w</button>

             <button>DEL</button>
         </div>

         <div className="digits">
             <button>&#8743;</button>{/*and*/}
             <button>&#8744;</button>{/*or*/}
             <button>&#172;</button>{/*not*/}
             <button>&#8739;</button>{/*штрих Шеффера*/}
             <button>&#8595;</button>{/*Стрелка Пирса*/}
             <button>&#8853;</button>{/*XOR*/}
             <button>&#8594;</button>{/*Импликация*/}
             <button>&#8592;</button>{/*Обратная Импликация*/}
             <button>&#10231;</button>{/*Эквивалентность*/}
             <button>(</button>
             <button>)</button>
             <button>=</button>
         </div>
     </div>
    </div>
  );
}

export default App;
