import React from "react";

const FunctionalGreetingWithProps = (props) => {
return <div>
       <h1>{props.greeting}</h1>
       <p>You are {props.name}, your age is {props.age}.</p>
       </div>
;}


export default FunctionalGreetingWithProps;