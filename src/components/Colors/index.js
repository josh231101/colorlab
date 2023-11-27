import { SearchOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select, Table, notification } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import apiClient from 'services/axios'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: 'Bases',
    dataIndex: 'bases',
    key: 'bases',
    render: (text) => {
      const bases = JSON.parse(text)
      return (
        <ul>
          {bases.map((base, index) => (
            <li key={index}>{`${base.code}: ${base.quantity}`}</li>
          ))}
        </ul>
      )
    },
  },
  {
    title: 'Group ID',
    dataIndex: 'group_id',
    key: 'group_id',
  },
]
const nestedColumns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'First Name', dataIndex: 'first_name', key: 'first_name' },
  { title: 'Last Name', dataIndex: 'last_name', key: 'last_name' },
  { title: 'Phone', dataIndex: 'phone', key: 'phone' },
  { title: 'Notes', dataIndex: 'notes', key: 'notes' },
]

const Colors = () => {
  const [form] = Form.useForm()
  const [colors, setColors] = useState([])
  const [clients, setClients] = useState([])
  const searchColor = async (values) => {
    // Call apiClient to search color
    const response = await apiClient.get('/colors', {
      params: {
        code: values.color,
        group_id: values.groupId,
        include_clients: true,
      },
    })
    if (!response) return notification.error({ message: 'Error al buscar el color' })
    if (response.status === 500) return notification.error({ message: 'Error al buscar el color' })
    const data = response.data
    setColors(data)
  }
  const getClients = async () => {
    const response = await apiClient.get('/clients')
    if (!response) return notification.error({ message: 'Error al obtener los clientes' })
    const data = response.data
    if (data && data.length > 0) {
      const clients = data.map((client) => ({
        id: client.id,
        name: `${client.first_name} ${client.last_name ?? ''}`,
      }))
      setClients(clients)
    }
  }
  useEffect(() => {
    getClients()

    return () => {}
  }, [])
  return (
    <Form
      form={form}
      onFinish={searchColor}
      wrapperCol={{ span: 20 }}
      layout="vertical"
      initialValues={{ size: 'large' }}
      size="large"
    >
      <p style={{ color: 'gray' }}>Introduce al menos uno de los siguientes campos</p>
      <Form.Item
        label={
          <>
            Color{' '}
            <Link to="/formulas/search" className="ml-2" style={{ fontSize: 12 }}>
              Ver todos los colores
            </Link>
          </>
        }
        name="color"
      >
        <Input
          className="input-styled"
          prefix={<SearchOutlined />}
          placeholder="Escribe el nombre o código de color"
        />
      </Form.Item>
      <Form.Item label="Cliente" name="client">
        <Select
          showSearch
          allowClear
          placeholder="Selecciona un cliente"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {clients.map((client) => (
            <Select.Option value={client.id}>{client.name}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Grupo de color" name="groupId">
        <Select>
          <Select.Option value="1">Esmalte automotriz</Select.Option>
          <Select.Option value="2">Pintura arquitectónica</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Buscar
        </Button>
      </Form.Item>
      {colors && (
        <Table
          dataSource={colors}
          columns={columns}
          pagination={false} // Disable pagination for simplicity
          expandable={{
            expandedRowRender: (record) => (
              <Table columns={nestedColumns} dataSource={record.clients} pagination={false} />
            ),
            rowExpandable: (record) => record.clients && record.clients.length > 0,
          }}
        />
      )}
    </Form>
  )
}

export default Colors
