import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Counter2 from './Counter2'
import Info from './info';
import ContextSample from "./ContextSample";
import Average from './Average.js'

const App = () => {
    const [visible, setVisible] = useState(false);
    return (
/*        <div>
            <button onClick={() => {
                setVisible(!visible)
            }}>
                {visible ? '숨기기' : '보이기'}
            </button>
            <hr/>
            {visible && <Info/>}
            <ContextSample/>
            <Counter2 />
        </div>*/
        <Average />
    );
}

export default App;
