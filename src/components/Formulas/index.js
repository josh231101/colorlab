import { SearchOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select, Table, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import apiClient from 'services/axios';
  export const COLOR_CODES = {
    'EK-0100': '#000000',
    'EK-0200': '',
    'EK-0300': '#1A2157',
    'EK-0500': '#88141D',
    'EK-0775': '#AD7322',
    'EK-0505': '#561B21',
    'EK-0534': '#AD0D15',
    'EK-1100': '#090909',
    'EK-1200': '#FFFEFE',
    'EK-0555': '#802A1B',
    'EK-0400': '#0D2D28',
    'EK-0906': '#C6C5C0',
    'EK-0910': '#CBC7BC',
    'EK-0700': '#F6C100',
  }
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nombre del código',
      dataIndex: 'code',
      key: 'code',
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
  ];

const Colors = () => {
  const [colors, setColors] = useState([])
  const [colorsOriginal, setColorsOriginal] = useState([])
  const [form] = Form.useForm()
  const getColors = async () => {
    const response = await apiClient.get('/colors')
    if (!response) return console.log('error')
    const data = response.data
    console.log(response)
    if (data && data.length > 0) {
      const colors = data.map((color) => ({
        key: color.id,
        id: color.id,
        code: color.code,
        bases: color.bases ? JSON.parse(color.bases) : [],
      }))
      setColors(colors)
      setColorsOriginal(colors)
    }
  }
  useEffect(() => {
    getColors()
  }
  , [])

  return (
    <>
    <Link to="/formulas">
      <Button type="primary" className="mb-4">
        Crear nueva formula
      </Button>
    </Link>
    <Table 
        dataSource={colors ?? []}
        columns={columns}
    />
    </>
  )
}

export default Colors
