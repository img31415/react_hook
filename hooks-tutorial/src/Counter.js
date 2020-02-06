import React, {useState} from 'react';

const Counter = () => {
    const array = ['a','b','c']
    const [value, setValue] = useState(0);  // array nonstructural distribute
    return (
        <div>
            <p>
                current counter value is <b> {value}</b>
            </p>
            <button onClick={()=>setValue(value+1)}>+1</button>
            <button onClick={()=>setValue(value-1)}>-1</button>
        </div>
    );
}

export default Counter