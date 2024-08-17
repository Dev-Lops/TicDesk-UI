import React, { ComponentProps } from 'react'
import { SelectWrapper, StyledSelect } from './styles'

export interface SelectInputProps extends ComponentProps<typeof StyledSelect> {
  options: { value: string; label: string }[]
  disabled?: boolean
}

export const SelectInput: React.FC<SelectInputProps> = ({
  disabled,
  options,
  ...props
}) => {
  return (
    <SelectWrapper>
      <StyledSelect {...props} disabled={disabled}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  )
}

SelectInput.displayName = 'SelectInput'
