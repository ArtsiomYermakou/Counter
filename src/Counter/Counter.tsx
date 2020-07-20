import React, {useState} from 'react';
import s from "./CSS.module.css";
import {Monitor} from "../Monitor";

type PropsType = {
    data: number | null
}

function Counter() {

    let [minValue, setMinValue] = useState(0);
    let [maxValue, setMaxValue] = useState(0);
    let [startValue, setStartValue] = useState(0);


    function Summ() {
        if (minValue < maxValue) {
            setStartValue(startValue + 1)
        }
    }


    const ChangeMin = (e: any) => {
        let min = e.currentTarget.value;
        setMinValue(Number(min));
    }
    const ChangeMax = (e: any) => {
        let max = e.currentTarget.value;
        setMaxValue(Number(max));
    }

    const SET = () => {
        setStartValue(minValue);
    }

     function Monitor(props:PropsType) {
        return startValue == maxValue ?  <span className={s.data_red}>{props.data}</span> : <span className={s.data_blue}>{props.data}</span>
    }


    return (

        <div className={s.App}>
            <div className={s.wrapper}>
                <div>
                    <h3>Counter:</h3>
                </div>
                <div>
                    <Monitor data={startValue}/>
                </div>
                <div className={s.btnAll}>
                    <button className={s.btn1} onClick={() => {Summ()}} disabled={startValue === maxValue}>Inc</button>
                    <button className={s.btn2} onClick={() => {setStartValue(minValue)}}>Reset</button>
                </div>
                <hr className={s.line}/>
                <div className={s.btnAll}>
                    <div>
                        <span>Max value: </span>
                        <input type="number"
                               value={maxValue}
                               onChange={ChangeMax}
                        />
                    </div>
                    <div className={s.ddd}>
                        <span>Min value: </span>
                        <input type="number"
                               value={minValue}
                               onChange={ChangeMin}
                        />
                    </div>
                    <button className={s.ddd} onClick={SET} >SET</button>
                </div>
            </div>
        </div>
    )
}

export default Counter;