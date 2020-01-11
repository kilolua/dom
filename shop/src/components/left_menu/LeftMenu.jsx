import React from "react";
import classes from './LeftMenu.module.css';

export default class LeftMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products:false,
            animals:false,
            furniture:false,
            job:false,
            household:false,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.checked
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log(value)
    }

    render() {
        return(
            <div className={classes.main}>
                <div className={classes.item}>Продукты<input name="products" type="checkbox" checked={this.state.products} onChange={this.handleInputChange}/></div>
                <div className={classes.item}>Животные<input type="checkbox"/></div>
                <div className={classes.item}>Мебель<input type="checkbox"/></div>
                <div className={classes.item}>Бытовые товары<input type="checkbox"/></div>
                <div className={classes.item}>Работа<input type="checkbox"/></div>
            </div>
        )
    }
}