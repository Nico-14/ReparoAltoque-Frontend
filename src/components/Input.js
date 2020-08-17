import React from 'react';

const Input = React.forwardRef((props, ref) => (
  <input {...props} className={
    `w-full rounded-md outline-none px-3 py-2 shadow-md border border-transparent 
    ${props.className || ''} 
    ${props.error ? ' border-red-500' : props?.currentValue?.length > 0 ? 'border-green-500' : ''}`
  } ref={ref} />
));

export default Input;