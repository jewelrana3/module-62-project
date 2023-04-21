import React from 'react';
import { useParams } from 'react-router-dom';

const Catacory = () => {
    const {id} = useParams();
    return (
        <div>
            <h3>This is catacory:{id}</h3>
        </div>
    );
};

export default Catacory;