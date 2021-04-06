/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import Header from './index'

export default {
  title: 'components/Header',
  component: Header,
  decorators: [StoryRouter()],
}

const Template: Story<ComponentProps<typeof Header>> = (args) => (
  <Header {...args} />
)

export const FirstStory = Template.bind({})
FirstStory.args = {}
