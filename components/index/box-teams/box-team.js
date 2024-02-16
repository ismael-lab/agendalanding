import Image from "next/image";
import Button from "../../buttons/button";

export default function BoxTeam ({icon, Comment, autor}){
    return(
        <>
        <div className="box-team-bg col align-self-stretch d-grid align-content-between">
        <div className="d-flex">
        <div>
            <div className="d-flex gap-2 justify-content-center align-items-start mx-2 ">
                <Image src={icon} alt='icon'></Image>
            </div>
        </div>
        <div>
            <p className="text-comment">{Comment}</p>
            <p className="text-autor">{autor}</p>
        </div>
    </div>
</div>

        </>
    )
}