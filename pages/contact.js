import Layout from '../components/layout'
import styles from '../styles/Contact.module.css'
import { Icon } from '@iconify/react';

export default function Contact() {
    return (
        <Layout>
            <section id="contact">
                <div className="container">
                    <aside>
                        <h4> Get in touch</h4>
                        <p>We&apos;d love to hear from your. Our friendly team is here to chat with you. </p>

                        <div className="info">
                            <article>
                                <span className="icon"><i className="uil uil-envelope"></i></span>
                                <div className="details">
                                    <h5>Chat with us</h5>
                                    <small>Send us an email we&apos;ll respond shortly.</small>
                                    <p>paulo.escobar@zanco.com.mx</p>

                                </div>
                            </article>
                            <article>
                                <span className="iconify" data-icon="uil:map-marker"></span>
                                <div className="details">
                                    <h5>Office</h5>
                                    <small>Come say hello at our office HQ</small>
                                    <p>Monterrey, Nuevo Leon</p>
                                    <p>Carretera Nacional</p>
                                </div>
                            </article>
                            <article>
                                <Icon icon="akar-icons:phone"></Icon>
                                <div className="details">
                                    <h5>Phone</h5>
                                    <small>Mon-Fri from 8am - 6pm </small>
                                    <p>+(52) 81-24-00-46-78</p>
                                </div>
                            </article>



                        </div>
                    </aside>
                    <form action="https://formspree.io/f/mgedzrpg" method="POST">
                        <input type="text" name="Name" placeholder="Your Name" required />
                        <input type="email" name="Email Address" placeholder="you@yourcompany.com" required />
                        <input type="numer" name="Phone Number" placeholder="Phone Number" required />
                        <textarea name="Message" placeholder="Message" required></textarea>
                        <button type="submit" className="btn">Send</button>
                    </form>
                </div>

            </section>

        </Layout>
    );
}