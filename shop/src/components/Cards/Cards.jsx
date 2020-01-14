import React from "react";
import CardItem from "./Card";
//import classes from './LeftMenu.module.css';
import {getCards} from "../../backend/data";
import {Button} from "react-bootstrap";
import AddCard from "./addCard";

export default class Cards extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            showAddCard:false,
        }
    }
    refreshData(){
        getCards((data) => {
            if (data){
                console.log('data', data)
                this.setState({cards: data})
            }
            //console.log(data);
        })
    }

    componentDidMount() {
        this._interval = setInterval(() => {
            this.refreshData()
        }, 1000);

        this.refreshData();
    }



        render() {
            let modalClose = () => this.setState({showAddCard: false});
            return(
            <div>
                <Button onClick={()=>this.setState({showAddCard:true})}>Добавить задание</Button>

                {/*{this.state.cards.filter(card=>{
                    console.log('tags',this.props.filters)
                    return this.props.filters[card['tag']] && (<CardItem data={card}/>)
                })}*/}
                {this.state.cards.map(card=>{
                    return this.props.filters[card['tag']] && (<CardItem data={card}/>)
                    }
                )}
                <AddCard
                    show={this.state.showAddCard}
                    onHide={modalClose}
                />
            </div>
        )
    }
}