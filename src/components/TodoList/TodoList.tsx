import {Button, Col, Input, Row, Select, Tag} from 'antd';
import Todo from '../Todo/Todo';
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from 'uuid';
import React, {useState} from "react";
import {Todo as TodoType} from "../../types/Todo";
import {todoRemainingSelector} from "../../redux/selectors";
import todoListSlice from "./TodoListSlice";

export default function TodoList() {

  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');

  const todoList = useSelector(todoRemainingSelector);

  const handleAddButtonClick = () => {
    dispatch(todoListSlice.actions.addTodo({
      id: uuidv4(),
      name: todoName,
      priority: priority,
      completed: false
    }));
    setTodoName('');
    setPriority('Medium');
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoName(event.target.value);
  }

  return (
    <Row style={{height: 'calc(100% - 40px)'}}>
      <Col span={24} style={{height: 'calc(100% - 40px)', overflowY: 'auto'}}>
        {todoList.map((todo: TodoType) => (
          <Todo name={todo.name} priority={todo.priority} key={todo.id} completed={todo.completed} id={todo.id}/>
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{display: 'flex'}} compact>
          <Input value={todoName} onChange={handleInputChange}/>
          <Select defaultValue="Medium" value={priority} onChange={(value) => setPriority(value)}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
