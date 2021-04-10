import {
  Form, Input, Button
} from 'antd';
import React, { Component } from 'react';

class FormPage extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {  };
  }
  // formRef = React.createRef();
  onFinish = (values) => {
    console.log(this.formRef)
    console.log(values)
  }
  render() {
    console.log(this.formRef)
    return (
      <Form ref={this.formRef} onFinish={this.onFinish}>
        <Form.Item label='username' name='username'>
          <Input placeholder="Please input your name"/>
        </Form.Item>
        <Form.Item label='password' name='password'>
          <Input placeholder="Please input your password"/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default FormPage;