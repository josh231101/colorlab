import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, Checkbox } from 'antd'
import './style.css'

const mapStateToProps = ({ user, settings, dispatch }) => ({
  dispatch,
  user,
  logo: settings.logo,
})

const Login = ({ dispatch }) => {
  const onFinish = (values) => {
    console.log('target: ', values)
    dispatch({
      type: 'user/LOGIN',
      payload: {
        // TODO: Change this
        email: values.email,
        password: values.password,
      },
    })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="login">
      <section className="login__container">
        <div class="login-image">
          <img width="180" src="images/2.png" />
        </div>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Porfavor ingresa tu correo!', type: 'email' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: 'Porfavor ingresa tu contraseña' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Recuérdame</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Iniciar sesión
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  )
}

export default connect(mapStateToProps)(Login)
