import { Button, Card, Checkbox, Col, Form, Input, InputNumber, Radio, Row, Select, Table, Space } from 'antd';
import './App.css';
import React, { useEffect, useState } from "react";
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

function App() {
  const [form] = Form.useForm();
  const { Column } = Table;

  const { Option } = Select;
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const onFinish = (values) => {
    console.log('Success:', values);

    let _userList = [...userList];
    _userList.push(values);
    setUserList(_userList);
    form.resetFields();
  };

  function deleteUser(index) {
    let _userList = [...userList];
    _userList.splice(index, 1);
    setUserList(_userList);
  }

  function editUser(index, values) {

    // let _userList = [...userList];
    // _userList.splice(index, 1);
    // setUserList(_userList);
  }

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      maritalStatus: "UnMarried",
      gender: 'Male',
      agree: true,
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      maritalStatus: "Married",
      gender: 'Male',
      agree: true,
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      maritalStatus: "Married",
      gender: 'Male',
      agree: true,
    },
  ];
  const [userList, setUserList] = useState(data);

  return (
    <div className="App">
      <header className="App-header"> USERS     </header>
      <div>
        <Row>
          <Col xs={24} xl={12}>
            <Card title="USER PROFILE">
              <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Enter your name',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Age"
                  name="age"
                  rules={[
                    {
                      required: true,
                      message: 'Enter your age',
                    },
                  ]}
                >
                  <InputNumber minLength="2" maxLength="2" keyboard="false" />
                </Form.Item>
                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="Select a option and change input text above"
                    allowClear
                  >
                    <Option value="Male">Male</Option>
                    <Option value="Female">Female</Option>
                  </Select>
                </Form.Item>


                <Form.Item name="maritalStatus" label="Marital status" rules={[
                  {
                    required: true,
                  },
                ]}>
                  <Radio.Group>
                    <Radio value="Married">Married</Radio>
                    <Radio value="UnMarried">UnMarried</Radio>
                  </Radio.Group>
                </Form.Item>

                <Form.Item
                  name="agree"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}

                >
                  <Checkbox>Agree</Checkbox>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Space size="middle">
                    <Button type="primary" htmlType="submit">
                      Submit
                  </Button>
                    <Button type="danger" htmlType="reset" >
                      Reset
                  </Button></Space>
                </Form.Item>
              </Form>
            </Card>
          </Col>
          <Col xs={24} xl={12}>

            {/* <Table columns={columns} dataSource={userList} /> */}
            <Card title="USER LIST">
              <Table dataSource={userList}>
                <Column title="NAME" dataIndex="name" key="name" />
                <Column title="AAGE" dataIndex="age" key="age" />
                <Column title="GENDER" dataIndex="gender" key="gender" />
                <Column title="MARITAL STATUS" dataIndex="maritalStatus" key="maritalStatus" />
                <Column
                  title="ACTIONS"
                  key="action"
                  render={(text, user, idx) => (
                    <Space size="middle">
                      <EditTwoTone onClick={() => editUser(idx, user)} />
                      {/* <Button type="primary" htmlType="submit" onClick="">
                        Edit
                  </Button> */}
                      <DeleteTwoTone twoToneColor="#eb2f96"
                        onClick={() => deleteUser(idx)} />
                    </Space>
                  )}
                />
              </Table>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
