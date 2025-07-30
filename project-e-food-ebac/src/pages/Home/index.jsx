import ProductCard from '../../../src/components/ProductCard';
import { Container } from './styles';
import pizzaImage from '../../assets/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.avif';
import sushiImage from '../../assets/shouri-sushi-delivery.jpg';

const Home = () => {
  return (
    <Container>
      <ProductCard
        image={sushiImage}
        title="Sushi Master"
        description="Sushis frescos e sashimis deliciosos entregues na sua casa."
        price="R$ 55,00"
        path="/sushi-master"
        buttonType="learnMore"
      />
      <ProductCard
        image={pizzaImage}
        title="La Pasta"
        description="Massas artesanais com molho caseiro e ingredientes frescos."
        price="R$ 40,00"
        path="/la-pasta"
        buttonType="learnMore"
      />
    </Container>
  );
};

export default Home;