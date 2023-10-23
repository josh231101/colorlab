import { Button, Modal } from 'antd'
import Formulas from 'components/Formulas'
import React, { useState } from 'react'
import AddProduct from 'components/Forms/Product/Add'
import AddColor from 'components/Colors/Add'

const FormulasTable = () => {
  return (
    <div>
      <h1>Fórmulas Locales</h1>
      <Formulas />
    </div>
  )
}

export default FormulasTable
