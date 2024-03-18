import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITasks } from "../../types/itasks";
import Button from "../button";
import Clock from "./clock";
import style from "./stopwatch.module.scss"

interface Props{
    selected: ITasks | undefined, finishTasks: () => void
}

export default function Stopwatch( {selected, finishTasks}: Props ){
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time){
            setTime(timeToSeconds(selected.time));
        }
    }, [selected])

    function regressive(counter: number = 0){
        setTimeout(() => {
            if(counter > 0){
                setTime(counter -1);
                return regressive(counter -1);
            }
            finishTasks();
        }, 1000)

    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um car e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock time={time} />
            </div>
            <Button onClick={() => regressive(time)}
                text="Começar"
            />
        </div>
    )
}