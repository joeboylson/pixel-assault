import PageWrapper from "../../layouts/PageWrapper";
import ShopItem from "./ShopItem";
import Modal from "../../components/Modal";
import { useAllProducts } from "../../hooks/useAllProducts";
import { StyledShop } from "./StyledComponents";
import { useNavigate, useParams } from "react-router-dom";
import { Pages } from "../../enums";
import { useShoppingCart } from "use-shopping-cart";
import { LayoutValues } from "../../enums/layout";
import PageMaxWithContainer from "../../layouts/PageMaxWidthContainer";

export function Shop() {
  const { loading, products } = useAllProducts();

  const params = useParams();
  const navigate = useNavigate();
  const { clearCart } = useShoppingCart();
  const { result } = params;

  const showPostPurchaseModal = result === "success";

  const handlePostPurchaseModalClose = () => {
    setTimeout(() => {
      navigate(Pages.SHOP);
      clearCart();
    }, LayoutValues.MODAL_TRANSITION_DURATION);
  };

  return (
    <PageWrapper>
      <PageMaxWithContainer>
        {loading && <p>loading...</p>}

        <StyledShop>
          {products &&
            products.map((product) => (
              <ShopItem key={product._id} product={product} />
            ))}
        </StyledShop>

        {showPostPurchaseModal && (
          <Modal headless handleOnClose={handlePostPurchaseModalClose}>
            <p>Thank you for your purchase!</p>
          </Modal>
        )}
      </PageMaxWithContainer>
    </PageWrapper>
  );
}
