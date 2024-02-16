import Image from "next/image";
import Slider from "../components/index/slider/Slider";
import SliderFlex from "../components/index/slider/Slider-flex";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../components/buttons/button";
import BoxTeam from "../components/index/box-teams/box-team";
import Logo from '../public/images/logos/Logo_purple.svg'
import usabilidade1 from "../public/images/index/usabilidade_1.svg";
import Team2 from "../public/images/index/usabilidade_2.svg";
import Team3 from "../public/images/index/usabilidade_3.svg";
import Team4 from "../public/images/index/usabilidade_4.svg";
import LogoEmpresa1 from "../public/images/logos/Windows_10_Logo.png";
import LogoEmpresa2 from "../public/images/logos/Amazon_logo.png";
import LogoEmpresa3 from "../public/images/logos/Coca-Cola_logo.png";
import LogoEmpresa4 from "../public/images/logos/FedEx_Express.png";
import LogoEmpresa5 from "../public/images/logos/Google_2015_logo.png";
import LogoEmpresa6 from "../public/images/logos/Spotify_logo.png";
import Team5 from "../public/images/MacBook.png";
import Team6 from "../public/images/teams/aspas.svg";
import BoxProduct from "../components/products/box-product";
import LogoSebrae from "../public/images/img1.png";
import LogoCredcrea from "../public/images/teams/aspas.svg";
import LogoAcate from "../public/images/logos/acate.png";
import LogosSlide from "../public/images/brand/logos-slide.svg";
import axios from "axios";
import check from "../public/images/check.png";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home() {
  const [modal, setModal] = useState();

  useEffect(() => {
    const { Modal } = require("bootstrap");

    setModal(new Modal("#mailModal"));
  }, []);

  const sendFormEmail = (e) => {
    e.preventDefault();

    let spinner = document.getElementById("spinner-form");
    let check = document.getElementById("check-form");
    let text = document.getElementById("text-form");

    text.style.display = "none";
    spinner.style.display = "block";

    let subject = document.getElementById("subject").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let data = { subject, email, message };

    axios
      .post("/api/email", data)
      .then((res) => {
        console.log("send");
        spinner.style.display = "none";
        check.style.display = "block";

        setTimeout(() => {
          check.style.display = "none";
          text.style.display = "block";
          modal.hide();
        }, 500);
      })
      .catch((e) => console.log(e));
  };

  const closeModal = () => {
    modal.hide();
  };
  
  return (
    <>
      <div className="container-banner">
        <div><p className="header1">Para reservar espaços</p>
         <p className="text-white subtitle-header">
            Do {" "}
            <span className="text-marked">
                vago
            </span>{" "}
            ao{" "}
            <span className="text-marked">
                ocupado
            </span>{" "} 
            em um clique: agende conosco!
         </p>
        </div>
      </div>

      <section className="container py-3 my-5">
        <div className="d-flex flex-column-reverse flex-md-row gap-5 align-items-center h-100">
          <div className="w-100">
            <div>
            <p className="subtitle">
            Por que reservar no <span><Image src={Logo} className='logo'></Image></span> ?
            </p>
            
            </div>
            <p>O Tahvago foi projetado para proporcionar uma experiência intuitiva e eficiente no agendamento de espaços. 
              Com um design amigável e funcionalidades acessíveis, o processo de reserva é simplificado, permitindo que os 
              usuários reservem facilmente espaços que atendam às suas necessidades. 
              </p>
              <p>A ferramenta oferece flexibilidade, permitindo ajustes de detalhes como horário, número de convidados e 
              visualização detalhada do espaço. Isso garante uma experiência de reserva adaptada às necessidades individuais de cada usuário.</p>
          </div>
          <div className="w-100 d-flex align-items-center flex-column">
          <Image src={LogoSebrae} alt="Sebrae" ></Image>
          </div>
        </div>
      </section>

      <section className="container py-3 my-5">
        <div >
          <p className="subtitle">
            Por que reservar no <span><Image src={Logo} className='logo'></Image></span> ?
          </p>
          <table className="py-5 justify-content-center title-table">
            <tr>
              <th><Image src={usabilidade1} className='Logo'></Image></th>
              <th><Image src={Team2} className='Logo'></Image> </th>
              <th><Image src={Team3} className='Logo'></Image></th>
              <th><Image src={Team4} className='Logo'></Image> </th>
            </tr>
            <tr>
              <th><p className="title-body">Cadastre-se</p></th>
              <th><p className="title-body">Procure</p></th>
              <th><p className="title-body">Faça a reserva</p></th>
              <th><p className="title-body">Tudo pronto</p></th>
            </tr>
            <tr>
              <th><p>na plataforma e selecione as empresas que quer reservar</p></th>
              <th><p>o espaço que mais se adequa a seus interesses</p></th>
              <th><p>e vá ao espaço na data selecionada previamente</p></th>
              <th><p>agora você pode utilizar o espaço sem preocupações</p></th>
            </tr>
          </table>
        </div>
      </section>

      <section className="py-5 my-5 section-cta section-cta_image">
      <div className="d-flex flex-column-reverse flex-md-row gap-5 align-items-center h-100">
          <div className="w-100 d-flex flex-column">
            <div>
            <p className="subtitle-white">
            Funcionalidades para você
            </p>
            </div>
            <div>
            <p>O Tahvago foi projetado para proporcionar uma experiência intuitiva e eficiente no agendamento de espaços. 
              Com um design amigável e funcionalidades acessíveis, o processo de reserva é simplificado, permitindo que os 
              usuários reservem facilmente espaços que atendam às suas necessidades. 
              </p>
              <p>A ferramenta oferece flexibilidade, permitindo ajustes de detalhes como horário, número de convidados e 
              visualização detalhada do espaço. Isso garante uma experiência de reserva adaptada às necessidades individuais de cada usuário.</p>
              </div>
          </div>
          <div className="w-100 d-flex align-items-end flex-column">
          <Image src={Team5} alt="Sebrae" ></Image>
          </div>
        </div>
      </section>

      

      <section className="py-5 section-teams">
        <div className="container section-teams_content mb-4 mb-md-0">
          <div className="d-md-flex gap-5 justify-content-center">
            <p className="subtitle">
              Nossos Clientes
            </p>
          </div>

          <div className="show-desk">
            <div className="d-grid gap-2 py-5 justify-content-center">
              <div className="row gap-2">
                <BoxTeam
                  icon={LogoCredcrea}
                  Comment="O Tahvago revolucionou a maneira como gerencio meu tempo e espaço de trabalho. 
                  Agora, posso planejar minha semana de forma eficiente, reservando salas de reunião ou espaços de coworking conforme minha necessidade. 
                  A praticidade e a flexibilidade oferecidas são incomparáveis."
                  autor="Luciana Pereira Munhoz"
                  link={"/times?selec=capacitação"}
                ></BoxTeam>
                <BoxTeam
                  icon={LogoCredcrea}
                  Comment="Eu nunca soube que agendar espaços de trabalho poderia ser tão fácil! Agora, posso reservar salas de reunião ou espaços de trabalho com apenas alguns cliques. 
                  A interface intuitiva e a variedade de opções disponíveis são impressionantes. Recomendo a todos que buscam praticidade no gerenciamento de seus espaços de trabalho!"
                  autor="Andréia Moura Nascimento"
                  link={"/times?selec=empreendedorismo-e%20emprego"}
                ></BoxTeam>
                <BoxTeam
                  icon={LogoCredcrea}
                  Comment="Desde que comecei a usar esta ferramenta de agendamento para espaços de trabalho, minha produtividade decolou! Agora, consigo reservar uma sala tranquila 
                  sempre que preciso me concentrar em um projeto importante. A facilidade de uso e a eficiência do sistema são incríveis. Não sei como consegui viver sem isso antes. 
                  Altamente recomendado!"
                  autor="Artur Saraiva Marins"
                  link={
                    "/times?selec=legislação-e%20valorização%20profissional"
                  }
                ></BoxTeam>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 section-teams">
        <div className="container section-teams_content mb-4 mb-md-0">
          <div className="d-md-flex gap-5 justify-content-center">
            <p className="subtitle">
              Empresas que possuem espaços cadastrados
            </p>
          </div>
          <div className="row py-5">
            <div class="col-sm justify-content-center"><Image src={LogoEmpresa1} className='Logo'></Image></div>
            <div class="col-sm justify-content-center"><Image src={LogoEmpresa2} className='Logo'></Image></div>
            <div class="col-sm justify-content-center"><Image src={LogoEmpresa3} className='Logo'></Image></div>
            <div class="col-sm justify-content-center"><Image src={LogoEmpresa4} className='Logo'></Image></div>
            <div class="col-sm justify-content-center"><Image src={LogoEmpresa5} className='Logo'></Image></div>
            <div class="col-sm justify-content-center"><Image src={LogoEmpresa6} className='Logo'></Image></div> 
          </div>
                    
        </div>
      </section>


      <section className="section-teams_header ">
        <div className="justify-content-center align-items-center">
          <p className="subtitle-white">Faça seu cadastro agora e </p>
          <p className="subtitle-white">começe a utilizar os espaços!</p>
          
          <div className="d-flex justify-content-center mt-4">
          <button>Cadastre-se</button>
          </div>
        </div>
      </section>

      <section className="section-products mx-auto" id="produtos">
        <div
          class="modal fade"
          id="mailModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="mailModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="mailModalTitle">
                  Enviar um email
                </h5>
                <button
                  style={{ border: "none", backgroundColor: "white" }}
                  onClick={closeModal}
                  type="button"
                  class="close"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form id="form-email-form">
                  <div class="form-email-box">
                    <div
                      style={{ marginTop: "0px" }}
                      class="form-group form-email"
                    >
                      <label for="subject">Assunto</label>
                      <input
                        required
                        type="text"
                        class="form-control"
                        id="subject"
                        placeholder="Saiba mais: SEBRAE-SC"
                      />
                    </div>

                    <div class="form-group form-email">
                      <label for="message">Mensagem</label>
                      <textarea
                        required
                        type="text"
                        class="form-control"
                        id="message"
                        placeholder="Olá, gostaria de saber mais sobre o produto SEBRAE-SC."
                      >
                        Olá, gostaria de saber mais sobre o produto SEBRAE-SC.
                      </textarea>
                    </div>

                    <div class="form-group form-email">
                      <label for="email">Seu email</label>
                      <input
                        required
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Seu email"
                      />
                    </div>

                    <div class="form-group form-email">
                      <button
                        data-dismiss="modal"
                        type="submit"
                        class="btn btn-primary d-flex justify-content-center"
                      >
                        <span id="text-form">Enviar email</span>
                        <div
                          id="spinner-form"
                          style={{
                            display: "none",
                            width: "24px",
                            height: "24px",
                          }}
                          class="spinner-border"
                          role="status"
                        ></div>
                        <div id="check-form" style={{ display: "none" }}>
                          <Image src={check} width={16} height={16} />
                        </div>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <SliderFlex clase="section-products_slide slide">
          <SwiperSlide>
            {({ isActive }) => (
              <BoxProduct
                title="Sebrae-sc"
                description="Plano de negócios totalmente digital. São 14 ferramentas para você utilizar on-line de maneira modular ou integrada."
                link={"#"}
                clase={isActive ? "box-product_active" : "box-product"}
                modal={modal}
                mail={true}
                mailHandle={sendFormEmail}
              ></BoxProduct>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {({ isActive }) => (
              <BoxProduct
                title="Simulador de Carreira"
                description="Descrição do que é o produto/serviço, Descrição do que é o produto/serviço."
                link={"#"}
                clase={isActive ? "box-product_active" : "box-product"}
              ></BoxProduct>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {({ isActive }) => (
              <BoxProduct
                title="UNICREA Trilha Jovem"
                description="Para transformar sua carreia para desenvolver competências mais buscadas no mercado de trabalho."
                link={"https://unicrea.crea-sc.org.br/"}
                clase={isActive ? "box-product_active" : "box-product"}
              ></BoxProduct>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {({ isActive }) => (
              <BoxProduct
                title="CRED CREA Jovem"
                description="Vantagens exclusivas na Cooperativa CREDCREA."
                link={"#"}
                clase={isActive ? "box-product_active" : "box-product"}
              ></BoxProduct>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {({ isActive }) => (
              <BoxProduct
                title="Crea hub"
                description="Espaços colaborativos do CREA-SC, onde a criatividade e o empreendedorismo se encontram para impulsionar a inovação. "
                link={"https://inovacao.crea-sc.org.br/coworking-creasc"}
                clase={isActive ? "box-product_active" : "box-product"}
              ></BoxProduct>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {({ isActive }) => (
              <BoxProduct
                title="Balcão de Oportunidades"
                description="Conecte-se com oportunidades, disponibilize seu currículo e acompanhe as vagas ofertadas."
                link={
                  " https://portal.crea-sc.org.br/servicos/bolsa-de-empregos/"
                }
                clase={isActive ? "box-product_active" : "box-product"}
              ></BoxProduct>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {({ isActive }) => (
              <BoxProduct
                title=" Unimed"
                description="Plano de saúde com abrangência nacional para você e seus dependentes."
                link={
                  "https://portal.crea-sc.org.br/divulgacao/convenios/contrato-unimed/adesao-de-usuario-titular-profissional-registrado-ou-academico-do-crea-jr/"
                }
                clase={isActive ? "box-product_active" : "box-product"}
              ></BoxProduct>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {({ isActive }) => (
              <BoxProduct
                title="ABNT"
                description="Acesse seu CREANET e consulte as Normas Técnicas da ABNT gratuitamente. "
                link={"https://creanet.crea-sc.org.br/"}
                clase={isActive ? "box-product_active" : "box-product"}
              ></BoxProduct>
            )}
          </SwiperSlide>
        </SliderFlex>
      </section>

      <section className="container pb-5 my-5">
        <div className="">
          <p className="title-3 font-faster text-center mb-5">Parceria</p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-5 align-items-center">
            <Image src={LogoSebrae} alt="Sebrae" className="img-logo"></Image>
            <Image
              src={LogoCredcrea}
              alt="Credcrea"
              className="img-logo"
            ></Image>
            <Image src={LogoAcate} alt="Acate" className="img-logo"></Image>
          </div>
        </div>
      </section>
    </>
  );
}
