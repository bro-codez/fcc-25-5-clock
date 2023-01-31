import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../reducers/timer"
import styles from "../styles/CounterSet.module.css"

function CounterSet(props){

    const timer = useSelector((state) => state.timer.value) 
    const dispatch = useDispatch()

 return(
    <div>
        <h2 id={`${props.name}-label`} className={styles.title}>{props.name.charAt(0).toUpperCase() + props.name.slice(1)} length</h2>
        <div className={styles.elemContainer}>
            <div onClick={() => dispatch(increment(props.name))} className={styles.sign} id={`${props.name}-increment`}>+</div>
            <div id={`${props.name}-length`}>{props.name === "session" ? timer.sessionTime : timer.breakTime}</div>
            <div onClick={() => dispatch(decrement(props.name))} className={styles.sign} id={`${props.name}-decrement`}> - </div>
        </div>
    </div>
 )
}

export default CounterSet