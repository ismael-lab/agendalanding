import Button from "../buttons/button";


export default function BoxProduct ({title, description, link, clase,mail,mailHandle,modal}){


    const sendEmail = () => {

       let form = document.getElementById("form-email-form")

       form.addEventListener('submit',mailHandle)

       let subject = document.getElementById("subject")

       subject.defaultValue = "Saiba mais: SEBRAE-SC"

       modal.show()
    }
    
    

    return(
        <>
        <div className={`mx-auto ${clase}`}> {/*cuando este visible tiene el estilo: box-product_active */}
            <div className="box-product_content">
                <div className="">
                    <p className="title-4 font-faster">{title}</p>
                </div>
                <p>{description}</p>
            
                

                {mail 
                ? <div className="box-product_button">
                    <a className="button button-primary">
                        <button className="" onClick = {sendEmail} ><p>Saiba mais</p></button>
                    </a>
                </div> 
                : <div className="box-product_button">
                   <Button link={link} type='button-primary' text='Saiba mais'></Button>
                </div>}
            </div>
            <div className="box-product_bg"></div>
        </div>
        </>
    )
}