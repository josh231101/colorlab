import { Button, Col, Form, Input, Row, Select, Table, notification } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import apiClient from 'services/axios'

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Teléfono',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Correo electrónico',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Acciones',
    dataIndex: 'actions',
    key: 'actions',
    render: (text, record) => (
      <div>
        <Link to={`/clients/${record.key}`}>
          <Button type="primary" className="mr-2">
            Editar
          </Button>
        </Link>
        <Button type="primary" danger onClick={record.delete}>
          Eliminar
        </Button>
      </div>
    ),
  },
]

const ClientsTable = () => {
  const [form] = useForm()
  // get url params
  const { search } = useParams()
  console.log(search)
  const [searchS, setSearch] = useState('')
  // useEffect to call api clientes and get data
  const [clients, setClients] = useState([])
  const [clientsOriginal, setClientsOriginal] = useState([])
  const getClients = async () => {
    const response = await apiClient.get('/clients')
    if (!response) return console.log('error')
    const data = response.data
    console.log(response)
    if (data && data.length > 0) {
      const clients = data.map((client) => ({
        key: client.id,
        name: `${client.first_name} ${client.last_name ?? ''}`,
        phone: client.phone,
        email: client.email,
        delete: async () => {
          const deletedColor = await apiClient.delete(`/clients/${client.id}`)
          if (!deletedColor) return console.log('error')
          notification.success({ message: 'Cliente eliminado' })
          getClients()
        }

      }))
      setClients(clients)
      setClientsOriginal(clients)
    }
  }
  const resetSearch = () => {
    setClients(clientsOriginal)
    form.resetFields()
  }
  const handleSearch = () => {
    const clientsFiltered = clientsOriginal.filter((client) => {
      const name = client.name.toLowerCase()
      const phone = client.phone.toLowerCase()
      const email = client.email.toLowerCase()
      if (
        name.includes(form.getFieldValue('search')) ||
        phone.includes(form.getFieldValue('search')) ||
        email.includes(form.getFieldValue('search'))
      ) {
        return client
      }
    })
    setClients(clientsFiltered)
  }

  useEffect(() => {
    getClients()
  }, [])
  return (
    <>
      <Form
        form={form}
        wrapperCol={{ span: 22 }}
        layout="vertical"
        initialValues={{ size: 'large' }}
        size="large"
        onFinish={handleSearch}
      >
        <Row>
          <Col span={12}>
            <Form.Item label="Búsqueda" name="search">
              <Input placeholder="Busca por nombre, número de teléfono o email" />
            </Form.Item>
            <div className='mb-2'>
              <Button type="primary" htmlType="submit">
                Buscar
              </Button>
              <Button style={{ marginLeft: '1rem' }} type="secondary" onClick={resetSearch}>
                Limpiar
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
      <Table dataSource={clients} columns={columns} />
    </>
  )
}

export default ClientsTable
