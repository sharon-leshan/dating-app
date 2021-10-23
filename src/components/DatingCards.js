import React, {useState, useEffect} from 'react';
import DatingCard from 'react-tinder-card'
import './DatingCards.css'
import axios from 'axios'

const DatingCards = () => {
    const [people, setPeople] = useState([
         {
        _id: "616f36e393f3f0e7a7a2a601",
        name: "Random Guy",
        imgUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90b",
        },
        {
        _id: "616f29d3e5eecea3df618cfa",
        name: "Another Guy",
        imgUrl: "https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVu",
        },
        {
        _id: "616f37d8e5eecea3df618cfb",
        name: "Random Girl",
        imgUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90b",
        },
        {
        _id: "616f386de5eecea3df618cfc",
        name: "Another Girl",
        imgUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVu",
        },
    ])
    useEffect(() => {
        async function fetchData(){
            const req = await axios.get("/dating/cards")
            setPeople(req.data)
        }
        fetchData()
    }, [])
    const swiped = (directoin, nameToDelete) => {
        console.log("receiving" + nameToDelete)
    } 
    const outOfFrame = (name) => {
        console.log(name + "left the screen!!")
    }
    return(
        <div className="datingCards" >
            <div className="datingCards__container">
                {people.map((People) => (
                    <DatingCard className="swipe"
                    key={People.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(people.name)}
                    onCandleftScreen={()=> outOfFrame(people.name)}>
                    <div style={{backgroundImage: `url(${people.imgUrl})`}} className="card">
                        <h3>{people.name}</h3>
                    </div>
                    </DatingCard>
                ))}
            </div>
        </div>
    )
}
export default DatingCards
