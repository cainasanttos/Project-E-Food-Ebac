import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  background: #fff;
  box-shadow: 0 0 10px #ddd;
  margin-bottom: 24px;
`

export const Image = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
`

export const Info = styled.div`
  padding: 16px;
  flex: 1;
`

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`

export const Price = styled.span`
  font-weight: bold;
  display: block;
  margin-bottom: 12px;
`

export const Button = styled.button`
  background-color: #e66767;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
`
