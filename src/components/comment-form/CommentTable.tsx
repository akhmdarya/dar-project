import React from 'react'

const CommentTable = (props: { comments: any[] }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Comment</th>
      </tr>
    </thead>
    <tbody>
      {props.comments.length > 0 ? (
        props.comments.map(comments => (
          <tr key={comments.username}>
            <td>{comments.username}</td>
            <td>{comments.email}</td>
            <td>{comments.comment}</td>
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

export { CommentTable }