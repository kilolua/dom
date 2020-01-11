import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import _ from 'lodash';
import {addCard} from "../../backend/data";

class AddCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
        }
    }

    onSubmit(){
        let data = _.pick(this.state, 'name')
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
                            <Form.Control type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
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