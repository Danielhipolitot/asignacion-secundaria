import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../public/assets/scss/color.scss';
import '../styles/styles.css';


export default function MyAppComponent({ Component, pageProps }) {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [loader, setLoader] = useState(true);
  let componentMounted = true;

  useEffect(() => {
    // document.body.classList.add('sidebar-active');
    // const localStorageUser = localStorage.getItem('email');
    // // get all details about authenticate login users
    // if (currentUser === undefined) {
    //   router.push('/messenger'); // you can not login please login
    // } else {
    //   setCurrentUser(localStorageUser);
    // }
    // if (currentUser !== null) {
    //   router.push('/'); // you can get login user
    // } else {
    //   router.push('/'); // you can not login please login
    // }
    // Page Loader
    setTimeout(() => {
      setLoader(false);
    }, 1500);
    return () => {
      // This code runs when component is unmounted
      componentMounted = false; // (4) set it to false if we leave the page
    };
  }, [currentUser]);

  return (
    <>
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Chitchat" />
        <meta name="keywords" content="Chitchat" />
        <meta name="author" content="Chitchat" />
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />

        <title>Chitchat - chat messenger html templlete</title>
      </Head>
      {loader && (
        <div className="chitchat-loader">
          <div>
            <img src="/assets/images/logo/logo_big.png" alt="" />
            <h3>Simple, secure messaging for fast connect to world..!</h3>
          </div>
        </div>
      )}
      <div>
      <Component {...pageProps} />
      </div>
    </>
  );
}
