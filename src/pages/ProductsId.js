import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"


function ProductsId() {
  const params = useParams();
  const url = 'http://localhost:3000/api/products'
  const [todos, setTodos] = useState()
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJson = await response.json()
    setTodos(responseJson.products)
  }

  useEffect(() => {
    fetchApi();
  }, [])
  return (
    <>
      {(!todos.id === params.id) ? 'cargando' : todos.map((todo, index) => {
        return (
          <>
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://picsum.photos/318/180"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  <td key={index}>{todo.name}</td>
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  <td key={index}>{todo.price}</td>
                </CardSubtitle>
                <CardText>
                  <td key={index}>{todo.description}</td>
                </CardText>
              </CardBody>
            </Card>
          </>
        )
      })
      }
    </>
  )
}

export default ProductsId
