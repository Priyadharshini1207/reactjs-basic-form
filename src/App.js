import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { Card, Col, Row, Space, Table } from 'antd';
import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import './App.css';
import ContactForm from './components/user/contact';

const defaultUser = {
  key: undefined,
  name: '',
  age: undefined,
  maritalStatus: "",
  gender: '',
  agree: false,
}

function App() {
  const dispatch = useDispatch();
  const { Column } = Table;

  const userList = useSelector((state) => state.todo.users);
  const [user, setUser] = useState(defaultUser);

  function deleteUser(values) {
    // console.log("delete");
    dispatch({ type: 'DELETE_USER', payload: values });
  }

  function editUser(index, values) {
    setUser(values); 
  }

  return (
    <div className="App">
      <header className="App-header"> USERS     </header>
      <div>
        <Row>
          <Col xs={24} xl={12}>
            <Card title="USER PROFILE">
              <ContactForm user={user} />
            </Card>
          </Col>
          <Col xs={24} xl={12}>
            <Card title="USER LIST">
              <Table dataSource={userList}>
                <Column title="NAME" dataIndex="name" key="name" />
                <Column title="AGE" dataIndex="age" key="age" />
                <Column title="GENDER" dataIndex="gender" key="gender" />
                <Column title="MARITAL STATUS" dataIndex="maritalStatus" key="maritalStatus" />
                <Column
                  title="ACTIONS"
                  key="action"
                  render={(text, user, idx) => (
                    <Space size="middle">
                      <EditTwoTone onClick={() => editUser(idx, user)} />

                      <DeleteTwoTone twoToneColor="#eb2f96"
                        onClick={() => deleteUser(user)} />
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
const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(App);
