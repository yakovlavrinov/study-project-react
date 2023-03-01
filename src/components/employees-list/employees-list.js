import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelet, onToggleProps}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem key={id}
                                {...itemProps}
                                onDelet={() => onDelet(id)}
                                onToggleProps={(e) => onToggleProps(id, e.currentTarget.getAttribute('data-toggle'))}
                                />
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;