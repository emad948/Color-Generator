import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor=({ rgb, weight, index }) => {
    const [alert, setAltert]=useState(false);
    const bcg=rgb.join(',');
    const hex=rgbToHex(...rgb);
    useEffect(() => {
        const timeout=setTimeout(() => { setAltert(false) }, 3000)
        return () => clearTimeout(timeout)
    }, [alert])


    return (<article className={`color ${index>10&&'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }} onClick={() => {
        setAltert(true);
        navigator.clipboard.writeText(hex);
    }}>
        <p className="percent-value">
            {weight}%</p>
        <p className="color-value"></p>
        {alert&&<p className='alert'> copied to clipboard</p>}
        <p> {hex}</p>


    </article>);
}

export default SingleColor
