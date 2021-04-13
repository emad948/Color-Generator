import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Button from '@material-ui/core/Button';

import Values from 'values.js'

function App() {
    const [value, setValue]=useState("");
    const [error, setError]=useState(false);
    var randomColor="#000000".replace(/0/g, function () { return (~~(Math.random()*16)).toString(16); });
    const [list, setList]=useState(new Values(randomColor).all(10));

    const handleSubmit=(e) => {
        e.preventDefault();
        try {
            let color=new Values(value).all(10);
            setList(color)
            setError(false);

        } catch (error) {
            setError(true);
        }

    }

    return (<>
        <section className="container">

            <label htmlFor="color"><h3>Color Generator</h3></label>
            <form onSubmit={handleSubmit}>
                <input type="text" name="color" id="color" value={value} onChange={(e) => setValue(e.target.value)} placeholder={'#2b2d42'} className={`${error? 'error':null}`} />
                <Button variant="contained" color="primary" type="submit" >Generate</Button>
            </form>
        </section>
        <section className="colors">
            {list.map((item, index) => {
                return (
                    <SingleColor key={index} {...item} index={index} />
                );

            })}

        </section>
    </>);
}

export default App
