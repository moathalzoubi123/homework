import React from "react"; 


const SelectActor = ({people, onActorSelect}) => {


    const Actors = people.map((actor, index) => {

        return(

            <option key = {index} value = {index}>
                {actor.name}
            </option>
        )


    })
    
    
    const handleChange = (event) => {

        const chosenActor = people[event.target.value]
        onActorSelect(chosenActor)

    }



    return (
        <>
        
        <select defaultValue="" onChange = {handleChange}>
            <option value="">choose Actor</option>
            {Actors}
        </select>
        </>

    )
};

export default SelectActor; 