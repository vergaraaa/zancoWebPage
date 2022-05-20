import Link from 'next/link';
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
                        <p>It&apos;s our job to take care of your packaging necesities.</p>

                        <div className="footer__subscribe">
                            <input type="email" placeholder="Enter Email" required />
                            <button type="submit"> <i className="uil uil-arrow-right"></i> </button>
                        </div>
                    </div>
                    <div className="col-lg ps-5">
                        <p style={{ fontWeight: 'bold' }}>Permalinks</p>
                        <ul className="permalinks">
                            <li> <Link href="#"><a> Home</a></Link></li>
                            <li> <Link href="#"><a> About</a></Link></li>
                            <li> <Link href="#"><a> Testimonials</a></Link></li>
                            <li> <Link href="#"><a> FAQs</a></Link></li>
                            <li> <Link href="#"><a> Contact</a></Link></li>
                        </ul>
                    </div>
                    <div className="col-lg ps-5">
                        <p style={{ fontWeight: 'bold' }}> Privacy</p>
                        <ul className="privacy">
                            <li><Link href="#"><a>Privacy Policy</a></Link></li>
                            <li><Link href="#"><a>Terms and Conditions</a></Link></li>
                            <li><Link href="#"><a>Refund Policy</a></Link></li>
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
                                <a href="https://www.facebook.com/zancofb" target="_blank" rel='noreferrer'> <i className="uil uil-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/zanco_ig/" target="_blank" rel='noreferrer'> <i className="uil uil-instagram-alt"></i></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/Zanco_tw" target="_blank" rel='noreferrer'> <i className="uil uil-twitter"></i></a>
                            </li>
                            <li>
                                <a href="https://linktr.ee/Zanco.lt" target="_blank" rel='noreferrer'>
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