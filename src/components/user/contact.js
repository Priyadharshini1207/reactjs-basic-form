import { Button, Checkbox, Form, Input, InputNumber, Radio, Select, Space } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const ContactForm = (props) => {
  const { user } = props;

  const dispatch = useDispatch();

  const onFinish = (values) => {
    // console.log('Success:', values);
    if (user.key) { // update
      values['key'] = user.key;
      dispatch({ type: 'UPDATE_USER', payload: values });
    } else { // add
      dispatch({ type: 'ADD_USER', payload: values });
    }
    form.resetFields();
  };
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      key: user.key,
      name: user.name,
      age: user.age,
      maritalStatus: user.maritalStatus,
      gender: user.gender,
      agree: user.agree,
    });

  });


  return (
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
  )
}

export default ContactForm
