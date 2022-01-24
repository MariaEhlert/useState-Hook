//er en name export da det kun er noget fra pakken af react vi skal bruge
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
//er defald export da det er hele pakken fra axios vi skal bruge
import axios from 'axios';

export const GoalDetalis= () => {
    const [ goal, setGoal ] = useState([]);
    //dette er et objekt så derfor skal der {} rundt om
    const { goalId } = useParams();

    useEffect(() => {
        const getData = async () => {
            const url = `https://api.mediehuset.net/sdg/goals/${goalId}`;
            //axios er det samme som feach (det vil sige at man ikke behøver at lave en feach da den laver feach funktion for os)
            const result = await axios.get(url);
            setGoal(result.data.item)
        }
        getData();
        //kan godt lavet med et tomt [] 
        //men det er mere rigtigt at skrive set'en (giver det mest præcise resultat)
    }, [goalId])
    return (
        <>
        <h1>{goal.title}</h1>
        </>
    )
}