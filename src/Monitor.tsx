import s from "./Counter/CSS.module.css";
import React from "react";

type PropsType = {
    data: number | null
}




export function Monitor(props: PropsType) {
    return <span className={s.data_blue}>{props.data}</span>
}



