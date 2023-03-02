import styled from 'styled-components'

const StyledHeader = styled.header`
font-weight: 500;
font-size: 18px;
color: #4F4F4F;
display: flex;
justify-content: flex-end;
`

const Header = () => {
  return (
    <StyledHeader>
      random 🔀
    </StyledHeader>
  )
}

export default Header