import Carousel from "../../components/Carousel";
import { usePageTransitionContext } from "../../context/PageTransition";
import PageMaxWithContainer from "../../layouts/PageMaxWidthContainer";
import PageWrapper from "../../layouts/PageWrapper";
import { getTheme } from "../../theme";

export function Home() {
  const { doDefaultTransition } = usePageTransitionContext();

  return (
    <PageWrapper>
      <Carousel>
        <div style={{ padding: "100px" }}>
          <h1>111111111111111</h1>
        </div>
        <div style={{ padding: "100px" }}>
          <h1>222222222222222</h1>
        </div>
        <div style={{ padding: "100px" }}>
          <h1>333333333333333</h1>
        </div>
        <div style={{ padding: "100px" }}>
          <h1>444444444444444</h1>
        </div>
        <div style={{ padding: "100px" }}>
          <h1>555555555555555</h1>
        </div>
      </Carousel>

      <PageMaxWithContainer>
        <h1>Home</h1>
        <button onClick={doDefaultTransition}>TEST</button>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit odio,
            modi quod ratione quae repudiandae in quisquam quidem eos ab?
          </p>
          <h1 style={{ color: getTheme().ACCENT_1 }}>Accent Color 1</h1>
          <h1 style={{ color: getTheme().ACCENT_2 }}>Accent Color 2</h1>
        </div>
      </PageMaxWithContainer>
    </PageWrapper>
  );
}
