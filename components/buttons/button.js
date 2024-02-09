import Link from "next/link"

export default function Button({link, type, evento, text,secondSize}){
    return(
        <>
        <Link href={link} target="blank" className={`button ${type}`}>
            <button onClick={evento}>
                <p style={(secondSize) ? {fontSize:'14px'} : {}}>{text}</p>
            </button>
        </Link>
        </>
    )
}