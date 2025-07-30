import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import { Container } from './styles';
import pizzaImage from '../../assets/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.avif';
import carbonaraImage from '../../assets/FCB48A53-86F0-4697-BE75-7B7CE9B49EBE.avif';

const LaPasta = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>Cardápio - La Pasta</h2>
        <ProductCard
          image={pizzaImage}
          title="Pizza Marguerita"
          description="Molho de tomate, mussarela e manjericão fresco."
          price="R$ 45,00"
          buttonType="addToCart"
        />
        <ProductCard
          image={carbonaraImage}
          title="Spaghetti Carbonara"
          description="Massa com molho cremoso e pancetta."
          price="R$ 38,00"
          buttonType="addToCart"
        />
      </Container>
      <Footer />
    </>
  );
};

export default LaPasta;