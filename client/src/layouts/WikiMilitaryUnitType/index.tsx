import SpacedOneColumn from "../../components/SpacedOneColumn";
import { MilitaryUnitType } from "../../types/sanity.types";
import { WikiPageProps } from "../../types/wiki";

export default function WikiMilitaryUnitType({ document }: WikiPageProps) {
  const militaryUnitType = (document as MilitaryUnitType) ?? null;

  const { name } = militaryUnitType;

  return (
    <SpacedOneColumn>
      <h2>{name}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ab
        dignissimos sapiente animi quam! Eius consequuntur est laborum.
        Reiciendis impedit commodi inventore doloribus exercitationem? Sapiente
        error, esse et sit incidunt quo totam tenetur necessitatibus ea
        veritatis repellendus aliquid, praesentium deleniti velit iure nihil
        sint a. Nulla, ut quibusdam officia rem animi incidunt fugiat at unde.
        Est assumenda velit consectetur, maiores quam excepturi maxime, nemo
        quo, sit ex molestias odio necessitatibus aliquid magni officia aut sint
        quidem quaerat praesentium tempore similique vero repudiandae voluptatum
        facilis. Accusantium, tenetur? Possimus, assumenda? Commodi iure saepe
        tempore, natus aut sequi! Quod aliquid deserunt nemo aliquam.
      </p>
    </SpacedOneColumn>
  );
}
