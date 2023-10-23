import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Row, Select, Table } from 'antd'
import React from 'react'

const dataSource = [
  {
    key: '1',
    name: 'Esteban Ruiz',
    company: 'Miniso',
    phone: '322352352',
  },
  {
    key: '2',
    name: 'Esteban Ruiz',
    company: 'Miniso',
    phone: '322352352',
  },
]

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Compañía',
    dataIndex: 'company',
    key: 'company',
  },
  {
    title: 'Teléfono',
    dataIndex: 'phone',
    key: 'phone',
  },
]

const ClientsTable = () => {
  return (
    <>
      <Form
        wrapperCol={{ span: 22 }}
        layout="vertical"
        initialValues={{ size: 'large' }}
        size="large"
      >
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
            <Row className="d-flex justify-content-around align-items-center">
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
          </Col>
        </Row>
      </Form>
      <Table dataSource={dataSource} columns={columns} />
    </>
  )
}

export default ClientsTable
