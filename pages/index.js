import Image from "next/image";
import Slider from "../components/index/slider/Slider";
import SliderFlex from "../components/index/slider/Slider-flex";
import { Swiper, SwiperSlide } from "swiper/react";
import CreaLight from "../public/images/brand/creajovem-light-color-green.svg";
import LogoCreaEntregando from "../public/images/brand/crea-estregando-valor-light.svg";
import LogoCreaEntregandoDark from "../public/images/brand/crea-estregando-valor-dark.svg";
import Button from "../components/buttons/button";
import BoxTeam from "../components/index/box-teams/box-team";
import Team1 from "../public/images/teams/capacitacao.svg";
import Team2 from "../public/images/teams/empreendedorismo.svg";
import Team3 from "../public/images/teams/legislacao.svg";
import Team4 from "../public/images/teams/inovacao.svg";
import Team5 from "../public/images/teams/entidades.svg";
import Team6 from "../public/images/teams/apoio.svg";
import BoxProduct from "../components/products/box-product";
import LogoSebrae from "../public/images/logos/sebrae.svg";
import LogoCredcrea from "../public/images/logos/credcrea.png";
import LogoAcate from "../public/images/logos/acate.png";
import LogoInova from "../public/images/brand/inovacrea.svg";
import LogoCrea from "../public/images/brand/crea.svg";
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
      <Slider clase="slider-header first-section">
        <SwiperSlide>
          <section className="slide slide1 d-flex align-items-center">
            <div className="container">
              <div className="slide-content d-grid align-items-end gap-5 gap-md-0 text-responsive">
                <div className="mb-5">
                  <Image
                    src={CreaLight}
                    className="slide-img_creajoven mb-3"
                    alt="Crea Jovem"
                  ></Image>
                  <p className="font-mont display-5 fw-bold text-white mb-3">
                    Oportunidades que impulsionam carreiras!
                  </p>

                  <div>
                    <Image
                      src={LogosSlide}
                      className="slide-img_logos mb-5 mb-md-0"
                    ></Image>
                  </div>
                </div>
                <div className="mt-5 mt-md-0">
                  <Button
                    type="button-primary"
                    link={"/times"}
                    text="Conheça nossos times AAAAAAAAAAA"
                  ></Button>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="slide slide2 d-flex align-items-center">
            <div className="container">
              <div className="slide-content d-grid align-items-end gap-5 gap-md-0 text-responsive">
                <div className="mb-5">
                  <p className="font-mont display-5 fw-bold text-white mb-3">
                    Produtos e serviços
                  </p>
                  <p className="subtitle text-white">
                    Oportunidades para impulsionar sua carreira e criar
                    conexões.
                  </p>
                  <div>
                    <Image
                      src={LogosSlide}
                      className="slide-img_logos mb-5 mb-md-0"
                    ></Image>
                  </div>
                </div>
                <div className="mt-5 mt-md-0">
                  <Button
                    type="button-primary"
                    link={"/#produtos"}
                    text="Conheça nossos produtos"
                  ></Button>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="slide slide3 d-flex align-items-center">
            <div className="container">
              <div className="slide-content d-grid align-items-end gap-5 gap-md-0 text-responsive">
                <div className="mb-5">
                  <p className="font-mont display-5 fw-bold text-white mb-3">
                    Times e áreas
                  </p>
                  <p className="subtitle text-white">
                    Oportunidades para impulsionar sua carreira e criar
                    conexões.
                  </p>
                  <div>
                    <Image
                      src={LogosSlide}
                      className="slide-img_logos mb-5 mb-md-0"
                    ></Image>
                  </div>
                </div>
                <div className="mt-5 mt-md-0">
                  <Button
                    type="button-primary"
                    link={"/times"}
                    text="Conheça nossos times"
                  ></Button>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="slide slide4 d-flex align-items-center">
            <div className="container">
              <div className="slide-content d-grid align-items-end gap-5 gap-md-0 text-responsive"></div>
            </div>
          </section>
        </SwiperSlide>
      </Slider>

      <section className="container py-3 my-5 about-program">
        <div className="d-flex flex-column-reverse flex-md-row gap-5 justify-content-center align-items-center h-100">
          <div className="w-100">
            <video src={"/video/creasc.mp4"} className="video" controls></video>
          </div>
          <div className="w-100">
            <p className="title-2 font-faster_italic">
              <span className="title-marked">Programa</span> CREA Jovem-sc
            </p>
            <p>
              O Programa CREA JOVEM-SC tem o objetivo de implementar em âmbito
              estadual ações direcionadas a capacitação dos profissionais
              recém-graduados e com até cinco anos de formação nas áreas
              abrangidas pelo Sistema Confea/Crea, possibilitando-lhes{" "}
              <span className="text-marked">
                orientação para ingresso no mercado de trabalho,
              </span>{" "}
              além de fomentar a participação nas atividades do Sistema e nas
              entidades de classe.
            </p>
            <div className="mt-4 mt-md-5">
              <Link
                href="pdf/Regras-CREA-Jovem-SC-2023.pdf"
                target="blank"
                className={`button button-primary`}
              >
                <button>
                  <p>Acessar regulamento</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="d-md-flex py-md-5 justify-content-center">
        <div className="box-skew">
          <div className="content-left">
            <p className="title-3">
              <span className="title-marked2">Benefícios</span>
            </p>
            <p>
              Estreitar as relações do Crea-SC com os jovens profissionais,
              contribuindo na sua <span className="fw-bold">qualificação</span>,
              estabelecendo{" "}
              <span className="fw-bold">
                parcerias, convênios e apoiando movimentos
              </span>{" "}
              inovadores e empreendedores.
            </p>
          </div>
          <div className="box-skew_left"></div>
        </div>

        <div className="box-skew mt-3 mt-md-5">
          <div className="content-right">
            <p className="title-3">
              <span className="title-marked2">Para quem</span> se destina?
            </p>
            <p>
              Para{" "}
              <span className="fw-bold">profissionais recém-graduados</span> e
              com até <span className="fw-bold">cinco anos de formação</span>{" "}
              nas áreas abrangidas pelo Sistema Confea/Crea, com registro
              regular no CREA-SC.
            </p>
          </div>
          <div className="box-skew_right"></div>
        </div>
      </section>

      <section className="py-5 my-5 section-cta section-cta_image">
        <div className="container">
          <div className="slide-content d-grid align-items-end gap-5 gap-md-0 text-responsive">
            <div className="mb-5">
              <p className="font-mont display-6 fw-bold text-white mb-3">
                Junte-se a nós, escolha o seu time e não fique de fora!
              </p>

              <div>
                <Image
                  src={LogosSlide}
                  className="slide-img_logos mb-5 mb-md-0"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 section-teams">
        <div className="container section-teams_content mb-4 mb-md-0">
          <div className="section-teams_header d-md-flex gap-5 align-items-center">
            <p className="title-2 font-faster">
              <span className="title-marked">Times</span>
            </p>
            <p>
              O programa está dividido em{" "}
              <span className="text-marked">
                times que respondem por temas e áreas
              </span>{" "}
              específicas que compõem o objetivo geral da sua criação. São elas:
            </p>
          </div>

          <div className="show-desk">
            <div className="d-grid gap-2 py-5 justify-content-center">
              <div className="row gap-2">
                <BoxTeam
                  icon={Team1}
                  title="CAPACITAÇÃO"
                  description="Planejar, coordenar, ofertar, executar e avaliar os programas de capacitação e treinamento."
                  link={"/times?selec=capacitação"}
                ></BoxTeam>
                <BoxTeam
                  icon={Team2}
                  title="EMPREENDEDORISMO E EMPREGO"
                  description="Estimular o empreendedorismo e orientar os profissionais sobre essa oportunidade."
                  link={"/times?selec=empreendedorismo-e%20emprego"}
                ></BoxTeam>
                <BoxTeam
                  icon={Team3}
                  title="LEGISLAÇÃO E VALORIZAÇÃO PROFISSIONAL"
                  description="Disseminar conteúdos relacionados à legislação e ética profissional, bem como orientar sobre normas e regras disponíveis aos profissionais."
                  link={
                    "/times?selec=legislação-e%20valorização%20profissional"
                  }
                ></BoxTeam>
              </div>

              <div className="row gap-2">
                <BoxTeam
                  icon={Team4}
                  title="RELAÇÕES INSTITUCIONAIS E INOVAÇÃO"
                  description="Trazer instituições para apoiar ideias inovadoras e levar conteúdo de qualidade para a comunidade e jovens profissionais do sistema. Também é responsável por gerenciar todas as etapas necessárias para a realização de eventos, alinhados com as coordenações pertinentes."
                  link={"/times?selec=relações-institucionais%20e%20inovação"}
                ></BoxTeam>
                <BoxTeam
                  icon={Team5}
                  title="ENTIDADES DE CLASSE"
                  description="Gerenciar todas as ações relacionadas com as entidades de classe do sistema Confea/Crea e visa a aproximação e participação dos jovens profissionais em ações de interesse mútuo, entre elas a inserção de profissionais."
                  link={"/times?selec=entidades-de%20classe"}
                ></BoxTeam>
                <BoxTeam
                  icon={Team6}
                  title="APOIO/GERAL"
                  description="Integrar o programa e participar das atividades e processos administrativos do Programa Jovem Engenheiro. Poderão ser criados núcleos regionais de jovens profissionais de acordo com as inspetorias regionais do CREA-SC."
                  link={"/times?selec=apoio/geral"}
                ></BoxTeam>
              </div>
            </div>
          </div>

          <div className="show-responsive">
            <Slider clase="slider-teams">
              <SwiperSlide>
                <BoxTeam
                  icon={Team1}
                  title="CAPACITAÇÃO"
                  description="Planejar, coordenar, ofertar, executar e avaliar os programas de capacitação e treinamento."
                  link={"#"}
                ></BoxTeam>
              </SwiperSlide>

              <SwiperSlide>
                <BoxTeam
                  icon={Team2}
                  title="EMPREENDEDORISMO E EMPREGO"
                  description="Estimular o empreendedorismo e orientar os profissionais sobre essa oportunidade."
                  link={"#"}
                ></BoxTeam>
              </SwiperSlide>

              <SwiperSlide>
                <BoxTeam
                  icon={Team3}
                  title="LEGISLAÇÃO E VALORIZAÇÃO PROFISSIONAL"
                  description="Disseminar conteúdos relacionados à legislação e ética profissional, bem como orientar sobre normas e regras disponíveis aos profissionais."
                  link={"#"}
                ></BoxTeam>
              </SwiperSlide>

              <SwiperSlide>
                <BoxTeam
                  icon={Team4}
                  title="RELAÇÕES INSTITUCIONAIS E INOVAÇÃO"
                  description="Trazer instituições para apoiar ideias inovadoras e levar conteúdo de qualidade para a comunidade e jovens profissionais do sistema. Também é responsável por gerenciar todas as etapas necessárias para a realização de eventos, alinhados com as coordenações pertinentes."
                  link={"#"}
                ></BoxTeam>
              </SwiperSlide>

              <SwiperSlide>
                <BoxTeam
                  icon={Team5}
                  title="ENTIDADES DE CLASSE"
                  description="Gerenciar todas as ações relacionadas com as entidades de classe do sistema Confea/Crea e visa a aproximação e participação dos jovens profissionais em ações de interesse mútuo, entre elas a inserção de profissionais."
                  link={"#"}
                ></BoxTeam>
              </SwiperSlide>

              <SwiperSlide>
                <BoxTeam
                  icon={Team6}
                  title="APOIO/GERAL"
                  description="Integrar o programa e participar das atividades e processos administrativos do Programa Jovem Engenheiro. Poderão ser criados núcleos regionais de jovens profissionais de acordo com as inspetorias regionais do CREA-SC."
                  link={"#"}
                ></BoxTeam>
              </SwiperSlide>
            </Slider>
          </div>

          <div className="bg-blur"></div>
        </div>
      </section>

      <section className="py-5 my-5 section-cta section-cta_inscription">
        <div className="container d-md-flex justify-content-center align-items-center section-cta_inscription-bg p-5">
          <div className="w-100 text-white ps-0 ps-md-5">
            <p className="title">
              <span className="title-marked2 fw-bold">Como posso</span> me
              inscrever?
            </p>
            <p>
              O jovem profissional interessado em participar deverá se inscrever{" "}
              <span className="fw-bold">
                acessando o seu Creanet profissional
              </span>{" "}
              , preencher o formulário disponível, escolher seu time e
              justificar sobre sua intenção e motivação de participação no time
              escolhido.
            </p>
          </div>
          <div className="w-100 d-md-flex justify-content-center align-items-center mt-5 mt-md-0">
            <div>
              <Button
                link={"/inscricao"}
                type="button-primary"
                text="Fazer minha inscrição"
              ></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container pt-5 mt-5" id="produtos">
        <div className="section-teams_header d-md-flex gap-5 align-items-center pt-5 pt-md-0">
          <p className="title-2 font-faster" id="produtos">
            <span className="title-marked">Produtos</span>
          </p>
          <p>
            Os produtos e serviços a seguir são oportunidades para{" "}
            <span className="text-marked">
              impulsionar sua carreira e criar conexões.
            </span>
          </p>
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
