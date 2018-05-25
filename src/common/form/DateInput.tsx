import * as React from 'react'
import { WrappedFieldProps } from 'redux-form/lib/Field';
import TextField from '@material-ui/core/TextField';

export default (props: WrappedFieldProps) => {
  return (
    <div>
        { console.warn(props.meta)  }
       <TextField {...props.input}  type="date" 
        error={props.meta.touched && props.meta.invalid} 
       helperText={props.meta.error}/>      
    </div>
  )
}
