import Link from "next/link";
import Image from "next/image";
import StepDesk from '../public/images/steps/steps-desk.svg';
import StepResponsive from '../public/images/steps/steps-responsive.svg';
import Button from "../components/buttons/button";

export default function Inscription () {
    return(
        <>
        <section className="container pb-5 mb-5 first-section">
            <div className="mt-3"><Link href={'/'}><p>&lt; Voltar</p></Link></div>

            <div className="section-inscription mx-auto">

                <p className="title-2 font-faster text-center"><span className='title-marked'>inscrição</span></p>

                <div className='mt-5'>
                    <p className="title-3 font-faster"><span className='title-marked'>Passo a passo</span> para se inscrever</p>

                    <Image src={StepDesk} alt="Passo a passo para se inscrever" className="img mb-3 show-desk"></Image>

                    <Image src={StepResponsive} alt="Passo a passo para se inscrever" className="img mb-3 show-responsive"></Image>

                    <p><span className="fw-bold">Importante:</span> Recomendamos a leitura das regras do programa antes de realizar sua inscrição</p>
                </div>

                <div className='mt-5'>
                    <p className="title-3 font-faster"><span className='title-marked'>Despesas</span></p>
                    <p>O Crea-SC viabilizará aos participantes sempre que esses forem convocados para fins de representação uma ajuda de custo para o despesas de hospedagem, alimentação e transporte da cidade de origem.</p>
                </div>

                <div className='mt-5'>
                    <p className="title-3 font-faster"><span className='title-marked'>Termos</span></p>

                    <p>Para solicitar a inscrição no Programa Jovem Engenheiro do Crea-SC é necessário ler e concordar com o <Link href={'/termos'} className="text-decoration-underline text-blue fw-bold">Termo de Uso e Política de Privacidade do Programa.</Link> 
                    <br></br> <br></br>
                    A participação no Programa Jovem Engenheiro do Crea-SC está condicionada ao aceite e à assinatura do <span className="fw-bold">Termo de Compromisso.</span></p>
                    <div className="mt-5">
                        <Button link={'https://creanet.crea-sc.org.br/login'} type='button-primary' text='Me inscrever'></Button>
                    </div>
                </div>
                
            </div>

        </section>
        </>
    )
}