import React from 'react'
import main from '@/scenes/main'
import { RouteProps } from './types'

const RootRoute: RouteProps[] = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    // eslint-disable-next-line react/display-name
    component: main.screens.MainScreen,
  },
]

const ErrorRoute: RouteProps = {
  path: '*',
  key: 'NO_MATCH',
  // eslint-disable-next-line react/display-name
  component: () => <div>no mathc</div>,
}

const RootRoutes: Array<RouteProps> = RootRoute.concat(
  RootRoute,
  main.routes,
  ErrorRoute,
)

export default RootRoutes
