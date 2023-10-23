import { SearchOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select } from 'antd'
import React from 'react'

const Colors = () => {
  return (
    <Form
      wrapperCol={{ span: 20 }}
      layout="vertical"
      initialValues={{ size: 'large' }}
      size="large"
    >
      <Form.Item
        label={
          <>
            Color{' '}
            <a className="ml-2" style={{ fontSize: 12 }}>
              Ver todos los colores
            </a>
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
      <Form.Item label="Input" name="client">
        <Input
          className="input-styled"
          prefix={<SearchOutlined />}
          placeholder="Introduzca el nombre del cliente para ver sus colores guardados"
        />
      </Form.Item>
      <Form.Item label="Grupo de color">
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
    </Form>
  )
}

export default Colors
