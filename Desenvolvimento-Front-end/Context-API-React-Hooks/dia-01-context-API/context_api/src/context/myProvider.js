import React from "react";
import MyContext from "./MyContext";

const INITIAL_STATE = {
    money: 1000000,
    listOfColor: ['#FF0018', '#FFFF41', '#0000F9'],
    indexOfListColor: 0,
}

class Provider extends React.Component {
    state= INITIAL_STATE;

    handleSpentMoney = (howMuch) => {
        this.setState((prev) => ({
            money: prev.money - howMuch
        }))
    }

    handleChangeColor = (e) => {
        const {listOfColor, indexOfListColor } = this.state;
        e.target.style.backgroundColor=`${listOfColor[indexOfListColor]}`
        this.setState((prev) => ({
            indexOfListColor: prev.indexOfListColor === 2 ? 0 : prev.indexOfListColor + 1,
        }))
    }

    render() {
        const { children } = this.props;
       
        return (
            <MyContext.Provider value={ {
                ...this.state,
                spent : this.handleSpentMoney,
                changeColor: this.handleChangeColor,

            }}> { children }
            </MyContext.Provider>  
        )
    }
}

export default Provider;