import React from 'react'

const ReportsPage = ({page, canAccessReports}) => {
  if (!canAccessReports) {
    return <h1>Access Denied</h1>;
  } 
  return (
    <div>
      <h1>Reports Page</h1>
    </div>
  )
}

export default ReportsPage