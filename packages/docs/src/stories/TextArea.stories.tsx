import { Meta, type StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@desk-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return <div style={{ padding: '2rem' }}>
        <Box as='label' css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size='sm'>Observations</Text>
          {Story()}
        </Box>
      </div>
    }
  ]
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...'
  }
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  }
}


