import { useGetAllWikiItems } from "../../hooks/useGetAllWikiItems";
import { camelCaseToWords } from "../../types/string";
import { useNavigate } from "react-router-dom";
import { Pages } from "../../enums";
import { useToggle } from "../../hooks/useToggle";
import { DotOutline, List } from "@phosphor-icons/react";
import {
  MobileWikiMenuButton,
  SkeletonWikiSideBar,
  StyledWikiSideBar,
  WikiMenuButton,
  WikiSideBarSection,
} from "./StyledComponents";

export function WikiSideBar() {
  const navigate = useNavigate();

  const { loading, documentsByType } = useGetAllWikiItems();

  const {
    disable: closeWikiNav,
    enable: openWikiNav,
    value: wikiNavIsOpen,
  } = useToggle();

  const className = wikiNavIsOpen ? "wiki-nav-is-open" : "";

  const handleNav = (to: string) => {
    closeWikiNav();
    navigate(to);
  };

  return (
    <>
      <MobileWikiMenuButton onClick={openWikiNav}>
        Wiki Menu <List size={18} color="var(--themeAccent1)" />
      </MobileWikiMenuButton>
      <StyledWikiSideBar className={className}>
        {loading && <SkeletonWikiSideBar />}

        {documentsByType &&
          Object.entries(documentsByType).map(
            ([typeLabel, documentsOfType]) => {
              const sectionLabel = camelCaseToWords(typeLabel);

              return (
                <WikiSideBarSection key={`section-${typeLabel}`}>
                  <h3>{sectionLabel}</h3>

                  {documentsOfType.map((document) => {
                    if (!document.slug) return null;

                    const { _id, slug, name, title } = document;
                    const linkText = name ?? title;
                    const linkHref = `${Pages.WIKI}/${typeLabel}/${slug.current}`;
                    const _onClick = () => handleNav(linkHref);

                    return (
                      <WikiMenuButton onClick={_onClick} key={_id}>
                        <DotOutline size={16} color="var(--themeAccent1)" />
                        {linkText ?? `Unnamed ${sectionLabel}`}
                      </WikiMenuButton>
                    );
                  })}
                </WikiSideBarSection>
              );
            }
          )}

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          iure, delectus commodi porro tempore repellendus deleniti nihil
          suscipit ab aut voluptatum modi quisquam numquam similique eius
          eligendi eos omnis reprehenderit possimus quis reiciendis. Tempora
          odit adipisci recusandae, sunt sit exercitationem itaque repellendus,
          optio placeat eveniet minus earum tenetur, fuga numquam quis
          architecto sint labore mollitia. Dolore expedita voluptates fugit
          repudiandae atque earum cum laborum? Dolor aut aspernatur eum dolorum
          vitae incidunt aperiam! Officia, totam illum? Dolorem autem, amet
          dolor eius iusto aut. Inventore delectus voluptates qui nemo maxime
          odio ex quo sequi, suscipit aperiam assumenda modi magni, ipsum iusto
          asperiores sit harum labore dolor aut voluptatem ut reiciendis omnis!
          Quaerat, fugiat nesciunt provident debitis eligendi recusandae optio
          laboriosam quas veniam blanditiis aspernatur ipsum asperiores eos sunt
          vero incidunt adipisci, dolores quasi aperiam quidem. Vitae, nisi
          ipsa! Unde, dolorem quod! Eum aspernatur minima at rem suscipit
          deleniti totam molestiae, voluptate odio quia, harum accusantium,
          nulla sed delectus voluptatum eveniet nostrum. Excepturi esse, iusto
          aliquid illum possimus quos, autem aspernatur eius culpa suscipit
          nobis delectus recusandae et iste quidem sunt cumque ad ab at
          dignissimos vel. Eum quaerat odio magnam commodi soluta vero, itaque
          maxime a ut repudiandae ratione asperiores numquam enim laboriosam
          dolorum illum eius magni exercitationem eaque. Explicabo nobis
          perspiciatis non, odio nemo ut incidunt. Non, vero adipisci, dolor
          laudantium voluptates provident quae molestias ullam consequatur porro
          fuga, ad repudiandae. Quibusdam, dicta reprehenderit. Laboriosam
          corporis maxime sed, est sequi nesciunt assumenda itaque
          necessitatibus vero ad dicta veniam laborum optio doloremque modi
          facere voluptatum aliquid a! Laboriosam numquam, quas voluptatibus non
          aliquam magnam nemo quos ea sed, nam exercitationem corporis amet unde
          accusamus magni id veniam assumenda eos vel. Quisquam ipsum temporibus
          ullam distinctio quia optio harum magnam ex velit? Officia nihil unde
          excepturi neque laudantium doloribus tempore atque corrupti beatae.
          Quaerat error non veritatis eius quos facere iure, voluptatem sed
          nostrum nihil iusto deleniti, enim quasi. Repellendus minus quos
          recusandae, rerum deleniti tenetur quod reiciendis tempora dignissimos
          ullam inventore, debitis libero fugit quibusdam at, corporis quisquam
          labore dolore. Ipsa sunt aliquam magni quis necessitatibus corrupti
          placeat vero natus, recusandae rem quia eos in fugit voluptate quasi
          sequi? Hic velit sit pariatur, suscipit voluptatibus officia quasi
          quis iste est eos expedita, adipisci, ullam illum. Culpa autem
          delectus fugit aperiam nemo! Ab, eveniet doloribus ea autem,
          consequuntur optio soluta inventore nulla aliquam corporis debitis
          eaque magni sed suscipit ratione quod, quis voluptate. Alias aperiam
          atque sed delectus explicabo nostrum labore esse, eum error a fugit,
          eaque nihil! Itaque, totam ipsum ex delectus modi praesentium! Autem a
          id non nam, iusto earum fugit nulla at, eos tempore, quas expedita
          tenetur provident libero voluptatibus exercitationem optio dolor magni
          nobis suscipit iure. Provident atque aliquid dolorem eligendi
          quibusdam itaque esse at reiciendis, veniam placeat perferendis porro
          velit distinctio eaque? Repudiandae molestias id quod error sapiente
          dicta fugiat adipisci illo nam doloremque harum quam est pariatur ad
          totam, maxime aliquid autem nihil atque dolor minus quo omnis
          assumenda cum! Praesentium iusto unde nihil deserunt! Similique
          praesentium ea dolore quam autem incidunt, optio dolores cumque cum
          consequuntur delectus quas exercitationem facere odio, animi quia non
          ipsam repellendus facilis? Distinctio iure maxime, natus ipsam
          veritatis iusto ad nisi dignissimos est pariatur, error nihil rem, aut
          odio ipsa nobis odit quas id minima aliquid dicta quasi dolores esse.
          Laborum minus aspernatur iusto eveniet aliquam non omnis fuga illum
          ducimus tempora nihil exercitationem deleniti, quae eaque repellendus
          quisquam architecto nobis facere. Quidem, ducimus. At provident sint
          deleniti nostrum temporibus quam. Magni optio ex nesciunt quam
          delectus temporibus dolorem harum voluptates nemo ipsam doloremque
          quas perspiciatis error dicta, vel blanditiis ducimus architecto enim
          a esse numquam magnam rem dolor ab? Quod eos, voluptatum maxime dolore
          eius, fugiat asperiores quaerat sit maiores vel nesciunt aut vitae eum
          a nemo praesentium molestiae illum illo laudantium non id ipsam
          tempora. Facere aspernatur sit delectus est eaque in dolores quo
          expedita laborum ipsa, accusantium perferendis possimus atque, quas
          exercitationem magnam consectetur eligendi sunt dignissimos harum
          voluptas nostrum eos blanditiis. Autem, animi doloremque natus porro
          accusantium asperiores. Labore doloremque perferendis asperiores,
          tempore assumenda laudantium. Praesentium modi quod corporis expedita
          accusamus dignissimos. Excepturi cupiditate magni culpa sapiente
          vitae? Nesciunt sapiente veniam numquam accusantium! Commodi saepe
          atque veniam accusantium sunt laborum delectus magni! Autem quaerat
          tempora explicabo saepe quas ipsum sequi non dolorem. Possimus beatae
          corrupti tempore porro exercitationem quidem amet alias laborum sint.
          Dolorem nam praesentium error, soluta amet nemo fugit deserunt atque
          odio repudiandae vero perspiciatis magni, neque nostrum blanditiis
          iusto aut? Expedita dolor voluptas inventore nam commodi vel ratione
          praesentium libero minus, in quibusdam iste dignissimos sit maxime
          vero earum, quasi ex! Eaque mollitia illum, ea iure dignissimos id? In
          vitae nulla eligendi. Perspiciatis labore harum magnam ex eveniet
          voluptate repudiandae illum quod repellendus sit! Reprehenderit,
          minima sunt? Error nihil veniam tempore quos facilis dolorem harum,
          quaerat rem! Rerum quam adipisci, vero nobis accusamus quia tempora
          facilis eius mollitia maxime, quos, accusantium reprehenderit veniam
          assumenda deserunt dolorem! Pariatur reiciendis nulla eius maxime nam
          recusandae voluptatibus voluptatum tenetur explicabo. Doloribus
          facilis numquam aliquid commodi doloremque deserunt quidem perferendis
          ratione excepturi totam recusandae debitis voluptatem voluptatibus
          fuga iste inventore nostrum repellat, nihil eaque eius? Voluptate
          mollitia qui ipsum odio iure quo non quam doloremque nobis, illum
          iusto numquam molestiae animi quasi praesentium, optio itaque rerum
          incidunt nihil ea quis! Dicta libero iure, provident harum facilis
          repellat aut in officia, molestias enim facere blanditiis esse
          doloribus nobis dolor repudiandae non reiciendis fugit! Magnam magni,
          placeat in tenetur quas eveniet, eos asperiores fugit omnis suscipit
          fuga minus alias accusamus aliquam, incidunt sequi odio animi laborum
          quia reprehenderit sint quam quisquam. Vero similique, natus
          aspernatur autem placeat accusantium molestiae sequi veritatis
          dignissimos eveniet illum minus repellat, praesentium quis minima
          blanditiis iusto tempore consequatur explicabo illo nisi quos dicta
          esse maiores! Nemo architecto nihil expedita non quae voluptates vitae
          quos perferendis, iure consequuntur similique laboriosam officiis
          autem necessitatibus! Eum, fugit? Provident alias eaque repudiandae
          nisi, natus omnis cum perspiciatis ipsum quidem, voluptatum
          perferendis sequi incidunt molestias illum consequatur quas maiores
          recusandae?
        </p>
      </StyledWikiSideBar>
    </>
  );
}
