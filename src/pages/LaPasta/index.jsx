import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import { Container, CoverImage } from './styles';

const LaPasta = () => {
  return (
    <>
      <Header />
      <Container>
        <CoverImage src="/assets/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.avif" alt="La Pasta" />
        <h2>Cardápio - La Pasta</h2>
        <ProductCard
          image="/assets/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.avif"
          title="Pizza Marguerita"
          description="Molho de tomate, mussarela e manjericão fresco."
          price="R$ 45,00"
        />
        <ProductCard
          image="/assets/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.avif"
          title="Spaghetti Carbonara"
          description="Massa com molho cremoso e pancetta."
          price="R$ 38,00"
        />
      </Container>
      <Footer />
    </>
  );
};

export default LaPasta;