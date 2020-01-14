import React from "react";
import classes from './LeftMenu.module.css';

export default class LeftMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products:true,
            animals:true,
            furniture:true,
            job:true,
            household:true,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        this._interval = setInterval(() => {
            this.props.updateTags(this.state)
        }, 1000);

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.checked;
        const name = target.name;

        this.setState({
            [name]: value
        });
        //console.log(value)
    }

    render() {
        return(
            <div className={classes.main}>
                <div className={classes.item}>Продукты<input name="products" type="checkbox" checked={this.state.products} onChange={this.handleInputChange}/></div>
                <div className={classes.item}>Животные<input name="animals" type="checkbox" checked={this.state.animals} onChange={this.handleInputChange}/></div>
                <div className={classes.item}>Мебель<input name="furniture" type="checkbox" checked={this.state.furniture} onChange={this.handleInputChange}/></div>
                <div className={classes.item}>Бытовые товары<input name="household" type="checkbox" checked={this.state.household} onChange={this.handleInputChange}/></div>
                <div className={classes.item}>Работа<input name="job" type="checkbox" checked={this.state.job} onChange={this.handleInputChange}/></div>
            </div>
        )
    }
}