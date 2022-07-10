import React, {useState, useEffect} from "react"; 
import PeopleList from "../components/PeopleList";
import SelectActor from "../components/SelectActor";
import ActorDetails from "../components/ActorDetails";
import FavPeople from "../components/FavPeople";
import Model from "../components/Model";



const GhibliPeopleBox = () => { 
   const [model , setModel] = useState(false)
   const [people , setPeople] = useState([])
   const [actorSelect, setActorSelect] = useState(null)
   const [favPeople, setFavPeople] = useState([])
   


   const getGhibliPeople = () => {

    fetch(`https://ghibliapi.herokuapp.com/people`)
    .then(res => res.json())
    .then(people => setPeople(people))
   } 


   useEffect (() => {
       getGhibliPeople();
   }, []) 

   const removeActor = (index) => { 
     
      const updatePeople = [...people]
      updatePeople.splice(index,1)
      setPeople(updatePeople)
   }

   const addToFav = (index) => {
    const peopleToAdd = people[index];
    const updateFav = [...favPeople, peopleToAdd]
    setFavPeople(updateFav)

    }

    const handleClose = () => {
        setModel(true)
    }

    const closeModel = () => {
        setModel(false)
    }



return (

    <>
    
    <h3> List of Ghibli People </h3>

    <PeopleList people = {people}  removeActor = {removeActor}  addToFav = {addToFav} />
    <SelectActor people = {people} onActorSelect = {setActorSelect}/> 
    <ActorDetails actor = {actorSelect}/>
    <h3> Fav People </h3>
    <FavPeople People = {favPeople}/>

    <Model handleClose = {handleClose} > 

       {model && <div>
       <p>
            infginbiornblrnvnvinvoeitvni
        </p> 
        <button onClick = {closeModel}> close </button>
       </div>} 


    </Model>

    </>

     
)

} 

export default GhibliPeopleBox; 

