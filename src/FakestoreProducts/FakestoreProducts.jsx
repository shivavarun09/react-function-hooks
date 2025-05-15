import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './FakestoreProducts.css';

const FakestoreProducts = () => {
  const [data, setData] = useState([]);

  const getDataByUrl = (userSelectedurl) => {
    const urlsList = {
      FakeStore: 'https://fakestoreapi.com/products',
      DummyJson: 'https://dummyjson.com/products',
    };

    const url = urlsList[userSelectedurl];
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const finalData = Array.isArray(res) ? res : res.products;
        setData(finalData);
        // localStorage.setItem('fakeanddummy',finalData?JSON.stringify(finalData):res.products)
      });
  };

  return (
    <div className="FakeStore">
      <div className="btnsdiv">
        <Button onClick={() => getDataByUrl('FakeStore')}>FakeStore</Button>
        <Button onClick={() => getDataByUrl('DummyJson')}>DummyJson</Button>
      </div>
      <div className="cardsDiv">
        {data.map((p) => (
          <div className="product-card" key={p.id}>
            <Card >
              <Card.Img
                variant="top"
                src={p.image || p.thumbnail || (p.images && p.images[0])}
                style={{ width: '60px',textAlign:"center" }}
              />
              <Card.Body>
                <Card.Title >{p.title}</Card.Title>
                <Card.Text>${p.price}</Card.Text>
                <Button variant="success">Add to CArt</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FakestoreProducts;
