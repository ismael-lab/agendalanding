import Image from "next/image";
import Slider from "../components/index/slider/Slider";
import SliderFlex from "../components/index/slider/Slider-flex";
import { Swiper, SwiperSlide } from "swiper/react";
import BoxTeam from "../components/index/box-teams/box-team";
import Logo from '../public/images/logos/Logo_purple.svg'
import usabilidade1 from "../public/images/index/usabilidade_1.svg";
import Team2 from "../public/images/index/usabilidade_2.svg";
import Team3 from "../public/images/index/usabilidade_3.svg";
import Team4 from "../public/images/index/usabilidade_4.svg";
import iconFavorite from "../public/images/icons/icon-favorite.svg";
import iconReport from "../public/images/icons/icon-report.svg";
import iconCalendar from "../public/images/icons/icon-calendar.svg";
import Scream from "../components/products/scream-product";
import iconSend from "../public/images/icons/icon-send.svg";

import LogoEmpresa1 from "../public/images/logos/Windows_10_Logo.png";
import LogoEmpresa2 from "../public/images/logos/Amazon_logo.png";
import LogoEmpresa3 from "../public/images/logos/Coca-Cola_logo.png";
import LogoEmpresa4 from "../public/images/logos/FedEx_Express.png";
import LogoEmpresa5 from "../public/images/logos/Google_2015_logo.png";
import LogoEmpresa6 from "../public/images/logos/Spotify_logo.png";
import Team5 from "../public/images/MacBook.png";
import LogoSebrae from "../public/images/img1.png";
import LogoCredcrea from "../public/images/teams/aspas.svg";
import axios from "axios";
import check from "../public/images/check.png";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home() {
  const [modal, setModal] = useState();

  useEffect(() => {
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
      <div className="container-banner  ">
        <div className=""><p className="header1">Para reservar espaços</p>
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

      <section className="container py-5 my-5">
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

          <div className="d-grid gap-2 py-5 justify-content-center">
            <div className="row gap-2">
              <div className="col text-center">
                <Image className="mb-4" src={usabilidade1}></Image>
                <p className="title-body">Cadastre-se</p>
                <p className="text-center">na plataforma e selecione as empresas que quer reservar</p>
              </div>

              <div className="col text-center align-self-end ">
                <Image className="mb-4" src={Team2}></Image>
                <p className="title-body">Procure</p>
                <p className="text-center mx-4">o espaço que mais se adequa a seus interesses</p>
              </div>
              <div className="col text-center">
                <Image className="mb-4" src={Team3}></Image>
                <p className="title-body">Faça a reserva</p>
                <p className="text-center mx-4">e vá ao espaço na data selecionada previamente</p>
              </div>
              <div className="col text-center">
                <Image className="mb-4" src={Team4}></Image>
                <p className="title-body">Tudo pronto</p>
                <p className="text-center mx-4">agora você pode utilizar o espaço sem preocupações</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 my-5 section-cta section-cta_image">
        <div className="d-flex flex-column-reverse flex-md-row gap-5 align-items-center">
          <div className="w-100 mx-5">
            <div className="">
              <p className="subtitle-white">Funcionalidades para você</p>
            </div>

            <div className="">
              <div className="accordion accordion-flush" id="accordionFlush">
                <div class="accordion-item d-flex flex-column">
                  <h2 class="accordion-header">
                    <button class="accordion-button d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      <div class="d-flex align-items-center">
                        <Image className="mx-2" src={iconFavorite}></Image>
                        <p class="mb-0">Salvar empresas favoritas</p>
                      </div>
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse  px-4 accordion-item-collapse" data-bs-parent="#accordionFlush">
                    <p className="text-description px-4">Salve na sua tela inicial as empresas que você deseja utilizar os espaços disponíveis e tenha sempre um fácil acesso a elas</p>
                  </div>
                </div>

                <div class="accordion-item d-flex flex-column">
                  <h2 class="accordion-header">
                    <button class="accordion-button d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      <div class="d-flex align-items-center">
                        <Image className="mx-2" src={iconSend}></Image>
                        <p class="mb-0">Enviar reserva para os convidados da reunião por e-mail</p>
                      </div>
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse px-4" data-bs-parent="#accordionFlush">
                    <p className="text-description px-4">Enquanto realiza a reserva você pode inserir o e-mail dos convidados da sua reunião. Quando finalizada a reserva eles receberão uma cópia da reserva realizada.</p>
                  </div>
                </div>

                <div class="accordion-item d-flex flex-column">
                  <h2 class="accordion-header">
                    <button class="accordion-button d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <div class="d-flex align-items-center">
                        <Image className="mx-2" src={iconCalendar}></Image>
                        <p class="mb-0">Conferir o calendário completo do espaço</p>
                      </div>
                    </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse px-4" data-bs-parent="#accordionFlush">
                    <p className="text-description px-4">Ao selecionar um espaço é possível ter uma visão dos horários já reservados no espaço e datas indisponíveis, permitindo uma verificação de disponibilidade sem precisar iniciar uma reserva.</p>
                  </div>
                </div>

                <div class="accordion-item d-flex flex-column">
                  <h2 class="accordion-header">
                    <button class="accordion-button d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                      <div class="d-flex align-items-center">
                        <Image className="mx-2" src={iconReport}></Image>
                        <p class="mb-0">Reportar incidentes na sua reserva</p>
                      </div>
                    </button>
                  </h2>
                  <div id="flush-collapseFour" class="accordion-collapse collapse px-4" data-bs-parent="#accordionFlush">
                    <p className="text-description px-4">Algo de errado aconteceu com sua reserva? Reporte problemas nos materiais ou no espaço reservado para que a empresa possa resolver o problema.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="w-100 d-flex flex-row-reverse">
            <Image src={Team5} alt="Sebrae" />
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
                ></BoxTeam>
                <BoxTeam
                  icon={LogoCredcrea}
                  Comment="Eu nunca soube que agendar espaços de trabalho poderia ser tão fácil! Agora, posso reservar salas de reunião ou espaços de trabalho com apenas alguns cliques. 
                  A interface intuitiva e a variedade de opções disponíveis são impressionantes. Recomendo a todos que buscam praticidade no gerenciamento de seus espaços de trabalho!"
                  autor="Andréia Moura Nascimento"
                ></BoxTeam>
                <BoxTeam
                  icon={LogoCredcrea}
                  Comment="Desde que comecei a usar esta ferramenta de agendamento para espaços de trabalho, minha produtividade decolou! Agora, consigo reservar uma sala tranquila 
                  sempre que preciso me concentrar em um projeto importante. A facilidade de uso e a eficiência do sistema são incríveis. Não sei como consegui viver sem isso antes. 
                  Altamente recomendado!"
                  autor="Artur Saraiva Marins"
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
          <div className="row py-5 justify-content-center">
            <div class="col-sm justify-content-center m-2"><Image src={LogoEmpresa1}></Image></div>
            <div class="col-sm justify-content-center"><Image src={LogoEmpresa2}></Image></div>
            <div class="col-sm justify-content-center"><Image src={LogoEmpresa3}></Image></div>
            <div class="col-sm justify-content-center"><Image src={LogoEmpresa4}></Image></div>
            <div class="col-sm justify-content-center"><Image src={LogoEmpresa5}></Image></div>
            <div class="col-sm justify-content-center"><Image src={LogoEmpresa6}></Image></div>
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

      <section className="container py-3 my-5">
        <div>
          <p className="subtitle">Ficou com alguma dúvida? Estamos aqui para te ajudar!</p>
          <p>Caso sua dúvida não esteja listada aqui, entre em contato conosco.</p>
        </div>

        <div class=" accordion-faq accordion-flush" id="accordionFlush">

          <div class="accordion-item-faq py-4">
            <div class="">
              <div class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <p>Como faço meu cadastro na plataforma?</p>
              </div>
            </div>
            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlush">
              <p >Para entrar na plataforma você só precisa clicar no botão de entrar, na parte superior do menu da página. Você será redirecionado para a tela de login e basta selecionar Fazer cadastro.</p>
            </div>
          </div>

          <div class="accordion-item-faq  py-4">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <p>Preciso pagar para ter uma conta no Tahvago?</p>
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionFlush">
              <p>A criação de uma conta no Tahvago é gratuita! Para utilizar nossa ferramenta você só precisa cadastrar-se clicando aqui.</p>
            </div>
          </div>

          <div class="accordion-item-faq  py-4">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <p>Preciso pagar para reservar um espaço?</p>
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlush">
              <p>O pagamento para utilização dos espaços varia de acordo com cada empresa. Os valores são cadastrados no sistema pela empresa responsável pelo espaço e sinalizados na tela dos espaços disponíveis. </p>
            </div>
          </div>

          <div class="accordion-item-faq  py-4">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                <p>Como faço para reservar um espaço?</p>
              </button>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlush">
              <p>Reservar um espaço é simples, você só precisa se cadastrar na ferramenta e buscar pelos ambientes mais próximos a você. Você pode colocá-los em seu acesso rápido para ter uma visualização mais ágil. Após selecionar o ambiente no qual quer reservar um espaço você navega pelos espaços disponíveis e seleciona aquele que mais se adequa às suas necessidades. Quando escolhido o espaço você só precisa informar os dados solicitados e confirmar a reserva.</p>
            </div>
          </div>

          <div class="accordion-item-faq  py-4">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                <p>Não consigo acessar os espaços de uma empresa específica</p>
              </button>
            </h2>
            <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlush">
              <p>Algumas empresas registradas no Tahvago possuem pré requisitos para acesso aos seus espaços. Quando necessário você verá um pop up pedindo alguma informação a mais para poder utilizar o ambiente escolhido. Ao enviar os dados a empresa precisará aprovar sua entrada, após aprovado uma vez você não será mais solicitado a inserir essa informação e poderá acessar direto.</p>
            </div>
          </div>

          <div class="accordion-item-faq  py-4">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                <p>Como faço para editar uma reserva?</p>
              </button>
            </h2>
            <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlush">
              <p>No momento não possuímos a função de editar uma reserva, caso precise alterar algum detalhe da sua reserva como data e hora será necessário que você cancele a reserva em “minhas reservas” e clicando na reserva em questão e realizando uma nova solicitação para aquele espaço.</p>
            </div>
          </div>


        </div>
      </section>



    </>
  );
  $(document).ready(function () {
    $('.panel-heading').on('click', function () {
      // Remove a classe 'active' de todos os painéis
      $('.panel-heading').removeClass('active');
      // Adiciona a classe 'active' apenas ao painel clicado
      $(this).addClass('active');
    });
  });
}
