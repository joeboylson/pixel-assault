import styled from "styled-components";
import SpacedOneColumn from "../../components/SpacedOneColumn";
import logoCrow2 from "../../assets/images/logoCrow2.png";

const StyledFooter = styled.footer`
  padding: 72px;
  background-color: rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 1000px) {
    padding: 72px 0;
  }
`;

const FooterContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const FooterImageWrapper = styled.div`
  width: 300px;
`;

const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-left: auto;

  @media screen and (max-width: 1000px) {
    margin-left: 0;
    margin-top: 24px;
    width: calc(100% - 48px);
    max-width: 450px;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function Footer() {
  return (
    <StyledFooter data-id="StyledFooter">
      <FooterContentWrapper>
        <FooterImageWrapper>
          <img src={logoCrow2} alt="" />
        </FooterImageWrapper>

        <FooterLinksWrapper>
          <SpacedOneColumn>
            <h3>Section</h3>
            <div>
              <p>Item</p>
              <p>Item</p>
              <p>Item</p>
              <p>Item</p>
            </div>
          </SpacedOneColumn>
          <SpacedOneColumn>
            <h3>Section</h3>
            <div>
              <p>Item</p>
              <p>Item</p>
              <p>Item</p>
              <p>Item</p>
              <p>Item</p>
              <p>Item</p>
            </div>
          </SpacedOneColumn>
          <SpacedOneColumn>
            <h3>Section</h3>
            <div>
              <p>Item</p>
              <p>Item</p>
              <p>Item</p>
            </div>
          </SpacedOneColumn>
        </FooterLinksWrapper>
      </FooterContentWrapper>
    </StyledFooter>
  );
}
