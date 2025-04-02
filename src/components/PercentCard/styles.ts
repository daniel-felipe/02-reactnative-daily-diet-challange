import styled, { css } from 'styled-components/native'

import { ArrowUpRight } from 'phosphor-react-native'

export const Container = styled.View`
  position: relative;
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.colors.green.light};
  border-radius: 8px;

  align-items: center;
  justify-content: center;
  margin-top: 32px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize['2xl']}px;
    line-height: ${theme.fontSize['2xl'] * 1.3}px;
    color: ${theme.colors.gray['700']};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.sm}px;
    line-height: ${theme.fontSize.sm * 1.3}px;
    font-family: ${theme.fontFamily.regular};
  `}  
`

export const OpenIcon = styled(ArrowUpRight)`
  position: absolute;
  right: 12px;
  top: 12px;

  font-size: 24px;
  color: ${({ theme }) => theme.colors.green.dark};
`
