export default function TextFields(props) {
    return <div className="col-lg-6">
                <div className="contact-form-group">
                    <input type={props.tipo || "text"} className="form-control" name="contact_name" autocomplete="off" placeholder={props.textoInstrucao} />
                    <i className="far fa-user"></i>
                    <div className="form-validate-icons">
                        <span></span>
                    </div>
                </div>
            </div>;
}