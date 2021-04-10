import React, { Component } from 'react';
const LFormCreate = (Cmp) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {}
      this.options = {}
    }
    handleChange = (e) => {
      const {name, value} = e.target
      this.setState({[name]: value}, () => {
        // console.log(this.state)
      })
      
    }
    getFieldsValue = () => {
      return {...this.state}
    }
    getFieldValue = (field) => {
      return this.state[field]
    }
    getFieldDecorator = (field, options) => (InputCmp) => {
      this.options[field] = options
      return React.cloneElement(InputCmp, {
        name: field,
        value: this.state[field] || '',
        onChange: (e) => this.handleChange(e)
      })
    }
    validateFields = (callback) => {
      let errors = {}
      for(let name in this.options) {
        if (!this.state[name]) {
          errors[name] = 'error'
        }
      }
      if (!Object.keys(errors).length) {
        callback(undefined, this.state)
      } else {
        callback(errors, this.state)
      }
    }
    render() {
      return (
        <div className='border'>
          <Cmp getFieldDecorator={this.getFieldDecorator} 
            getFieldsValue={this.getFieldsValue}
            getFieldValue={this.getFieldValue}
            validateFields={this.validateFields}
            />
        </div>
      )
    }
  }
}

export default LFormCreate;