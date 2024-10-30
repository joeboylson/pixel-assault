import { useEffect } from "react";
import Carousel from "../../components/Carousel";
import { useThemeContext } from "../../context/ThemeContext";
import PageMaxWithContainer from "../../layouts/PageMaxWidthContainer";
import PageWrapper from "../../layouts/PageWrapper";

export function Home() {
  const { useDefaultTheme } = useThemeContext();
  useEffect(useDefaultTheme, [useDefaultTheme]);

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
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit odio,
            modi quod ratione quae repudiandae in quisquam quidem eos ab?
          </p>
        </div>
      </PageMaxWithContainer>
    </PageWrapper>
  );
}
