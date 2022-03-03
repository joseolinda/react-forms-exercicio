export default function AcceptTerms() {
    return <div className="col-lg-12">
                <div className="contact-form-group">
                    <div className="custom-control custom-checkbox d-flex align-items-center">
                        <input type="checkbox" className="custom-control-input" name="contact_terms" id="termsCheckBox" />
                        <label className="custom-control-label" for="termsCheckBox"></label>
                        <span>I accepted <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal" id="termssToggle">Terms &amp; Conditions</a></span>
                    </div>
                </div>
            </div>;
}