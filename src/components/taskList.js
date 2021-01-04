
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export function TaskList(props) {
    return (
        <div className="task-item">
            <li className="" onClick={props.handleCheck}>
                {props.task}
            </li>
            <FontAwesomeIcon icon={faTrash} className="remove" onClick={props.handleRemove}/>
        </div>
    )
}