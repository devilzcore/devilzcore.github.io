import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    background: linear-gradient(rgb(176, 251, 188), rgb(130, 249, 161)) text;
    margin-top: 40px;
  }

  p {
    margin-top: 14px;
    font-size: 24px;
    line-height: 32px;
  }

  .wrapper {
    margin-top: -10rem;

    width: 100%;
    max-width: 1280px;
    box-sizing: border-box;
  }

  .content {
    display: flex;
  }

  .profile {
    display: flex;
    justify-content: center;
  }

  .profile img {
    border-radius: 50%;
    max-width: 17.188rem;
    max-height: 17.188rem;

    width: auto;
    height: auto;
  }

  .about {
    margin: 2rem 4rem;
  }

  @media (max-width: 768px) {
    .content {
      display: block;
    }

    .profile {
      margin-top: 11rem;
    }
  }
`
