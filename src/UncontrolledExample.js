import Carousel from 'react-bootstrap/Carousel';
import "../src/uncontrolledExample.css"
import lapwithman from "/home/oem/cardreact/src/images/man with laptop.jpg"
import threelap from "/home/oem/cardreact/src/images/img-prod-cms-rt-microsoft-com_akamaized_net-RE4V84C.png"
import asus from "/home/oem/cardreact/src/images/dj2kyvrcs71rc0ec-0_0_desktop_1X.jpg"
import chuwi from "/home/oem/cardreact/src/images/2020060316041231.jpg"
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={threelap}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={asus}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={chuwi}
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;