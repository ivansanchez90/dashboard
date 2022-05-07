import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const Home = (props) => {
  return (
    <UncontrolledCarousel
      items={[
        {
          altText: 'Slide 1',

          key: 1,
          src: 'https://mundoempresarial.com.ar/download/multimedia.normal.9f6fd15dd41551df.494a4c4754505755364643444a45595947414d47373657564e495f6e6f726d616c2e6a7067.jpg'
        },
        {
          altText: 'Slide 2',

          key: 2,
          src: 'https://vidrieria-alem.com.ar/wp-content/uploads/2021/09/benner-mp-movil-tamano-2-1200x600.jpg'
        },
        {
          altText: 'Slide 3',

          key: 3,
          src: 'https://www.duracero.com/assets/img/productos/barras-corrugadas.jpg'
        }
      ]}
    />
  );
}

export default Home;