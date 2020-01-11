import React from "react";
import classes from './LeftMenu.module.css';

let LeftMenu = () =>{
    return(
        <div className={classes.main}>
            <div className={classes.item}>Продукты<input type="checkbox" checked='true'/></div>
            <div className={classes.item}>Животные<input type="checkbox"/></div>
            <div className={classes.item}>Мебель<input type="checkbox"/></div>
            <div className={classes.item}>Бытовые товары<input type="checkbox"/></div>
            <div className={classes.item}>Работа<input type="checkbox"/></div>
        </div>
    )
}

export default LeftMenu;