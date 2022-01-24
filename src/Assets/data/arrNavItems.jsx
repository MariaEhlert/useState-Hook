import { Greetings } from "../../Components/Pages/Greetings/Greetings"
import { Counting } from "../../Components/Pages/Counting/Counting"
import { Form } from "../../Components/Pages/Form/Form"
import { Timer } from "../../Components/Pages/Timer/Timer"
import { GoalList } from "../../Components/Pages/Goals/GoalList"
import { GoalDetalis } from "../../Components/Pages/Goals/GoalDetails"
const arrNavItems = [
    {
        title: 'Send en hilsen',
        path: '/',
        element: <Greetings />,
        display: true
    },
    {
        title: 'Button tæller',
        path: '/counting',
        element: <Counting />,
        display: true
    },
    {
        title: 'Kontaktform',
        path: '/form',
        element: <Form />,
        display: true
    },
    {
        title: 'Timer',
        path: '/timer',
        element: <Timer />,
        display: true
    },
    {
        title: 'Goals',
        path: '/goals',
        element: <GoalList />,
        display: true
    },
    {
        title: 'GoalsDetalis',
        path: '/goals/:goalId',
        element: <GoalDetalis />,
        display: false
    }
]

//kan også godt være en name export
export default arrNavItems