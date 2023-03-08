import styled from 'styled-components'

const Container = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #4f4f4f;
  padding: 50px 30px;
  margin: 9px auto 16px auto;
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #333333;
    color: #f2f2f2;
    cursor: pointer;
  }

  @media all and (min-width: 600px) {
    font-size: 24px;
    margin: 80px auto 16px auto;
    width: 472px;
  }
  @media all and (min-width: 900px) {
    margin: 25px auto 15px auto;
    padding: 40px 20px;
  }
  @media all and (min-width: 1440px) {
    margin: 109px auto 16px auto;
    padding: 50px 30px;
  }
`
export default Container