import {Col, Input, Radio, Row, Select, Tag, Typography} from 'antd';
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import filterSlice from "./FilterSlice";

const { Search } = Input;

export default function Filters() {

  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [statusValue, setStatusValue] = useState('All');
  const [priorityValue, setPriorityValue] = useState([]);

  const handleChangeStatus = (event: any) => {
    setStatusValue(event.target.value);
  }

  const handleChangePriority = (value: any) => {
    setPriorityValue(value);
  }

  useEffect(() => {
    dispatch(filterSlice.actions.searchFilterChange(searchText));
    dispatch(filterSlice.actions.statusFilterChange(statusValue));
    dispatch(filterSlice.actions.priorityFilterChange(priorityValue));
  }, [searchText, statusValue, priorityValue])

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchText} onChange={(event) => setSearchText(event.target.value)}/>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={statusValue} onChange={handleChangeStatus}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          onChange={handleChangePriority}
        >
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
      </Col>
    </Row>
  );
}
