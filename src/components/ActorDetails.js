import React from "react"; 



const ActorDetaile = ({actor}) => {

    if (actor === null ) {
        return null; 
    }

    return (

        <>
        <ul>
        <li> 
            <h2> Actor: {actor.name} </h2>
            <p> Gender :{actor.gender} </p> 
            <p> Age: {actor.age} </p>
        </li>
        </ul>
        </>


    )
}; 

export default ActorDetaile; 