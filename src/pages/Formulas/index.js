import { Button, Modal } from 'antd'
import Products from 'components/Products'
import React, { useState } from 'react'
import AddProduct from 'components/Forms/Product/Add'
import AddColor from 'components/Colors/Add'

const Formulas = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <div>
      <h1>Añadir fórmula</h1>
      <AddColor />
    </div>
  )
}

export default Formulas
