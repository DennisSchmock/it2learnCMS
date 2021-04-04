/* eslint-disable react/jsx-props-no-spreading */
/* eslint:disable */
import { Story } from '@storybook/react'
import React from 'react'
import StoryRouter from 'storybook-react-router'

import Menu from './index'
import { MenuOptions } from '../../types/MenuTypes'

export default {
  title: 'components/Menu/Menu',
  component: Menu,
  decorators: [StoryRouter()],
}

const Template: Story<MenuOptions> = (args) => <Menu {...args} />
export const Primary = Template.bind({})

Primary.args = {}
