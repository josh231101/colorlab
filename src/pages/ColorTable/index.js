import { Button, Modal } from 'antd'
import ColorsTable from 'components/ColorsTable'
import React, { useState } from 'react'
import Form from 'layouts/Form'

const ColorsTablePage = () => {
  return (
    <Form>
      <h1>Buscar color</h1>
      <ColorsTable />
    </Form>
  )
}

export default ColorsTablePage
