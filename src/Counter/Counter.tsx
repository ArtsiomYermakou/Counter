import React, {useState} from 'react';
import s from "./CSS.module.css";
import {Monitor} from "../Monitor";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/redux-store";
import {incrementAC, InitialStateType, SetToMinValueAC} from "../store/countReducer";

type PropsType = {
    data: any
}

function Counter() {


    const dispatch = useDispatch();
    const count = useSelector<AppRootStateType, number>(state => state.count.counterValue)

    console.log(count)
    // let min = localStorage.getItem("minValue")
    // let max = localStorage.getItem("maxValue")

    let [minValue, setMinValue] = useState(0);
    let [maxValue, setMaxValue] = useState(0);
    // let [startTableValue, setStartTableValue] = useState("Enter value");

    // localStorage.setItem("minValue", minValue.toString())
    // localStorage.setItem("maxValue", maxValue.toString())

    const [disabledButton, setDisabledButton] = useState(false);

    function summ() {
        if (count < maxValue) {
            dispatch(incrementAC());
        }
        if((maxValue -1) === count){
            setDisabledButton(true)
        }
    }

    const changeMax = (e: any) => {
        let max = e.currentTarget.value;

        if (max <= minValue || minValue < 0) {
            setDisabledButton(true)
        } else {
            setDisabledButton(false)
        }
        setMaxValue(Number(max));
    }

    const changeMin = (e: any) => {
        let min = e.currentTarget.value;

        if (min > maxValue || minValue < 0) {
            setDisabledButton(true)
        } else {
            setDisabledButton(false)
        }
        setMinValue(Number(min));
    }

    const reset = () => {
        dispatch(SetToMinValueAC(minValue));
        setDisabledButton(false)
    }

    // const CLEAR = () => {
    //     setMinValue(minValue = 0);
    //     setMaxValue(maxValue = 0);
    // }

    // const inc_max = () => {
    //     setMaxValue(+maxValue + 5)
    // }


    function Monitor(props: PropsType) {
        return count === maxValue
            ? <span className={s.data_red}>{props.data}</span>
            : <span className={s.data_blue}>{props.data}</span>
    }

    return (
        <div className={s.App}>
            <div className={s.wrapper}>
                <div>
                    <h3>Counter:</h3><br/>
                </div>
                <div>
                    <Monitor data={count}/>
                </div>
                <div className={s.btnAll}>
                    <button className={s.btn1} onClick={summ} disabled={disabledButton}>Inc</button>
                    <button className={s.btn2} onClick={reset}>Reset</button>
                </div>
                <hr className={s.line}/>
                <div className={s.btnAll}>
                    <div>
                        <span>Max value: </span>
                        <input type="number" value={maxValue} onChange={changeMax}/>
                    </div>
                    <div className={s.ddd}>
                        <span>Min value: </span>
                        <input type="number" value={minValue} onChange={changeMin}/>
                    </div>
                    <button className={s.ddd} onClick={reset}>SET</button>
                    {/*<button className={s.ddd} onClick={CLEAR}>CLEAR</button>*/}
                </div>
            </div>
        </div>
    )
}

export default Counter;