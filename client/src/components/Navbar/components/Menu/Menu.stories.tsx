/* eslint-disable react/jsx-props-no-spreading */
/* eslint:disable */
import { Story } from '@storybook/react'
import React from 'react'
import StoryRouter from 'storybook-react-router'
import Config from '@/config.json'

import Menu, { MenuProps } from './index'

export default {
  title: 'components/Menu/Menu',
  component: Menu,
  decorators: [StoryRouter()],
}

const Template: Story<MenuProps> = (args) => <Menu {...args} />
export const Primary = Template.bind({})
Primary.args = { menuItems: Config.menu.menuItems }

export const NotAnchored = Template.bind({})
NotAnchored.args = {
  menuItems: Config.menu.menuItems,
  anchored: false,
}
