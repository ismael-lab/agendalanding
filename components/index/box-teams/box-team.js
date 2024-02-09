import Image from "next/image";
import Button from "../../buttons/button";

export default function BoxTeam ({icon, title, description, link}){
    return(
        <>
        <div className="box-team-bg col align-self-stretch d-grid align-content-between">
            <div>
                <div className="d-flex gap-2 justify-content-start align-items-start">
                    <Image src={icon} alt='icon'></Image>
                    <p className="title-4 font-faster">{title}</p>
                </div>
                <p>{description}</p>
            </div>
            <Button link={link} type='button-secondary' text='Saiba mais'></Button>
        </div>
        </>
    )
}