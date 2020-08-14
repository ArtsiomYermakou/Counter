import s from "./Counter/CSS.module.css";
import React from "react";

type PropsType = {
    data: any
}




export function Monitor(props: PropsType) {
    return <div className={s.data_blue}>{props.data}</div>
}



