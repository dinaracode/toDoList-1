import { Component } from "react";
import mark from './mark.png';

export class ToDoList extends Component{
    constructor(){
        super();
        this.state = {
            userInput:"",
            toDoList:[]
        }
    }

onChangeEvent(event){
    this.setState({userInput: event})
}

addItem(input){
    if (input === ''){
        alert("Please enter things you need to do")
    }
    else{
    let listArray = this.state.toDoList;
    listArray.push(input);
    this.setState({toDoList: listArray, userInput:''})
    console.log(listArray)
}}

deleteItem(){
    let listArray = this.state.toDoList;
    listArray = [];
    this.setState({toDoList:listArray});
}

crossedWord(event){
    const li=event.target;
    li.classList.toggle('crossed');
}

onFormSubmit(event){
    event.preventDefault();
}

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" placeholder="What do you need to do next?" className="boxIn"
                onChange={(event) => {this.onChangeEvent(event.target.value)}} value={this.state.userInput} /> 
            </div>
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>
            <ul>
                {this.state.toDoList.map((item, index) => (
                <li onClick={this.crossedWord} key={index}>
                    <img src={mark} width="20px" alt="Mark sign"/>
                    {item}
                </li>))}
            </ul>
            <div className="container">
                <button onClick={() => this.deleteItem()} className="btn delete">Delete</button>
            </div>
            </form>
            </div>

        )
    }
} 