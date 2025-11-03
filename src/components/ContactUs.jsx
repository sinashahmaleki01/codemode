//--------------------|📝 : Imports

import SectionHeader from "./SectionHeader";
import Earth from "./Earth";

//--------------------|📝 : Contact us

function ContactUs() {
    return (
        <section id="contact" className="contact-us">
            <SectionHeader>تماس با ما</SectionHeader>
            <div className="contact-us__content">
                <Earth />
                <p>میخوای پروژه جدید شروع کنی؟ <a href="tel:+989199364514">تماس</a> بگیر</p>
            </div>
        </section>
    );
}

export default ContactUs;