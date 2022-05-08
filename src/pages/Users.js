import React, { useEffect, useState } from 'react'
import {
  Table,
} from 'reactstrap';

function Users() {
  const url = 'http://localhost:3000/api/users'
  const [todos, setTodos] = useState()
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJson = await response.json()
    setTodos(responseJson.users)
  }

  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <Table striped>
      <thead>
        <tr>
          <th>
            #
          </th>
          <th>
            Name
          </th>
          <th>
            Email
          </th>
          <th>
            DNI
          </th>
        </tr>
      </thead>
      <tbody>

        {!todos ? 'cargando' : todos.map((todo, index) => {
          return (
            <>
              <tr>
                <th scope="row" key={index}>
                  {todo.id}
                </th>
                <td key={index}>
                  {todo.fullName}
                </td>
                <td key={index}>
                  {todo.email}
                </td>
                <td key={index}>
                  {todo.dni}
                </td>
              </tr>
            </>
          )
        })}

      </tbody>
    </Table>
  )
}

export default Users