import Link from "next/link"

export default function Inscription () {
    return(
        <>
        <section className="container pb-5 mb-5 first-section">
            <div className="mt-3"><Link href={'/inscricao'}><p>&lt; Voltar</p></Link></div>

            <div className="section-inscription mx-auto">

                <p className="title-3 font-faster">TERMO DE USO E POLÍTICA DE PRIVACIDADE</p>
                <div>
                    <p>Você concorda com este Termo de Uso e Política de Privacidade ao solicitar sua inscrição e ao participar do Programa Jovem Engenheiro do Crea-SC.
                    A inscrição está condicionada à aceitação deste termo. Como a sua participação é muito importante para nós, pedimos que nos informe qualquer divergência para que possamos verificar a possibilidade de melhoria. Entre em contato pelo e-mail: jovemengenheiro@crea-sc.org.br.</p>

                    <p className="title-5">SEUS DIREITOS</p>
                    <p>Suas informações pessoais não serão comercializadas com terceiros.
                    Caso não deseje receber as comunicações do programa Jovem Engenheiro do Crea-SC, favor comunicar por meio do e-mail: jovemengenheiro@crea-sc.org.br.</p>

                    <p className="title-5">SEUS DEVERES</p>
                    <p>Você deve fornecer dados e informações corretas, atualizadas e completas.
                    Você se compromete a não fornecer ou postar conteúdos:</p>

                    <ul type="Square">
                        <li>fraudulentos;</li>
                        <li>que infrinjam direitos autorais, de patente, marca registrada, direito de distribuição ou outro direito de propriedade intelectual, de publicação ou privacidade;</li>
                        <li>que violem leis, estatutos, ordenações ou regulamentos;</li>
                        <li>difamatórios, caluniosos, ameaçadores ou abusivos;</li>
                        <li>obscenos ou pornográficos; e</li>
                        <li>enviados em duplicidade (com o mesmo nome ou CPF).</li>
                    </ul>

                    <p className="title-5">NOSSOS DEVERES</p>
                    <p>Garantir a correção, confidencialidade e segurança da coleta, armazenamento, compartilhamento, modificação e exclusão dos dados pessoais.
                    Fornecer as informações que você solicitar sobre o uso e armazenamento de seus dados pessoais, desde que você comprove sua identidade.
                    Solicitar o mínimo possível de dados pessoais necessários à realização da inscrição.</p>

                    <p className="title-5">TERMOS GERAIS</p>
                    <p>O Formulário de Inscrição para o programa Jovem Engenheiro do Crea-SC solicita as seguintes
                    informações:</p>

                    <ol type="a">
                        <li>Informações sobre dados pessoais: seu nome, RG, CPF, endereço, telefone, e-mail e outras.</li>
                        <li>Informações acadêmicas como: escolaridade, curso de graduação, instituição e outras.</li>
                    </ol>

                    <p>O Crea-SC definirá o tempo máximo pelo qual os dados serão mantidos.
                    O uso dos serviços ou sistemas oferecidos pelo Crea-SC não dá direito a suporte técnico nem gera vínculo de qualquer natureza.
                    Ao verificar qualquer atividade suspeita, como a utilização não autorizada da senha ou da conta, informe-nos imediatamente pelo e-mail: jovemengenheiro@crea-sc.org.br.
                    A violação deste termo ou de outras normas legais poderá levar a notificação do usuário, ou a suspensão, bloqueio ou cancelamento da inscrição, sem comunicação prévia. Medidas judiciais também poderão ser tomadas.
                    Este Termo de Uso e Política de Privacidade poderá ser alterado a qualquer momento. A inscrição no programa e a participação em suas atividades estão condicionados ao aceite de eventuais mudanças feitas neste texto.</p>

                    <p className="title-5">ENTRE EM CONTATO</p>
                    <p>Seus comentários são bem-vindos. Caso você tenha dúvidas, sugestões ou reclamações, entre em contato pelo e-mail: <Link href={'mailto:jovemengenheiro@crea-sc.org.br'}>jovemengenheiro@crea-sc.org.br</Link>.</p>
                </div>
            </div>

        </section>
        </>
    )
}