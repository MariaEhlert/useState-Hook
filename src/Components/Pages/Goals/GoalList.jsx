//er en name export da det kun er noget fra pakken af react vi skal bruge
import { useState, useEffect } from "react";
//er defald export da det er hele pakken fra axios vi skal bruge
import axios from 'axios';
import { Link } from "react-router-dom";

export const GoalList = () => {
    const [ goals, setGoals ] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const url = 'https://api.mediehuset.net/sdg/goals';
            //axios er det samme som feach (det vil sige at man ikke behøver at lave en feach da den laver feach funktion for os)
            const result = await axios.get(url);
            setGoals(result.data.items)
        }
        getData();
        //kan godt lavet med et tomt [] 
        //men det er mere rigtigt at skrive set'en (giver det mest præcise resultat)
    }, [setGoals])
    return (
        <ul>
            {goals && goals.map(goal => {
                return ( 
                    <li key={goal.id}>
                        <Link to={goal.id}>{goal.title}</Link>
                    </li>
                )
            })}
        </ul>
    )
}