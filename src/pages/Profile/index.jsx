import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container } from './styles'
import { jsx } from 'react/jsx-runtime';

const Profile = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>Monte sua pizza 🍕</h2>
        <p>(Aqui vai o layout da pizza conforme o figma — posso te ajudar com ele também!)</p>
      </Container>
      <Footer />
    </>
  )
}

export default Profile
