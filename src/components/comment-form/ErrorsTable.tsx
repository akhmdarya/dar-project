import React from 'react'

const ErrorsTable = (props: { errors: any[] }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Comment</th>
      </tr>
    </thead>
    <tbody>
      {props.errors.length > 0 ? (
        props.errors.map(error => (
          <tr key={error.id}>
            <td>{error.name}</td>
        
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No comments</td>
        </tr>
      )}
    </tbody>
  </table>
)

export { ErrorsTable }