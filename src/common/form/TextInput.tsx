import * as React from 'react'
import { WrappedFieldProps } from 'redux-form/lib/Field';

export default (props: WrappedFieldProps) => {
  return (
    <div>
       <input {...props.input}  />
       <p>{props.meta.touched && 'Touched'}</p>
    </div>
  )
}
