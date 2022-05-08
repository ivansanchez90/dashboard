import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"


function ProductsId() {
  const {id} = useParams();
  const url = `http://localhost:3000/api/products/${id}`
  const [product, setProduct] = useState()
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJson = await response.json()
    setProduct(responseJson.data)
  }

  useEffect(() => {
    fetchApi();
  }, [])
  return (
    <>
      {(!product) ? 'cargando' : 
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
                  <td>{product.name}</td>
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  <td>{product.price}</td>
                </CardSubtitle>
                <CardText>
                  <td>{product.description}</td>
                </CardText>
              </CardBody>
            </Card>
          </>
      }
    </>
  )
}

export default ProductsId
