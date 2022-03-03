import AcceptTerms from "./AcceptTerms";
import Footer from "./Footer";
import HeaderForm from "./HeaderForm";
import SubmitButton from "./SubmitButton";
import TextAreaFields from "./TextAreaFields";
import TextFields from "./TextField";

export default function MainArea() {
    return (
        <main className="main-area">
            <section className="section">
                <div className="container">
                    <HeaderForm />
                    <div className="row align-items-start justify-content-center">
                        <div className="col-md-10">
                            <div className="contact-form-wrap">
                                <form id="contactForm">
                                    <div className="row">
                                        <TextFields textoInstrucao="Nome completo" />
                                        <TextFields tipo="email" textoInstrucao="E-mail" />
                                        <TextFields tipo="phone" textoInstrucao="Telefone" />
                                        <TextAreaFields />
                                        <TextFields textoInstrucao="CEP" />
                                        <AcceptTerms />
                                        <SubmitButton />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );

}