export default function TextAreaFields() {
    return <div className="col-lg-12">
                <div className="contact-form-group">
                    <textarea name="contact_message" className="form-control" autocomplete="off" placeholder="Your Message *" cols="20" rows="7"></textarea>
                    <i className="far fa-envelope-open"></i>
                    <div className="form-validate-icons">
                        <span></span>
                    </div>
                </div>
            </div>;
}