import { FormControl, FormLabel, InputGroup } from 'react-bootstrap'
import Feedback from 'react-bootstrap/esm/Feedback'
import { Controller } from 'react-hook-form'

const IconTextFormInput = ({ name, control, label, icon: Icon, ...other }) => {
  return (
    <Controller
      name={name}
      defaultValue=""
      control={control}
      render={({ field, fieldState }) => (
        <div>
          {label && <FormLabel>{label}</FormLabel>}
          <InputGroup>
            {Icon && (
              <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                <Icon />
              </span>
            )}
            <FormControl className="border-0 bg-light rounded-end ps-1" {...field} {...other} isInvalid={Boolean(fieldState.error?.message)} />
            {fieldState.error?.message && <Feedback type="invalid">{fieldState.error?.message}</Feedback>}
          </InputGroup>
        </div>
      )}
    />
  )
}

export default IconTextFormInput
