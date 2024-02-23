
import SliderFlex from "../components/index/slider/Slider-flex";
import { Swiper, SwiperSlide } from "swiper/react";
import Scream from "../components/products/scream-product";
import { useState } from 'react';
import emailjs from '@emailjs/browser';

import Image from "next/image";
import ImagemApoio from "../public/images/img2.png";
import Logo from '../public/images/logos/Logo_purple.svg'
import LogoClara from '../public/images/header/creajovem-dark-color.svg'
import BoxTeam from "../components/index/box-teams/box-team";
import BoxProduct from "../components/products/scream-product";
import LogoCredcrea from "../public/images/teams/aspas.svg";
import Note1 from "../public/images/slider/note1.png";
import Note2 from "../public/images/slider/note2.png";
import Note3 from "../public/images/slider/note3.png";
import Note4 from "../public/images/slider/note4.png";
import Note5 from "../public/images/slider/note5.png";



export default function Inscription() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [enterprise, setEnterprise] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || phone === '' || enterprise === '') {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      Email: email,
      Phone: phone,
      Enterprise: enterprise
    }

    emailjs.send("service_qods3q5", "template_ebowaqc", templateParams, "feQOmJifOs1omeIQA")
      .then((response) => {
        console.log("email enviado", response.status, response.text)
        setName('')
        setEmail(''),
          setPhone(''),
          setEnterprise('');
      }, (err) => {
        console.log("ERRO: ", err)
      })
  }


  return (
    <>
      <div className="container-banner-reserva">
        <div><p className="header1">Para cadastrar espaços</p>
          <p className="text-white subtitle-header">
            Transforme o {" "}
            <span className="text-marked">
              vago
            </span>{" "}
            em{" "}
            <span className="text-marked">
              ocupado,
            </span>{" "}
            sem complicação!
          </p>
        </div>
      </div>
      <section className="container py-3 my-5">
        <div className="d-flex flex-column-reverse flex-md-row gap-5 align-items-center h-100">
          <div className="w-100">
            <div>
              <p className="subtitle">
                Por que usar o <span><Image src={Logo} className='logo'></Image></span> na sua empresa?
              </p>
            </div>
            <p>Tahvago é uma ferramenta de agendamento de espaços que oferece uma solução eficiente e intuitiva para empresas
              otimizarem a gestão de ambientes. Ao cadastrar seus espaços, as empresas ganham acesso a uma plataforma que
              simplifica a reserva, proporcionando uma experiência eficaz para gestores e usuários finais.
            </p>
            <p>Conectamos as empresas a uma rede diversificada de potenciais clientes, tornando-nos a parceria ideal
              para empresas que buscam elevar a eficiência e visibilidade de seus espaços, transformando a gestão de
              reservas de maneira inovadora em salas de reunião, salões de eventos ou espaços de coworking.</p>
          </div>
          <div className="w-100 d-flex align-items-center flex-column">
            <Image src={ImagemApoio} alt="Sebrae" ></Image>
          </div>
        </div>
      </section>

      <section className="section-products my-auto" id="produtos">
        <div className="slider-w align-content-center py-5">
          <SliderFlex clase="section-products_slide slide py-5">
            <SwiperSlide className="">
              {({ isActive }) => (
                <Scream
                  image={Note1}
                  title="Gerencie"
                  description="os pedidos de reservas, usuários e checkin/checkout do seu ambiente."
                  clase={isActive ? "box-product_active" : "box-product"}
                ></Scream>
              )}
            </SwiperSlide>

            <SwiperSlide>
              {({ isActive }) => (
                <Scream
                  image={Note2}
                  title="Incidentes"
                  description="visualize e atualize o status do incidentes reportados em seus espaços."
                  clase={isActive ? "box-product_active" : "box-product"}
                ></Scream>
              )}
            </SwiperSlide>

            <SwiperSlide>
              {({ isActive }) => (
                <Scream
                  image={Note3}
                  title="Personalize"
                  description="Personalize sua interface de acordo com a identidade visual da sua marca."
                  clase={isActive ? "box-product_active" : "box-product"}
                ></Scream>
              )}
            </SwiperSlide>

            <SwiperSlide>
              {({ isActive }) => (
                <Scream
                  image={Note4}
                  title="Visualize"
                  description="de forma simples os seus espaços cadastrados na plataforma."
                  clase={isActive ? "box-product_active" : "box-product"}
                ></Scream>
              )}
            </SwiperSlide>

            <SwiperSlide>
              {({ isActive }) => (
                <Scream
                  image={Note5}
                  title="Cadastre"
                  description="de forma simples e intuitiva os dados a respeito do seu espaço."
                  clase={isActive ? "box-product_active" : "box-product"}
                ></Scream>
              )}
            </SwiperSlide>
          </SliderFlex>

        </div>

      </section>

      <section className="py-5 my-5 section-cta section-cta_image">
        <div className="container py-2 my-4">
          <div>
            <p className="subtitle-white">
              Por que usar o <span><Image src={LogoClara} className='logo'></Image></span> na sua empresa?
            </p>
          </div>
          <div className="row gap-2 justify-content-center">
            <div className="container-">
              <p className="title-container">Acompanhamento da taxa de ocupação dos espaços</p>
              <p>Acompanhe como está a frequência e quantidade de reservas dos seus espaços disponíveis.</p>
            </div>
            <div className="container-">
              <p className="title-container">Criação e permissões de usuários da sua empresa</p>
              <p>Cadastre os usuários que fazem parte da sua empresa para auxiliar na gestão de seus espaços, reservas e incidentes.</p>
            </div>
            <div className="container-">
              <p className="title-container">Controles de checkin, checkout e reserva</p>
              <p>Selecione quais espaços ofertados terão controle de checkin, checkout e reserva e quais usuários cadastrados irão fazer o controle.</p>
            </div>
            <div className="container-">
              <p className="title-container">Cadastro de bloqueios anuais para os seu espaços</p>
              <p>Cadastre dias em que seus espaços não estarão disponíveis, como feriados e outras ocasiões específicas da sua empresa.</p>
            </div>
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

      <section className="section-form ">
        <div className="container-forms d-flex flex-column-reverse flex-md-row gap-5 h-auto w-auto p-5">
          <div className="w-50">
            <p className="title ">Transforme seus <br></br>espaços conosco!</p>
            <p>Preencha o formulário com suas informações <br></br>e entraremos em contato.</p>
          </div>
          <div>
            <form className="d-flex flex-column form" onSubmit={sendEmail} >
              <p className="title-body d-flex justify-content-start">Nome completo</p>
              <input
                className="input"
                type="text"
                placeholder="  Escreva"
                onChange={(e) => setName(e.target.value)}
                value={name}
              ></input>
              <p className="title-body d-flex justify-content-start">E-mail coorporativo</p>
              <input
                className="input"
                type="text"
                placeholder="  example@example.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              ></input>
              <p className="title-body d-flex justify-content-start">Telefone</p>
              <input
                className="input"
                type="text"
                placeholder="  (xx) xxxxx-xxxx"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              ></input>
              <p className="title-body d-flex justify-content-start">Nome da empresa</p>
              <input
                className="input"
                type="text"
                placeholder="  Escreva"
                onChange={(e) => setEnterprise(e.target.value)}
                value={enterprise}
              ></input>
              <input className="button" type="submit" value={"enviar"}></input>
            </form>
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
                <p>Como crio uma conta para a minha empresa?</p>
              </div>
            </div>
            <div id="flush-collapseOne" class="accordion-collapse collapse px-4" data-bs-parent="#accordionFlush">
              <p >Para cadastrar sua empresa você precisa entrar em contato por meio do botão de contato no menu ou pelo formulário de contato, após isso alguém de nossa equipe entrará em contato para realizar o contrato e ajudar em seus primeiros passos na plataforma.</p>
            </div>
          </div>

          <div class="accordion-item-faq  py-4">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <p>Como cadastrar espaços na plataforma?</p>
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse px-4" data-bs-parent="#accordionFlush">
              <p>Para cadastrar seus espaços em nossa plataforma você só precisa ter uma conta ativa. Ao entrar no sistema você precisa ir em Configurações do ambiente - Espaços - Cadastrar novo espaço. Preencha as informações necessárias e publique seu espaço.</p>
            </div>
          </div>

          <div class="accordion-item-faq  py-4">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <p>Preciso pagar para ter minha empresa na plataforma?</p>
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse px-4" data-bs-parent="#accordionFlush">
              <p>Nossa plataforma de agendamento é gratuita! Você não precisa pagar para utilizá-la.</p>
            </div>
          </div>

          <div class="accordion-item-faq  py-4">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                <p>Como habilito meus usuários a utilizarem os controles?</p>
              </button>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse collapse px-4" data-bs-parent="#accordionFlush">
              <p>Para habilitar seus usuários a utilizarem os controles é preciso que você os cadastre na aba de usuários nas configurações do seu ambiente e insira o usuário nos controles do espaço que você deseja que ele gerencie.</p>
            </div>
          </div>

          
        </div>
      </section>


    </>
  )
}