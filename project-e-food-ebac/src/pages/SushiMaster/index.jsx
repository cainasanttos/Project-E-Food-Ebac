import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import { Container } from './styles';
import sushiImage from '../../assets/shouri-sushi-delivery.jpg';
import sashimiImage from '../../assets/peixe-cru.jpg';

const SushiMaster = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>Cardápio - Sushi Master</h2>
        <ProductCard
          image={sushiImage}
          title="Combo Sushi 24 Peças"
          description="Sushis frescos com sashimi e rolinhos variados."
          price="R$ 65,00"
          buttonType="addToCart"
        />
        <ProductCard
          image={sashimiImage}
          title="Sashimi Especial"
          description="Fatia de peixes frescos com acompanhamento."
          price="R$ 50,00"
          buttonType="addToCart"
        />
      </Container>
      <Footer />
    </>
  );
};

export default SushiMaster;