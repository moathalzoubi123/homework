import React , {useState} from "react"; 
import People from './People'

const PeopleList = ({people, removeActor, addToFav}) => {

      const [showPeople , setShowPeople] = useState(true)

    const peopleInd = people.map((actor ,index) => {

        const handleRemoveClick =  () => {
            removeActor(index)
        }

        const handleFavClick = () => {

            addToFav(index)
        }

    

        return (
            
            <>
             <People key = {index}  actor= {actor.name} gender = {actor.gender}  age = {actor.age}/> 
             
             <button type = "submit" onClick = {handleRemoveClick}> Remove Actor</button>

             <button type = "submit" onClick = {handleFavClick}> Add To Fav</button>
            </>
        );
    })





    return (

        <>
        <div> 
           {!showPeople && (<button onClick = {()=> setShowPeople(true)}>
                Show People
            </button>)}

            {showPeople && (<button onClick = {()=> setShowPeople(false)}>
                Hide People
            </button>)}
        </div>

        {showPeople && peopleInd}
        
        
        </>


    ); 
}; 

export default PeopleList; 