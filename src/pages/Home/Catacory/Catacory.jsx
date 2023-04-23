import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../NewsCart/NewsCart';

const Catacory = () => {
    const {id} = useParams();
    const catacoryNews = useLoaderData();
    return (
        <div>
           {id && <h3>This is catacory:{catacoryNews.length}</h3>}
            {
                catacoryNews.map(news => <NewsCart
                key={news._id}
                news={news}
                ></NewsCart>)
            }
        </div>
    );
};

export default Catacory;