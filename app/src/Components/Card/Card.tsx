import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;
interface CardType {
    image: string;
    title: string;
    id: string
}
const TestCard: React.FC<CardType> = ({ image, title, id }) => {
    const navigate = useNavigate()
    return (

        <Card
            onClick={() => navigate(`fullscreen/test/${id}`)}
            hoverable
            style={{ width: 440 }}
            cover={<img height={300} alt="example" src={`http://localhost:7002/${image}`} />}
        >
            <Meta title={title} description="www.instagram.com" />
        </Card>
    )
}

export default TestCard;