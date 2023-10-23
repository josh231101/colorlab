import React, { lazy, Suspense } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { connect } from 'react-redux'

import Layout from 'layouts'

const routes = [
  // Auth Pages
  {
    path: '/auth/login',
    Component: lazy(() => import('pages/auth/login')),
    exact: true,
  },
  // Users
  {
    path : '/clients',
    Component: lazy(() => import('pages/Users')),
    exact: true,
  },
  {
    path : '/clients/search',
    Component: lazy(() => import('pages/Users/Table')),
    exact: true,
  },
  {
    path : '/clients/add',
    Component: lazy(() => import('pages/Users/Add')),
    exact: true,
  },
  // Colors
  {
    path : '/colors',
    Component: lazy(() => import('pages/Colors')),
    exact: true,
  },
  // Colors
  {
    path : '/colors/:search',
    Component: lazy(() => import('pages/ColorTable')),
    exact: true,
  },
  // Colors
  {
    path : '/formulas',
    Component: lazy(() => import('pages/Formulas')),
    exact: true,
  },
  // Colors
  {
    path : '/formulas/:search',
    Component: lazy(() => import('pages/Formulas/Table')),
    exact: true,
  },
  // Other
  {
    path: '/dashboard',
    Component: lazy(() => import('pages/Dashboard')),
    exact: true,
  },
  {
    path: '/auth/404',
    Component: lazy(() => import('pages/auth/400')),
    exact: true,
  },
]

const mapStateToProps = ({ settings }) => ({
  routerAnimation: settings.routerAnimation,
})

const Router = ({ history, routerAnimation }) => {
  return (
    <ConnectedRouter history={history}>
      <Layout>
        <Route
          render={(state) => {
            const { location } = state
            return (
              <SwitchTransition>
                <CSSTransition
                  key={location.pathname}
                  appear
                  classNames={routerAnimation}
                  timeout={routerAnimation === 'none' ? 0 : 300}
                >
                  <Switch location={location}>
                    <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
                    {routes.map(({ path, Component, exact }) => (
                      <Route
                        path={path}
                        key={path}
                        exact={exact}
                        render={() => {
                          return (
                            <div className={routerAnimation}>
                              <Suspense fallback={null}>
                                <Component />
                              </Suspense>
                            </div>
                          )
                        }}
                      />
                    ))}
                    <Redirect to="/auth/404" />
                  </Switch>
                </CSSTransition>
              </SwitchTransition>
            )
          }}
        />
      </Layout>
    </ConnectedRouter>
  )
}

export default connect(mapStateToProps)(Router)
