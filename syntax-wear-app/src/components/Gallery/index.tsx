import galeriaHomem from "../../assets/images/galeria-homem.jpg";
import galeriaModelo from "../../assets/images/galeria-modelo.jpg";
import galeriaTenisBrancoPreto from "../../assets/images/galeria-tenis-branco-e-preto.jpg";
import galeriaTenisCinza from "../../assets/images/galeria-tenis-cinza.jpg";
import galeriaTenisColorido from "../../assets/images/galeria-tenis-colorido.jpg";
import galeriaTenisRoxo from "../../assets/images/galeria-tenis-roxo.jpg";
import styles from "./Gallery.module.css";

export const Gallery = () => {
    return (
        <section className="container">
            <div className={`${styles.galleryGrid} grid`}>
                <div className={`${styles.galleryHighlight} relative rounded-[20px] overflow-hidden`}>
                    <img
                        src={galeriaHomem}
                        alt="Modelo masculino"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute left-6 bottom-6 flex flex-col gap-3 text-white">
                        <span className="text-sm font-medium uppercase tracking-[0.3em]">
                            Krypton One
                        </span>
                        <strong className="text-2xl md:text-3xl leading-tight">
                            Estilo urbano com atitude
                        </strong>
                        <div className="flex gap-3">
                            <button className="rounded-full border border-white/80 px-5 py-2 text-sm text-white">
                                Feminino
                            </button>
                            <button className="rounded-full border border-white/80 px-5 py-2 text-sm text-white">
                                Masculino
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`${styles.gallerySneakerPurple} gallery-item rounded-[20px] overflow-hidden`}>
                    <img
                        src={galeriaTenisRoxo}
                        alt="Tênis roxo"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className={`${styles.galleryModel} gallery-item rounded-[20px] overflow-hidden`}>
                    <img
                        src={galeriaModelo}
                        alt="Modelo feminina"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className={`${styles.gallerySneakerColor} gallery-item rounded-[20px] overflow-hidden`}>
                    <img
                        src={galeriaTenisColorido}
                        alt="Tênis colorido"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className={`${styles.gallerySneakerWhite} gallery-item rounded-[20px] overflow-hidden`}>
                    <img
                        src={galeriaTenisBrancoPreto}
                        alt="Tênis branco e preto"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className={`${styles.gallerySneakerSilver} gallery-item rounded-[20px] overflow-hidden`}>
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