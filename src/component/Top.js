import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";
import style from './Gnb.module.scss';

export default function Top({label}) {
    return(
        <div className={style.top_wrap}>
            <h1 className={style.hi}>Hi</h1>
            <img src="/images/icons8-react-40.png"/>
            <Header as='h1'>{label}</Header>
            <Gnb />
        </div>
    )
}