import Image from "next/image";

export default function Scream ({image, title, description, clase}) {
    return (
        <>
            <div className={`mx-auto ${clase}`}>
                <div className="d-flex justify-content-center ali">
                    <div>
                        <Image className="image-slider" src={image} />
                    </div>
                </div>
                {clase === 'box-product_active' && (
                    <div className="box-product">
                        <p className="title-body">{title}</p>
                        <p className="description-scream">{description}</p>
                    </div>
                )}
            </div>
        </>
    );
}
