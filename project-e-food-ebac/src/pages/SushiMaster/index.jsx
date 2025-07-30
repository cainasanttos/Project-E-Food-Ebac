import ProductCard from '../../../src/components/ProductCard';
import { Container } from './styles';
import sushiImage from '../../assets/shouri-sushi-delivery.jpg';
import sashimiImage from '../../assets/peixe-cru.jpg';

const SushiMaster = () => {
  return (
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
  );
};

export default SushiMaster;