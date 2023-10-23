import { SearchOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select, Table } from 'antd'
import React from 'react'

const dataSource = [
    {
      key: '1',
      number: '00N 00/000',
      name: 'Black',
    },
    {
        key: '2',
        number: '00N 05/000',
        name: 'Dark Secret',
    },
    {
        key: '3',
        number: '00N 10/000',
        name: 'Dark Secret',
    },
    {
        key: '4',
        number: '00N 15/000',
        name: 'Dark Secret',
    },
    {
        key: '5',
        number: '00N 20/000',
        name: 'Dark Secret',
    }
  ];
  
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
      title: '',
      dataIndex: 'select',
      key: 'select',
    },
  ];

const Colors = () => {
  return (
    <>
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
    <Table 
        dataSource={dataSource}
        columns={columns}
    />
    </>
  )
}

export default Colors
