import React from 'react'

const CenteredComponent = ({ children }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "azure", flexDirection: "column" }}>
      {children}
    </div>
  )
}

export default CenteredComponent