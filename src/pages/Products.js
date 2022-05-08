import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,

} from 'reactstrap';

function Products() {

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

  const [dropdown, setDropdown] = useState(false);

  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown);
  }
  return (
    <>
      <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
        <DropdownToggle>
          Products Category
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            accion 1
          </DropdownItem>
          <DropdownItem>
            accion 2
          </DropdownItem>
          <DropdownItem>
            accion 3
          </DropdownItem>
          <DropdownItem>
            accion 4
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <CardGroup>

        {!todos ? 'cargando' : todos.map((todo, index) => {
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
                  <Link to={`/products/${todo.id}`}>
                    <Button >
                      Description
                    </Button>
                  </Link>



                </CardBody>
              </Card>
            </>
          )
        })}




      </CardGroup>

    </>
  )
}

export default Products