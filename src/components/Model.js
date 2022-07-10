import React from "react"; 


const Model = ({children, handleClose}) => {



    return (

        <>
        <p> {children} </p>
        
        <button onClick = {handleClose}> show model </button>
        </>
    );
}; 


export default Model; 