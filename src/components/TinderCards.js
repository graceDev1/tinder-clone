import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import '../css/TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name:"Jeff bezos",
            url:"https://www.gstatic.com/tv/thumb/persons/532529/532529_v9_bb.jpg"
        },
        {
            name:"Elon Musk",
            url:"https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg"
        }

    ])

    const swiped = (direction, nameToDelete) =>{
        console.log("removing"+nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) =>{
        console.log(name + "left the screen!")
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person)=>(
                    <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir)=> swiped(dir, person.name)}
                    onCardLeftScreen={()=>outOfFrame(person.name)}
                    >
                        <div
                        style={{backgroundImage:`url(${person.url})`}}
                        className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
