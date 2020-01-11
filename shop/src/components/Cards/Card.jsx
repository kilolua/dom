import React from "react";
//import classes from './LeftMenu.module.css';
import {Button, Card} from "react-bootstrap";

export default class CardItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    render() {
        return(
            <div>
                <Card style={{ width: '100%' }}>
                    <Card.Img style={{ width: '50px' }} variant="top" src="https://ducandiets.ru/wp-content/uploads/2017/11/Postnye-kotlety-iz-govyazhego-myasa.jpg" />
                    <Card.Body>
                        <Card.Title>{this.state.data.name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }


}
