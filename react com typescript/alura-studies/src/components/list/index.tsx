import style from './list.module.scss';
import Item from "./item";
import { ITasks } from '../../types/itasks';

interface Props{
    tasks: ITasks[],
    selectedTask: (selectedTask: ITasks) => void
}

function List({ tasks, selectedTask }: Props) {
    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tasks.map(item => (
                    <Item
                        selectedTask={selectedTask}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;