import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[`${backgroundColor}`]};
  border: 2px solid;
  border-color: ${({ theme, textColor }) => theme.colors[`${textColor}`]};
  padding: 0.832rem 2rem;
  border-radius: 10px;
  color: ${({ theme, textColor }) => theme.colors[`${textColor}`]};
  transition: 0.3s;
  width: ${({ width }) => width};
  text-align: center;
  font-weight: ${({ weight }) => weight};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme, hoverBackgroundColor }) =>
    theme.colors[`${hoverBackgroundColor}`]};
    color: ${({ theme, hoverColor }) =>
    theme.colors[`${hoverColor}`]};
  }
`