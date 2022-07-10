import React from "react"; 


const People = ({actor, gender , age}) => { 


return (  

    <>
    <ul>
    <li> 
        <h2>{actor} </h2>
        <p>{gender} </p> 
        <p> {age} </p>
    </li>
    </ul>
    </>
); 

} ; 

export default People; 