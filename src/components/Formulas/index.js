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
    <Button type="primary" className="mb-4">Crear nueva fórmula</Button>
    <Table 
        dataSource={dataSource}
        columns={columns}
    />
    </>
  )
}

export default Colors
