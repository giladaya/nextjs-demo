import React from 'react'

export default ({ header, children }) => (
  <div>
    {header}
    <div style={{padding: '10px'}}>
      {children}
    </div>
  </div>
)
