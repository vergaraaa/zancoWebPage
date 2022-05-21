import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export default function LayoutUser({ children }) {
    return (
        <div>
            <Head>
                <title>Zanco Web Page</title>
                {/* BOOTSTRAP 5 */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
                {/* ICONSOUT */}
                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.5/css/unicons.css"></link>
                {/* ICONIFY */}
                <script async src="https://code.iconify.design/2/2.2.0/iconify.min.js"></script> 
            </Head>
            {/* <Navbar></Navbar> */}
            <div>{children}</div>
            {/* <Footer></Footer> */}
            {/* ICONIFY */}
            <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
        </div>
    );
}