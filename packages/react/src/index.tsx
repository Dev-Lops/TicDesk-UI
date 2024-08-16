import type { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$desk900',
  borderRadius: '$md',
  border: 0,
  fontWeight: 'bold',
  color: '$white',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',

  variants: {
    size: {
      small: {
        padding: '$2 $4',
        fontSize: 14,
      },
      big: {
        padding: '$3 $6',
        fontSize: 16,
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },

  '&:hover': {
    backgroundColor: '$desk800',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
