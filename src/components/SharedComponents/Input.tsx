import React, {forwardRef} from 'react'
import { TextField } from '@material-ui/core'


interface inputType{
    name: string,
    placeholder: string
}

interface switchType{
  name: string
}

export const Input = forwardRef((props: inputType, ref) => {
  return (
        <TextField variant='outlined' margin='normal' inputRef={ref} fullWidth type='text' {...props}>
            
        </TextField>
  )
})


export const Password = forwardRef((props: inputType, ref) => {
    return (
          <TextField variant='outlined' margin='normal' inputRef={ref} fullWidth type='password' {...props}>
              
          </TextField>
    )
  })