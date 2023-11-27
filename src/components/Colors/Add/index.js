import { MinusCircleOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Radio, Row, Select, Space, notification } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import apiClient from 'services/axios'

const COLOR_BASES = [
  'EK-0100',
  'EK-0200',
  'EK-0300',
  'EK-0500',
  'EK-0775',
  'EK-0505',
  'EK-0534',
  'EK-1100',
  'EK-1200',
  'EK-0555',
  'EK-0400',
  'EK-0906',
  'EK-0910',
  'EK-0700',
]

const AddColor = () => {
  const { Option } = Select
  const [form] = Form.useForm()
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(false)
  const getClients = async () => {
    const response = await apiClient.get('/clients')
    if (!response) return console.log('error')
    const data = response.data
    console.log(response)
    if (data && data.length > 0) {
      const clients = data.map((client) => ({
        id: client.id,
        name: `${client.first_name} ${client.last_name ?? ''}`,
      }))
      setClients(clients)
    }
  }
  const submitColor = async (values) => {
    console.log(values)
    if (!values.bases || values.bases.length === 0) return notification.error({ message: 'Porfavor agrega al menos una base' })
    setLoading(true)
    // Call api to save color with apiClient method /colors
    const color = await apiClient.post('/colors', {
      code: values.code,
      bases: values.bases,
      group_id: values.group,
    })
    if (!color) return notification.error({ message: 'Error al guardar el color' })
    if(color.status === 500) return notification.error({ message: 'Error al guardar el color' })
    notification.success({ message: 'Color guardado correctamente' })
    form.resetFields()
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }
  useEffect(() => {
    getClients()

    return () => {}
  }, [])
  return (
    <Form
      loading={loading}
      onFinish={submitColor}
      form={form}
      wrapperCol={{ span: 20 }}
      layout="vertical"
      initialValues={{ size: 'large' }}
      size="large"
    >
      <Row>
        <Col span={12}>
          <Form.Item label="Código" name="code">
            <Input className="input-styled" placeholder="Escribe el código de color" />
          </Form.Item>
          <Row>
            <Col span={24}>
              <Form.Item label="Grupo de color" name="group"             rules={[{ required: true, message: 'Porfavor selecciona el grupo!' }]}
>
                <Select>
                  <Select.Option value="1">Esmalte automotriz</Select.Option>
                  <Select.Option value="2">Pintura arquitectónica</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <img src="/images/colors2.png" alt="brand" width={350} />
          <Link to="/formulas/search">
            <Button type="primary" className="mt-2 ml-2">
              Ver todos los colores
            </Button>
          </Link>
        </Col>
        {/* <Col span={12}>
          <Form.Item label="Cliente" name="client">
            {/** THIS IS A SELECT FROM A STATE THAT IS BEING RENDER BY CALLING THE API
            <Select
              showSearch
              placeholder="Selecciona un cliente"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {clients.map((client) => (
                <Option value={client.id}>{client.name}</Option>
              ))}
            </Select>
          </Form.Item>
        </Col> */}
      </Row>
      <Row>
        <Col span={16}>
          <Form.List name="bases" label="Bases">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                    <Form.Item
                      {...restField}
                      name={[name, 'code']}
                      rules={[{ required: true, message: 'Falta código de la base' }]}
                    >
                      <Select placeholder="Selecciona una base" style={{ width: '180px' }}>
                        {COLOR_BASES.map((base) => (
                          <Option value={base}>{base}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'quantity']}
                      rules={[{ required: true, message: 'Ingresa la cantidad'}]}
                    >
                      <Input placeholder="Cantidad" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Agregar base de color
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Button type="primary" htmlType="submit">
            Agregar fórmula
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default AddColor
