import { Container, Logo } from './styles';
import logo from '../../assets/33603068522623.Y3JvcCw4NDQsNjYwLDIxNywyOQ-removebg-preview.png'; 

const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt="efood" /> {/* Use a imagem importada */}
    </Container>
  );
};

export default Header;