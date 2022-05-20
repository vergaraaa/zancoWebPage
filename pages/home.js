import LayoutUser from '../components/layout_user'
import styles from '../styles/Home.module.css'
import { Icon } from '@iconify/react';

export default function Home() {

    return (
        <LayoutUser>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>WELCOME<br /> sessionStorage.firstname </h1>
                    </div>
                </div>
            </div>
        </LayoutUser>
    );
}
