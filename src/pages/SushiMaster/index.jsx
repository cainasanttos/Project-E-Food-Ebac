import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import { Container, CoverImage } from './styles';

const SushiMaster = () => {
  return (
    <>
      <Header />
      <Container>
        <CoverImage src="/assets/shouri-sushi-delivery.jpg" alt="Sushi Master" />
        <h2>Cardápio - Sushi Master</h2>
        <ProductCard
          image="/assets/shouri-sushi-delivery.jpg"
          title="Combo Sushi 24 Peças"
          description="Sushis frescos com sashimi e rolinhos variados."
          price="R$ 65,00"
        />
        <ProductCard
          image="/assets/shouri-sushi-delivery.jpg"
          title="Sashimi Especial"
          description="Fatia de peixes frescos com acompanhamento."
          price="R$ 50,00"
        />
      </Container>
      <Footer />
    </>
  );
};

export default SushiMaster;