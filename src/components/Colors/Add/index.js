import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Radio, Row, Select } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const codeInitialValues = [
  {
    code: 'blk',
    value: '',
  },
  {
    code: 'yox',
    value: '',
  },
  {
    code: 'oxr',
    value: '',
  },
  {
    code: 'tbl',
    value: '',
  },
  {
    code: 'grn',
    value: '',
  },
  {
    code: 'lfy',
    value: '',
  },
  {
    code: 'mag',
    value: '',
  },
  {
    code: 'ffr',
    value: '',
  },
  {
    code: 'wht',
    value: '',
  },
]

const AddColor = () => {
  return (
    <Form
      wrapperCol={{ span: 20 }}
      layout="vertical"
      initialValues={{ size: 'large' }}
      size="large"
    >
      <Row>
        <Col span={12}>
          <Form.Item label="Nombre de color" name="name">
            <Input
              className="input-styled"
              prefix={<SearchOutlined />}
              placeholder="Escribe el nombre o número del color"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Cliente" name="client">
            <Input
              className="input-styled"
              prefix={<SearchOutlined />}
              placeholder="Escribe el nombre del cliente"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item label="Producto" name="product">
            <Input
              className="input-styled"
              prefix={<SearchOutlined />}
              placeholder="Escribe el nombre del producto"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Buscar
            </Button>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={16}>
          <Form.Item label="Cantidad (L)" name="quantity" initialValue="">
            <Radio.Group>
              <Radio.Button value="1/8">1/8</Radio.Button>
              <Radio.Button value="1/4">1/4</Radio.Button>
              <Radio.Button value="1">1</Radio.Button>
              <Radio.Button value="4">4</Radio.Button>
            </Radio.Group>
          </Form.Item>
          {/* <Form.List name="codes" initialValue={codeInitialValues}>
            {(fields) => (
              <div>
                {JSON.stringify(fields)}
                {fields.map((field) => (
                    
                  <Form.Item label={`${field.value} - `} name={[field.name, 'value' ]} initialValue={[field.name, field.value]}>
                    <Input />
                    {JSON.stringify(field)}
                  </Form.Item>
                ))}
              </div>
            )}
          </Form.List> */}
          <Row>
            {codeInitialValues.map((code) => (
              <Col span={12}>
                <Form.Item
                  labelCol={{ span: 24 }}
                  label={`${code.code} - `}
                  name={code.code}
                  initialValue={code.value}
                >
                  <Input />
                </Form.Item>
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={8}>
          <img src="/images/colors2.png" alt="brand" width={350} />
          <Link to="/formulas/search">
            <Button type="primary" className="mt-2 ml-2">
              Ver todos los resultados de color
            </Button>
          </Link>
        </Col>
      </Row>
    </Form>
  )
}

export default AddColor
