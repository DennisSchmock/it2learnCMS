/* eslint-disable react/jsx-props-no-spreading */
import { Story } from '@storybook/react'
import React from 'react'
import StoryRouter from 'storybook-react-router'
import MenuItem, { MenuItemProps } from './index'

export default {
  title: 'components/Menu/MenuItem',
  component: MenuItem,
  decorators: [StoryRouter()],
}

const Template: Story<MenuItemProps> = (args) => (
  <MenuItem {...args} />
)
export const Primary = Template.bind({})

Primary.args = {
  title: 'Main',
  enabled: true,
  navigation: {
    path: '/',
  },
}
