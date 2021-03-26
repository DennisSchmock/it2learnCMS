/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react'
import Header from './index'

export default {
  title: 'Header',
  component: Header,
}

const Template: Story<ComponentProps<typeof Header>> = (args) => (
  <Header {...args} />
)

export const FirstStory = Template.bind({})
FirstStory.args = {}
