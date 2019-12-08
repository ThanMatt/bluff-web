import React from 'react'
import useForm from '../utils/hooks/useForm'
import { Form, Input, Button } from 'antd'

const CreateLobbyForm = ({ form, handleChange, handleSubmit }) => {
  const { getFieldDecorator, validateFieldsAndScroll } = form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const validateForm = (event) => {
    event.preventDefault();

    validateFieldsAndScroll((error, values) => {
      if (!error) {
        handleSubmit()
      }
    })
  }

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 24,
        offset: 0,
      },
    },
  };
  return (
    <Form {...formItemLayout} onSubmit={validateForm}>
      <Form.Item label="Nickname">
        {
          getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please enter your nickname' }]
          })(<Input name="nickname" onChange={handleChange} />)
        }
      </Form.Item>
      <Form.Item label="Lobby name">
        {
          getFieldDecorator('lobbyName', {
            rules: [
              { required: true, message: 'Please enter your lobby name' },
            ]
          })(<Input name="lobbyName" onChange={handleChange} />)
        }
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" size="large" shape="round" htmlType="submit" block>
          Create lobby
        </Button>
      </Form.Item>

    </Form>

  )
}

export default Form.create({ name: 'create-lobby' })(CreateLobbyForm);