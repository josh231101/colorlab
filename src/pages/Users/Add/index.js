import { Button, Modal } from 'antd'
import ClientsAdd from 'components/Clients/Add'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UsersPage = () => {
  return (
    <div>
      <h1>Nuevo Cliente</h1>
      <ClientsAdd />
    </div>
  )
}

export default UsersPage
