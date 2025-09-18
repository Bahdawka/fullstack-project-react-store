import type { ChangeEvent } from 'react'

interface SelectFieldProps {
  id: string
  value: string
  label: string
  required?: boolean
  options: { value: string; text: string }[]
  onChangeSelect?: (e: ChangeEvent<HTMLSelectElement>) => void
}

const SelectField = ({ id, value, label, required = true, options, onChangeSelect }: SelectFieldProps) => {
  const placeholderValue = ''
  const placeholderText = `Please select a ${label}...`

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={id}>{label}:</label>
      <select
        className="form-control"
        id={id}
        value={value}
        onChange={onChangeSelect}
        required={required}
      >
        <option value={placeholderValue}>{placeholderText}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectField