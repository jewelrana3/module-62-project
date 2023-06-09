import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorSights from './EditorSights/EditorSights';
import useTitle from '../../../hooks/useTitle';

const News = () => {
    const news = useLoaderData();
    console.log(news)
    const {_id,title, details, image_url,category_id } = news;
    useTitle('News Details')
    return (
        <div>
            <Card>
            <Card.Img variant="top" src={image_url}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
               <Link to={`/catacory/${category_id}`}> <Button variant="danger"><FaArrowLeft></FaArrowLeft>All news in this category</Button></Link>
            </Card.Body>
        </Card>
        <EditorSights></EditorSights>
        </div>
    );
};

export default News;