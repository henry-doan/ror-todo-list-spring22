import '../../App.css';
import { MainHeader, Feature, SubHeader } from '../styles/shared';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Home = () => (
  <>
    {/* <h1 style={{ margin: '0 auto', fontWeight: 'light', textAlign: 'center' }}>Welcome to TodoList!</h1> */}
    {/* <h1 style={styles.header}>Welcome to TodoList!</h1> */}
    {/* <h1 className='App-header'>Welcome to TodoList!</h1> */}
    <MainHeader bg>Welcome <br /> to <br /> TodoList!</MainHeader>
    <Container>
      {/* <SubHeader size='lrg'>Come see our Features!</SubHeader> */}
      <SubHeader textAlign='left'>Come see our Features!</SubHeader>
      {/* <SubHeader size='sm'>Come see our Features!</SubHeader> */}
      <Row>
        <Feature>
          <h3>
            Spicy jalapeno bacon
          </h3>
          <p>
            Spicy jalapeno bacon ipsum dolor amet cow pastrami cupim bacon drumstick. Doner fatback tenderloin turkey alcatra. Strip steak shoulder cow, short ribs bresaola alcatra pastrami turkey porchetta tail doner fatback filet mignon. Biltong kielbasa chicken doner.
          </p>
        </Feature>
        <Feature>
          <h3>
            Spicy jalapeno bacon
          </h3>
          <p>
            Spicy jalapeno bacon ipsum dolor amet cow pastrami cupim bacon drumstick. Doner fatback tenderloin turkey alcatra. Strip steak shoulder cow, short ribs bresaola alcatra pastrami turkey porchetta tail doner fatback filet mignon. Biltong kielbasa chicken doner.
          </p>
        </Feature>
      </Row>
      <Row>
        <Feature>
          <h3>
            Spicy jalapeno bacon
          </h3>
          <p>
            Spicy jalapeno bacon ipsum dolor amet cow pastrami cupim bacon drumstick. Doner fatback tenderloin turkey alcatra. Strip steak shoulder cow, short ribs bresaola alcatra pastrami turkey porchetta tail doner fatback filet mignon. Biltong kielbasa chicken doner.
          </p>
        </Feature>
        <Feature>
          <h3>
            Spicy jalapeno bacon
          </h3>
          <p>
            Spicy jalapeno bacon ipsum dolor amet cow pastrami cupim bacon drumstick. Doner fatback tenderloin turkey alcatra. Strip steak shoulder cow, short ribs bresaola alcatra pastrami turkey porchetta tail doner fatback filet mignon. Biltong kielbasa chicken doner.
          </p>
        </Feature>
      </Row>
    </Container>
    <Container>
      <SubHeader size='sm'>Prices</SubHeader>
      <Row>
        <Col>
          <div>
            <Image width='40px' src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" roundedCircle/>
            <h4>Bronze</h4>
            <p>base</p>
            <p>Features</p>
            <p>Features</p>
            <p>Features</p>
          </div>
        </Col>
        <Col>
          <div>
            <Image width='40px' src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" roundedCircle/>
            <h4>Silver</h4>
            <p>Mid</p>
            <p>Features</p>
            <p>Features</p>
            <p>Features</p>
          </div>
        </Col>
        <Col>
          <div>
            <Image width='40px' src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" roundedCircle/>
            <h4>Gold</h4>
            <p>Extra</p>
            <p>Features</p>
            <p>Features</p>
            <p>Features</p>
          </div>
        </Col>
      </Row>
    </Container>
  </>
)

const styles = {
  header: {
    textAlign: 'center',
    margin: '0 auto',
    fontWeight: 'light',
  },
  subHeader: {
    textAlign: 'left',
    fontWeight: 'light',
    fontSize: '12px'
  }
}

export default Home;