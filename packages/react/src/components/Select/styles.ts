import { styled } from '../../styles'

export const StyledSelect = styled('select', {
  padding: '1.5rem',
  fontSize: '$md',
  border: '2px solid #ccc',
  borderRadius: '$md',
  transition: 'border-color 0.2s',
  width: '100%',

  '&:focus': {
    border: '2px solid $desk300',
  },

  '&:disabled': {
    backgroundColor: '#f5f5f5',
    cursor: 'not-allowed',
  },
})

export const SelectWrapper = styled('div', {
  width: '100%',

  fontSize: '$md',
})
