import React from "react";

function NumberList(props){

    const numbers = [1,2,3,4,5];
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );
    return(
        <ul>{listItems}</ul>
    )
    // ReactDom.render(
    //     <ul>{listItems}</ul>,
    //     document.getElementById('root')
    // );
}
export default NumberList;