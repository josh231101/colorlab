import React from 'react'
import { connect } from 'react-redux'
import { Tooltip, Switch, Avatar } from 'antd'
import UserMenu from 'components/Topbar/UserMenu'
import './style.css'
import Menu from 'components/Menu'
import { HomeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const mapStateToProps = ({ dispatch, settings }) => ({
  dispatch,
  theme: settings.theme,
})

const TopBar = ({ dispatch, selectedDomain, theme }) => {
  const setTheme = (nextTheme) => {
    dispatch({
      type: 'settings/SET_THEME',
      payload: {
        theme: nextTheme,
      },
    })
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'menuColor',
        value: nextTheme === 'dark' ? 'dark' : 'gray',
      },
    })
    dispatch({
      type: 'settings/SET_PRIMARY_COLOR',
      payload: {
        color: nextTheme === 'dark' ? '#184A7B' : '#184A7B',
      },
    })
  }
  return (
    <nav className="topbar">
      <div className="mr-1">
        <Link to="/dashboard">
          <img src="./images/home.png" alt="Dashboard" height={24} />
        </Link>
      </div>
      <div className="mr-auto">
        <Menu />
      </div>
      <div className="logo-topbar">
        <img src="./images/logos.png" alt="ColorLab" height={40} />
      </div>
      <div className="ml-auto">
        <UserMenu />
      </div>
    </nav>
  )
}

export default connect(mapStateToProps)(TopBar)
