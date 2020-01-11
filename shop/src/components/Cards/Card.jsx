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
                        <Card.Title>{this.state.data.title}</Card.Title>
                        <Card.Text>
                            <p>Имя:{this.state.data.name}</p>
                            <p>Адресс:{this.state.data.address}</p>
                            <p>Тип:{this.state.data.tag}</p>
                            <p>Цена:{this.state.data.price}</p>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }


}
