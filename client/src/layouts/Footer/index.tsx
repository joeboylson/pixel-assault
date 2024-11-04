import styled from "styled-components";
import SpacedOneColumn from "../../components/SpacedOneColumn";

const StyledFooter = styled.footer`
  padding: 72px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const FooterContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;

const FooterImageWrapper = styled.div`
  width: 300px;
`;

const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-left: auto;
`;

export default function Footer() {
  return (
    <StyledFooter data-id="StyledFooter">
      <FooterContentWrapper>
        <FooterImageWrapper>
          <img src="https://placehold.co/500x100" alt="" />
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
