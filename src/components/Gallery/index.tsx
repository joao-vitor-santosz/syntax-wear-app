import { useRouter } from "@tanstack/react-router";
import galeriaHomem from "../../assets/images/galeria-homem.jpg";
import galeriaModelo from "../../assets/images/galeria-modelo.jpg";
import galeriaTenisBrancoPreto from "../../assets/images/galeria-tenis-branco-e-preto.jpg";
import galeriaTenisCinza from "../../assets/images/galeria-tenis-cinza.jpg";
import galeriaTenisColorido from "../../assets/images/galeria-tenis-colorido.jpg";
import galeriaTenisRoxo from "../../assets/images/galeria-tenis-roxo.jpg";
import { Button } from "../Button";
import { Overlay } from "../Overlay";
import styles from "./Gallery.module.css";

export const Gallery = () => {
  const router = useRouter();

  return (
    <section className="container">
      <div className={`${styles.galleryGrid} grid`}>
        <div
          className={`${styles.galleryHighlight} relative rounded-[20px] overflow-hidden`}
        >
          <img
            src={galeriaHomem}
            alt="Modelo masculino"
            className="w-full h-full object-cover"
          />
          <Overlay
            title="Kripton One"
            subtitle="Estilo urbano com atitude"
            className="inset-0 justify-center "
          >
            <Button
              variant="secondary"
              onClick={() =>
                router.navigate({
                  to: "/products/category/$category",
                  params: { category: "feminino" },
                })
              }
            >
              Feminino
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                router.navigate({
                  to: "/products/category/$category",
                  params: { category: "masculino" },
                })
              }
            >
              Masculino
            </Button>
          </Overlay>
        </div>
        <div
          className={`${styles.gallerySneakerPurple} gallery-item rounded-[20px] overflow-hidden`}
        >
          <img
            src={galeriaTenisRoxo}
            alt="Tênis roxo"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`${styles.galleryModel} gallery-item rounded-[20px] overflow-hidden`}
        >
          <img
            src={galeriaModelo}
            alt="Modelo feminina"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`${styles.gallerySneakerColor} gallery-item rounded-[20px] overflow-hidden`}
        >
          <img
            src={galeriaTenisColorido}
            alt="Tênis colorido"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`${styles.gallerySneakerWhite} gallery-item rounded-[20px] overflow-hidden`}
        >
          <img
            src={galeriaTenisBrancoPreto}
            alt="Tênis branco e preto"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`${styles.gallerySneakerSilver} gallery-item rounded-[20px] overflow-hidden`}
        >
          <img
            src={galeriaTenisCinza}
            alt="Tênis cinza"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
