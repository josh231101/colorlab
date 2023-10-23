import React from 'react'
import { connect } from 'react-redux'
import './index.css'
const mapStateToProps = () => ({})
const Dashboard = () => {
  return (
    <div className="dashboard-welcome">
      <div class="dashboard-container">
        <img src="images/1.png" />
      </div>
      <div>
        <h1>¡Bienvenido al administrador!</h1>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Dashboard)
