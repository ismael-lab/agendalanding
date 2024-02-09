import Image from "next/image";
import { useRouter } from "next/router";

export default function BoxTeamSlide ({title, image, clase}){

    const {push} = useRouter()

    const goTimes = () => {

        push('/times?selec=' + getFormatTitle(title))
    }

    const getFormatTitle = (text) => {
        return text.toLowerCase().replace(' ','-')
    }

    return(
        <>
        <div onClick={goTimes} className={`mx-auto box-team_slide ${clase}`}> {/*cuando este visible tiene el estilo: box-product_active */}
            <div className="box-product_content d-flex flex-column justify-content-center align-items-center gap-3 text-center">
                <Image src={image}></Image>
                <p className="title-6 font-faster">{title}</p>
            </div>
            <div className="box-product_bg"></div>
        </div>
        </>
    )
}