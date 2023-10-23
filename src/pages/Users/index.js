import { Button, Modal } from 'antd'
import ClientsSearch from 'components/Clients'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UsersPage = () => {
  return (
    <div>
      <h1>Buscar Clientes</h1>
      <div className="w-100">
        <Link to="/clients/add">
          <Button type="primary" className='ml-auto mb-2'>
            + Nuevo Cliente
          </Button>
        </Link>
      </div>
      <ClientsSearch />
    </div>
  )
}

export default UsersPage
