import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Row, Select } from 'antd'
import React from 'react'

const ClientsSearch = () => {
  return (
    <Form
      wrapperCol={{ span: 22 }}
      layout="vertical"
      initialValues={{ size: 'large' }}
      size="large"
    >
      <h2>Información Personal</h2>
      <Row>
        <Col span={12}>
          <Form.Item label="Nombre" name="name">
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
          <Form.Item label="Número de teléfono" name="phone">
            <Input placeholder="" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Email" name="email">
            <Input placeholder="" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="Notas" name="notes">
        <Input className="input-styled" placeholder="" />
      </Form.Item>
      <Row className='d-flex justify-content-around'>
        <Col span={12}>
          <Button type="primary" htmlType="submit">
            Buscar
          </Button>
        </Col>
        <Col span={12}>
          <Button type="secondary" htmlType="submit">
            Limpiar
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default ClientsSearch
