import { Meta, type StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@devlops-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o elemento box</Text>
      </>
    )
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
}

