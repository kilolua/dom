import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import _ from 'lodash';
import {addCard} from "../../backend/data";

class AddCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            price:'',
            tag:'',
            address:'',
            title:'',
        }
    }

    onSubmit(){
        let data = _.pick(this.state, 'name', 'price', 'tag', 'address', 'title')
        let errors = {}
        if (JSON.stringify(errors) === '{}'){
            addCard(data, (res, error)=>{

            })
            this.props.onHide();
        }
    }

    render() {
        return (
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                {...this.props}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Добавления Карточки
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="Title">
                            <Form.Label>Название</Form.Label>
                            <Form.Control placeholder="Заголовок" type="text" value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})}/>
                            <Form.Control placeholder="Имя" type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
                            <Form.Control placeholder="Цена" type="text" value={this.state.price} onChange={(e)=>this.setState({price:e.target.value})}/>
                            <Form.Control placeholder="Тип" type="text" value={this.state.tag} onChange={(e)=>this.setState({tag:e.target.value})}/>
                            <Form.Control placeholder="Адресс" type="text" value={this.state.address} onChange={(e)=>this.setState({address:e.target.value})}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" onClick={()=>this.onSubmit()}>
                            Добавить
                        </Button>
                    </Form>;
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AddCard;