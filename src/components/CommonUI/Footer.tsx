import styled from "styled-components";
import { BsGithub } from "react-icons/bs";

const SFooter = styled.footer`
  background-color: #e9e9e9;
  color: black;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  @media ${({ theme }) => theme.device.mobile} {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

const STitleContainer = styled.a`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
  }
  & > img:first-child {
    width: 180px;
    margin-bottom: 0.6rem;
    @media ${({ theme }) => theme.device.mobile} {
      width: 160px;
    }
  }
`;

const SCopyRight = styled.div`
  font-size: 0.6rem;
  align-items: baseline;
  gap: 0.5rem;
`;

const SUl = styled.ul`
  margin-top: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 1rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    text-align: left;
  }
`;

const STeamContainer = styled.li`
  display: flex;
  & :first-child {
    font-size: 0.6rem;
    margin-right: 0.5rem;
  }
  & :nth-child(2) {
    font-size: 1rem;
    margin-right: 1rem;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 0.7rem;
    }
  }
`;

const Footer = () => {
  return (
    <SFooter>
      <STitleContainer
        href="https://github.com/사용자명/레포명"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={`${process.env.PUBLIC_URL}/logoKorean.png`} alt="WTE logo" />
        <SCopyRight>
          <span>COPYRIGHT &copy;WTE ALL RIGHT RESERVED.</span>
          <BsGithub size={13} />
        </SCopyRight>
      </STitleContainer>
      <SUl>
        <STeamContainer>
          <div>FRONTEND | BACKEND | DESIGN</div>
          <div>이진우</div>
        </STeamContainer>
      </SUl>
    </SFooter>
  );
};
export default Footer;
