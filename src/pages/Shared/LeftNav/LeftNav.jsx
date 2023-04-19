import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const LeftNav = () => {
    const [catacory,setCatacory] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/catacory')
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(error=>console.error(error))
    },[])
    return (
        <div>
            <h2>left side</h2>
        </div>
    );
};

export default LeftNav;