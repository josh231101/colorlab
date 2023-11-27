import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Row, Select, notification } from 'antd'
import React from 'react'
import apiClient from 'services/axios'
import { useHistory } from 'react-router-dom'
import { useForm } from 'antd/lib/form/Form'

const AddClient = () => {
  const [form] = useForm()
  const history = useHistory()
  const uploadClient = async (values) => {
    form.validateFields()
    console.log(values)
    // call apiclient.post to /clients
    const response = await apiClient.post('/clients', {
      email: values.email,
      first_name: values.name,
      last_name: values.lastname,
      phone: values.phone,
      notes: values.notes,
    })
    if (!response) return console.log('error')
    notification.success({ message: 'Cliente agregado' })
    history.push('/clients/search')
  }
  return (
    <Form
      form={form}
      onFinish={uploadClient}
      wrapperCol={{ span: 22 }}
      layout="vertical"
      initialValues={{ size: 'large' }}
      size="large"
    >
      <h2>Información Personal</h2>
      <Row>
        <Col span={12}>
          <Form.Item label="Nombre" name="name"             rules={[{ required: true, message: 'Porfavor ingresa el nombre del cliente!' }]}
>
            <Input placeholder="" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Apellido" name="lastname">
            <Input placeholder="" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item
            label="Número de teléfono"
            name="phone"
            rules={[{ required: true, message: 'Porfavor ingresa tu teléfono!' }]}
          >
            <Input placeholder="" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Porfavor ingresa un correo correcto!', type: 'email' },
            ]}
          >
            <Input placeholder="" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="Notas" name="notes">
        <Input className="input-styled" placeholder="" />
      </Form.Item>
      <Row className="d-flex justify-content-around">
        <Col span={8}>
          <Button type="primary" htmlType="submit">
            Guardar
          </Button>
        </Col>
        <Col span={8}>
          <Button type="secondary" htmlType="submit">
            Cancelar
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default AddClient
