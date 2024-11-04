import OffsetTwoColumn from "../../components/OffsetTwoColumn";
import SpacedOneColumn from "../../components/SpacedOneColumn";

export default function WikiWelcomePage() {
  return (
    <SpacedOneColumn extraSpacing>
      <h2>Welcome to the Pixel Assault Wiki</h2>

      {/*  */}
      <OffsetTwoColumn direction="left">
        <img src="https://placehold.co/500" alt="" />
        <SpacedOneColumn>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            quisquam! Ullam sint quos porro possimus voluptate voluptatibus quo
            earum beatae consectetur quam pariatur culpa veritatis, accusantium,
            reprehenderit, dolor atque. Corrupti, assumenda dignissimos.
          </p>
        </SpacedOneColumn>
      </OffsetTwoColumn>

      {/*  */}
      <OffsetTwoColumn direction="right">
        <SpacedOneColumn>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            quisquam! Ullam sint quos porro possimus voluptate voluptatibus quo
            earum beatae consectetur quam pariatur culpa veritatis, accusantium,
            reprehenderit, dolor atque. Corrupti, assumenda dignissimos.
          </p>
        </SpacedOneColumn>
        <img src="https://placehold.co/500" alt="" />
      </OffsetTwoColumn>

      {/*  */}
      <OffsetTwoColumn direction="left">
        <img src="https://placehold.co/500" alt="" />
        <SpacedOneColumn>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            quisquam! Ullam sint quos porro possimus voluptate voluptatibus quo
            earum beatae consectetur quam pariatur culpa veritatis, accusantium,
            reprehenderit, dolor atque. Corrupti, assumenda dignissimos.
          </p>
        </SpacedOneColumn>
      </OffsetTwoColumn>
    </SpacedOneColumn>
  );
}
