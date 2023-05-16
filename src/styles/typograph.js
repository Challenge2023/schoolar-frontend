import styled from 'styled-components'

export const TitleText = styled.h1`
  color: ${({ theme, color }) => theme.colors[`${color}`]};
  font-size: ${({ theme, fontSize }) => theme.textSizes[`${fontSize}`]};
  font-family: ${({ theme }) => theme.fonts.title};
  line-height: 150%;
  font-weight: ${({ weight }) => weight ?? 800};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.textSizes["title-m"]};
  }
`

export const TitleTextRegular = styled.h1`
  color: ${({ theme, color }) => theme.colors[`${color}`]};
  font-size: ${({ theme, fontSize }) => theme.textSizes[`${fontSize}`]};
  line-height: 150%;
  font-weight: ${({ weight }) => weight ?? 800};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.textSizes["title-m"]};
  }
`

export const RegularText = styled.p`
  color: ${({ theme, color }) => theme.colors[`${color}`]};
  font-size: ${({ theme, fontSize }) => theme.textSizes[`${fontSize}`]};
  line-height: 160%;
  font-weight: ${({ weight }) => weight ?? 400};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.textSizes["text-s"]};
  }
`

export const RegularTextCustom = styled.p`
  color: ${({ theme, color }) => theme.colors[`${color}`]};
  font-size: ${({ theme, fontSize }) => theme.textSizes[`${fontSize}`]};
  line-height: 160%;
  font-weight: ${({ weight }) => weight ?? 400};
`