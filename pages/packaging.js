import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { Icon } from '@iconify/react';

export default function Packaging() {

    return (
        <Layout>

            {/* ABOUT  */}
            <section id="packaging" className='pt-5'>
                <h1 className={`${styles.about__title} text-center pt-5`}> About Us</h1>
                <div className="container">
                    {/* FOAMS */}
                    <article>
                        <div className="row pt-5">
                            <div className="col-lg-5 offset-lg-1">
                                <img className="loaded img-fluid" src="/img/about1.png" alt="" />
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <h2 className={styles.about__article__title}>Foams</h2>
                                <div className={styles.about__content}>
                                    <p> We manage the distribution of foams such as polyethylene, closed cell, neoprene and polyurethane.
                                        All of which have multiple application areas for example: lamination films,
                                        sealants, frozen food packaging, among others.
                                    </p>
                                    <a href="index.html#downloadCatalogo" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* PACKAGING */}
                    <article>
                        <div className="row pt-5">
                            <div className={`col-lg-5 offset-lg-1 ${styles.flexReverseContent}`}>
                                <h2 className={styles.about__article__title}>Packaging</h2>
                                <div className={styles.about__content}>
                                    <p> Part of our administration relies on industrial packaging material such as: Foam, Polybags and plasters.
                                    </p>
                                    <a href="index.html#downloadCatalogo" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                            <div className={`col-lg-5 offset-lg-1 ${styles.flexReverseImage}`}>
                                <img className="loaded img-fluid" src="/img/about2.png" alt="" />
                            </div>
                        </div>
                    </article>

                    {/* SEALING AND CUTS */}
                    <article>
                        <div className="row pt-5">
                            <div className="col-lg-5 offset-lg-1">
                                <img className="loaded img-fluid" src="/img/about3.png" alt="" />
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <h2 className={styles.about__article__title}>Sealing and Cuts</h2>
                                <div className={styles.about__content}>
                                    <p> Our catalog also includes products for sealing and cuts such as industrial EPDM (rubber) , EVA (rubber/foam) and COROPLAST.
                                    </p>
                                    <a href="index.html#downloadCatalogo" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            {/* END ABOUT */}

            
            {/* CLIENTS */}
            <section id='clients' className='pt-5'>
                <h1 className={`${styles.about__title} text-center pt-5`}>PSA Adhesive Brand</h1>
                <p className='text-center pt-4'>We only manage premium Adhesive brands.</p>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <img className="loaded img-fluid" src="/img/client1.png" alt="" />
                        </div>
                        <div className="col-lg-3">
                            <img className="loaded img-fluid" src="/img/client2.png" alt="" />
                        </div>
                        <div className="col-lg-3">
                            <img className="loaded img-fluid" src="/img/client3.png" alt="" />
                        </div>
                        <div className="col-lg-3">
                            <img className="loaded img-fluid" src="/img/client4.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* END CLIENTS */}
        </Layout>
    )
}
