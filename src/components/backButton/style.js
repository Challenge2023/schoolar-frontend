import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  background-color: ${({ theme, backgroundcolor }) =>
    theme.colors[`${backgroundcolor}`]};
  border: 2px solid;
  border-color: ${({ theme, textcolor }) => theme.colors[`${textcolor}`]};
  border-radius: 15px;
  color: ${({ theme, textcolor }) => theme.colors[`${textcolor}`]};
  transition: 0.3s;
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  text-align: center;
  font-weight: ${({ weight }) => weight};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme, hoverbackgroundcolor }) =>
    theme.colors[`${hoverbackgroundcolor}`]};
    color: ${({ theme, hovercolor }) =>
    theme.colors[`${hovercolor}`]};
  }

  img {
    width: 20%;
  }

  @media(max-width: 768px) {
    height: 45px;
    width: 45px;
  }
`