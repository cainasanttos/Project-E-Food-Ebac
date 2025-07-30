import { Card, Image, Info, Title, Description, Price, Button } from './styles';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ image, title, description, price, path, buttonType }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (buttonType === 'learnMore' && path) {
      navigate(path);
    } else if (buttonType === 'addToCart') {
      console.log(`${title} adicionado ao carrinho!`);
    }
  };

  return (
    <Card>
      <Image src={image} alt={title} />
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>{price}</Price>
        <Button onClick={handleButtonClick}>
          {buttonType === 'learnMore' ? 'Saiba mais' : 'Adicionar ao carrinho'}
        </Button>
      </Info>
    </Card>
  );
};

export default ProductCard;