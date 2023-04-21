import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catacory,setCatacory] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/catacory')
        .then(res=>res.json())
        .then(data=>setCatacory(data))
        .catch(error=>console.error(error))
    },[])
    return (
        <div>
            <h4>All Catecories</h4>
            <div>
                {
                    catacory.map(cata=> <p
                    key={cata.id}
                    >
                    <Link to={`/cata/${cata.id}`} className='text-decoration-none'>
                    {cata.name}
                    </Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;