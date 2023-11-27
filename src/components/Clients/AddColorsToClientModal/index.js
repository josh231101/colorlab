import React, { useEffect, useState } from 'react'
import { Modal, Form, Input, Select, Button } from 'antd'
import apiClient from 'services/axios'

const { Option } = Select

const AddColorsToClientModal = ({ visible, onCancel, clientId }) => {
  const [form] = Form.useForm()
  const [colors, setColors] = useState([])

  useEffect(() => {
    const fetchColors = async () => {
      const res = await apiClient.get('/colors')
      const data = res.data
      console.log(colors, 'estos son los colores')
      console.log(data, 'estos son los colores')
      if (data && data.length > 0) {
        const colors = data.map((color) => ({
          key: color.id,
          id: color.id,
          name: color.code,
        }))
        setColors(colors)
      }
    }
    fetchColors()
  }, [])

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      // Call your API to store the form data
      console.log('Form values:', values)
      if (!values.select || !values.select.length) return
      if (values.select && values.select.length > 0) {
        const colors = values.select.map((colorId) => ({
          color_id: colorId,
        }))
        const res = await apiClient.post(`/clients/${clientId}/colors`, { colors })
        const data = res.data
        console.log(data, 'estos son los colores')
      }

      // Reset the form
      form.resetFields()
      // Close the modal
      onCancel()
    } catch (error) {
      console.error('Form validation failed:', error)
    }
  }

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      centered
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Submit
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="select"
          label="Colores"
          rules={[{ required: true, message: 'Please select a value' }]}
        >
          <Select mode="multiple">
            {colors &&
              colors.length &&
              colors.map((color) => (
                <Option key={color.id} value={color.id}>
                  {color.name}
                </Option>
              ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddColorsToClientModal
