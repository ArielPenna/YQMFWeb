import { Carousel } from 'react-bootstrap';

const Slider = () => {
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/1.png" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/2.png" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/5.png" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <style jsx>
        {`
          slider {
            display: Flex;
            width: 100%;
            left: 0;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};
export default Slider;

{
  /* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */
}
