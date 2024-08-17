import { Meta, type StoryObj } from '@storybook/react'
import { Text, TextProps } from '@desk-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, perspiciatis non repudiandae doloremque animi, impedit natus consequuntur deleniti consectetur, unde enim ex pariatur quia error saepe a nihil fugiat ipsum?",
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}

