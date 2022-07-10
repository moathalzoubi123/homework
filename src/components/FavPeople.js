import React from "react"; 



const favPeople = ({People}) => {

    const fav = People.map((actor ,index) => {

        return (
               <div key = {index}>
                <ul>
                    <li>

                        <h2>name :{actor.name} </h2>
                        <h3>gender :{actor.gender} </h3> 
                        <h4>age :{actor.age}</h4>
                    </li>
                </ul>
                 </div>
        )


    })


        return (
            <>
            {fav}
            
            </>
        )
}

export default favPeople; 