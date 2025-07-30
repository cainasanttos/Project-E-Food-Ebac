import { Card, Image, Info, Title, Description, Price, Button } from './styles';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ image, title, description, price, path }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <Image src={image} alt={title} />
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>{price}</Price>
        <Button onClick={() => navigate(path)}>Saiba mais</Button>
      </Info>
    </Card>
  );
};

export default ProductCard;