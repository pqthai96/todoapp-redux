import {Checkbox, Row, Tag} from 'antd';
import {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import todoListSlice from "../TodoList/TodoListSlice";

interface PriorityColorMapping {
  [key: string]: string
}

interface TodoProps {
  id: string;
  name: string;
  completed: boolean;
  priority: string;
}

const priorityColorMapping: PriorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ id, name, priority, completed }: TodoProps) {
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch();

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    dispatch(todoListSlice.actions.changeStatus({id, checked}));
  }, [checked]);

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}
