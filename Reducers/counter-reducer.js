import { DECREMENT, INCREMENT } from "./type"
let initState = [
    {
        id: "99",
        description: "fdgdg",
        isDone: false
    }
]
const CounterReducer=(state=initState ,action) =>{
    switch (action.type) {
        // case INCREMENT:
        //     return state + action.payload;
        // case DECREMENT:
        //     return state - action.payload ;
            default:
           return state
        }
};
export default CounterReducer;