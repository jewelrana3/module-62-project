import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaRegBookmark, FaShare, FaShareAlt ,} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCart = ({news}) => {
    const {_id,title,details,image_url,author} = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{height:40}} src={author.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('YYYY-M-D ')}</small></p>
                </div>
                <div>
                    <FaRegBookmark className='ms-2'></FaRegBookmark><FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                   {details.length < 250 ? <>{details}</>:<>{details.slice(0,250)}...<Link to={`/news/${_id}`}>Read More</Link></>}
                </Card.Text>
                
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsCart;