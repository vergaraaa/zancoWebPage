import { Icon } from '@iconify/react';

export default function Footer() {

    return (
        <footer>
            <div className="container">

                <div className="row row-cols-1 row-cols-lg-4 g-5 text-white">
                    <div className="col-lg">
                        <p style={{ fontWeight: 'bold' }}>
                            <a className="footer__link" href="/">Zanco</a>
                        </p>
                        <p></p>
                        <p>It's our job to take care of your packaging necesities.</p>

                        <div className="footer__subscribe">
                            <input type="email" placeholder="Enter Email" required />
                            <button type="submit"> <i className="uil uil-arrow-right"></i> </button>
                        </div>
                    </div>
                    <div className="col-lg ps-5">
                        <p style={{ fontWeight: 'bold' }}>Permalinks</p>
                        <ul className="permalinks">
                            <li> <a href="index.html"> Home</a></li>
                            <li> <a href="index.html#about"> About</a></li>
                            <li> <a href="index.html#testimonials"> Testimonials</a></li>
                            <li> <a href="index.html#faqs"> FAQs</a></li>
                            <li> <a href="contact.html"> Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg ps-5">
                        <p style={{ fontWeight: 'bold' }}> Privacy</p>
                        <ul className="privacy">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Refund Policy</a></li>
                        </ul>
                    </div>

                    <div className="col-lg ps-4">
                        <p style={{ fontWeight: 'bold' }}> Contact Us </p>
                        <p>
                            (+52) 81 2400 4678 <br />
                            santiago.torres@zanco.com.mx
                        </p>
                        <ul className="footer__socials">
                            <li>
                                <a href="https://www.facebook.com/zancofb" target="_blank"> <i className="uil uil-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/zanco_ig/" target="_blank"> <i className="uil uil-instagram-alt"></i></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/Zanco_tw" target="_blank"> <i className="uil uil-twitter"></i></a>
                            </li>
                            <li>
                                <a href="https://linktr.ee/Zanco.lt" target="_blank">
                                    <Icon icon="simple-icons:linktree" style={{ color: 'white' }}></Icon></a>
                            </li>

                        </ul>
                    </div>

                    <div className="col-lg">
                        <div className="copyright">
                            <small>Copyright &copy; @santorres</small>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}