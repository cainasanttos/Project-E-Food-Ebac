import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  background: #fff;
  box-shadow: 0 0 10px #ddd;
  margin-bottom: 24px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px); /* Eleva o card ao passar o mouse */
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 12px; /* Bordas arredondadas */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05); /* Zoom na imagem ao passar o mouse */
  }
`;

export const Info = styled.div`
  padding: 16px;
  flex: 1;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

export const Price = styled.span`
  font-weight: bold;
  display: block;
  margin-bottom: 12px;
`;

export const Button = styled.button`
  background-color: #e66767;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: transform 0.1s ease, background-color 0.2s ease;

  &:hover {
    background-color: #d45a5a; /* Cor mais escura ao passar o mouse */
  }

  &:active {
    transform: scale(0.95); /* Efeito de clique */
  }
`;