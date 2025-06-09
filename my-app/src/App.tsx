// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import * as React from 'react';
import './styles.css';

const App = () => {
    const [count, setCount] = React.useState(0);

    const addOne = () => {
        setCount(count+1);
    }

    const subOne = () => {
        setCount(count-1);
    }

    return (
        <div>
            {count > 10 && <p>Big numbers</p>}

            <button type="button" onClick = {addOne}>
                Add
            </button>

            {count}

            <button type="button" onClick = {subOne}>
                Subtract
            </button>

            {count < -10 && <p>Small numbers</p>}
        </div>
    )
}

export default App;