import { Button, Modal } from 'antd'
import Colors from 'components/Colors'
import React, { useState } from 'react'
import Form from 'layouts/Form'

const ColorsPage = () => {
  return (
    <Form>
      <h1>Buscar color</h1>
      <Colors />
    </Form>
  )
}

export default ColorsPage
