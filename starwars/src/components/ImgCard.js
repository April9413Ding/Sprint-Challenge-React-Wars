import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  const ImgCard = (props) => {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="https://images.unsplash.com/photo-1533613220915-609f661a6fe1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80" alt="Card image cap" />
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>Gender: {props.gender}</CardSubtitle>
  <CardText>Height: {props.height}  Mass: {props.mass}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default ImgCard;