import { Meta, type StoryObj } from '@storybook/react'
import { Box, Text, SelectInput, SelectInputProps } from '@desk-ui/react'

export default {
  title: 'Form/SelectInput',
  component: SelectInput,
  args: {},
  decorators: [
    (Story) => {
      return <div style={{ padding: '2rem' }}>
        <Box as='label' css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size='sm'>Choose an option</Text>
          {Story()}
        </Box>
      </div>
    }
  ]
} as Meta<SelectInputProps>

export const Primary: StoryObj<SelectInputProps> = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  }
}

export const Disabled: StoryObj<SelectInputProps> = {
  args: {
    options: [
    ],
    disabled: true,
  }
}


