import { Button, Modal } from 'antd'
import ClientsSearch from 'components/Clients'
import ClientsTable from 'components/Clients/Table'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UsersPage = () => {
  return (
    <div>
      <h1>Buscar Clientes</h1>
      <div className="w-100">
        <Link to="/clients/add" className="mr-2">
          <Button type="primary" className='ml-auto mb-2'>
            + Nuevo Cliente
          </Button>
        </Link>
      </div>
      <ClientsTable />
    </div>
  )
}

export default UsersPage
