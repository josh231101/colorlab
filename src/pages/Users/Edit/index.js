import React, { useEffect, useState } from 'react'
import { Card, Form, Input, Button, Space, Divider, message, Table, Tag } from 'antd'
import apiClient from 'services/axios'
import { useParams } from 'react-router'
import AddColorsToClientModal from 'components/Clients/AddColorsToClientModal'
import { set } from 'store'
import { COLOR_CODES } from 'components/Formulas'

const columns = [
  {
    title: 'Número de color',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Nombre del color',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Bases',
    dataIndex: 'bases',
    key: 'bases',
    render: (bases) => (
      <div>
        {bases.map((base) => (
          <Tag key={base.code} color={COLOR_CODES[base.code]}>{`${base.code}- ${base.quantity}`}</Tag>
        ))}
      </div>
    ),
  },
]

const EditUserPage = () => {
  const params = useParams()
  const clientId = params.id
  const [clientData, setClientData] = useState(null)
  const [colors, setColors] = useState([])
  const [loadingColors, setLoadingColors] = useState(false)
  const [isAddColorModalVisible, setIsAddColorModalVisible] = useState(false)

  const showAddColorModal = () => {
    setIsAddColorModalVisible(true)
  }
  const showHideColorModal = () => {
    getColors()
    setIsAddColorModalVisible(false)
  }
  const getColors = () => {
    setLoadingColors(true)
    apiClient
      .get(`clients/${clientId}/colors`)
      .then((response) => {
        const colors = response.data.map((color) => ({
            key: color.id,
            id: color.id,
            number: color.id,
            name: color.code,
            bases: color.bases ? JSON.parse(color.bases) : [],
            }))
        setColors(colors)
      })
      .catch((error) => {
        console.error('Error fetching colors data:', error)
        message.error('Failed to fetch colors data')
      })
      .finally(() => {
        setLoadingColors(false)
      })
  }
  useEffect(() => {
    // Fetch colors data from the API
    setLoadingColors(true)
    getColors()
  }, [clientId])

  useEffect(() => {
    // Extract the client id from the url
    const clientId = params.id
    // Fetch client data from the API
    if (!clientId) return
    apiClient
      .get(`/clients/${clientId}`)
      .then((response) => {
        setClientData({
          name: `${response.data.first_name} ${response.data.last_name ?? ''}`,
          email: response.data.email,
          phone: response.data.phone,
          notes: response.data.notes,
        })
      })
      .catch((error) => {
        console.error('Error fetching client data:', error)
        message.error('Failed to fetch client data')
      })
  }, [])
  return (
    <div>
      <h1>Información del cliente</h1>
      {/** Create a simple card with the client information from the api */}
      <Card title="Client Information">
        {clientData ? (
          <Form layout="vertical">
            <Form.Item label="Name">
              <Input value={clientData.name} readOnly />
            </Form.Item>
            <Form.Item label="Email">
              <Input value={clientData.email} readOnly />
            </Form.Item>
            <Form.Item label="Phone">
              <Input value={clientData.phone} readOnly />
            </Form.Item>
            <Form.Item label="Notes">
              <Input.TextArea value={clientData.notes} readOnly />
            </Form.Item>
            <Divider />
            <div className="mb-4 w-100">
              <h2>Client Colors</h2>
              <Button type="primary" className="mb-4" onClick={showAddColorModal}>
                Asignar colores
              </Button>
            </div>
            {loadingColors ? (
              <Space size="middle">
                <Button type="primary" loading>
                  Loading Colors
                </Button>
              </Space>
            ) : (
              <Table columns={columns} dataSource={colors} />
            )}
          </Form>
        ) : (
          <Space size="middle">
            <Button type="primary" loading>
              Loading
            </Button>
          </Space>
        )}
      </Card>
      {/** Create a modal to add colors to the client */}
      <AddColorsToClientModal
        visible={isAddColorModalVisible}
        onCancel={showHideColorModal}
        clientId={clientId}
      />
    </div>
  )
}

export default EditUserPage
