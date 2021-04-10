import React, { Component } from 'react';
import LFormCreate from '../components/LFormCreate'

const nameRules = {required: true, message: 'please input name'}
const passwordRules = {required: true, message: 'please input password'}

@LFormCreate
class MyFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submit = () => {
    const {getFieldsValue, getFieldValue, validateFields} = this.props
    validateFields((err, values) => {
      if (err) {
        console.log('err', err, values)
      } else {
        console.log('success', err, values)
      }
    })

    console.log('submit', getFieldsValue(), getFieldValue('username'))
  }
  render() {
    console.log('props:', this.props)
    const { getFieldDecorator, getFieldsValue, getFieldValue } = this.props
    return (
      <div>
        <h1>MyFormPage</h1>
        {
          getFieldDecorator('username', {
            rules: [nameRules]
          })(<input placeholder='username'></input>)
        }
        {
          getFieldDecorator('password', {
            rules: [passwordRules]
          })(<input placeholder='password'></input>)
        }
        <button onClick={this.submit}>提交</button>
      </div>
    );
  }
}

export default MyFormPage;