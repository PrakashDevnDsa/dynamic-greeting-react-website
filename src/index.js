import React from 'react'
import ReactDOM  from 'react-dom'
import './index.css';

// let curDate = new Date(2023,6,15,5);
let curDate = new Date();
curDate = curDate.getHours();
let greet = "";
const cssStyle = {}
 
if(curDate >= 1&& curDate <12){
  greet = "Good Morning"
  cssStyle.color = 'green'
}
else if(curDate >=12 && curDate < 19){
  greet = "Good Afternoon"
  cssStyle.color = 'orange'

}
else{
  greet = "Good Night"
  cssStyle.color = 'black'

}

const name = prompt("Enter Your Name : ")

ReactDOM.render(
  <>
    <div >
    <h1>Hello {name} , <span  style={cssStyle}> {greet}</span></h1>    
    </div>
  </>
,document.getElementById('root'))
