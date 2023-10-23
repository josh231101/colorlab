import React from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import Topbar from 'components/Topbar'
import './style.css'

const { Header, Content, Footer, Sider } = Layout

function MainLayout({ children }) {
  return (
    <Layout>
      <Layout>
        <Layout.Header>
          <div className="">
            {/** NAVIGATION */}
            <Menu />
          </div>
          <Topbar />
        </Layout.Header>
        <Layout.Content style={{ height: '100%', position: 'relative' }}>
          <div className="content-layout">
            <div className="content-layout__frame">
              {children}
            </div>
          </div>
        </Layout.Content>
      </Layout>{' '}
    </Layout>
  )
}

export default withRouter(MainLayout)
