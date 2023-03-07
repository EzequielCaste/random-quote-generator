import styled from 'styled-components'

const StyledHeader = styled.header`
font-weight: 500;
font-size: 18px;
color: #4F4F4F;
display: flex;
justify-content: flex-end;
cursor: pointer;
width: fit-content;
`

const HeaderContainer = styled.div`
display: flex;
justify-content: flex-end;
`

interface Props {
  handleClick: () => void
}

const Header:React.FC<Props> = ({ handleClick }) => {
  return (
    <HeaderContainer>
      <StyledHeader onClick={handleClick}>
        random 🔀
      </StyledHeader>
    </HeaderContainer>
  )
}

export default Header