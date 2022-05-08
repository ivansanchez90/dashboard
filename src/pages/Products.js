import React, { useState } from 'react'
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
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              Card title
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText>
            <Button>
              Button
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              Card title
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Card subtitle
            </CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>
              Button
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              Card title
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
            </CardText>
            <Button>
              Button
            </Button>
          </CardBody>
        </Card>
      </CardGroup>

    </>
  )
}

export default Products