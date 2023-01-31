import '../styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import timer from '../reducers/timer';

const store = configureStore({
  reducer: { timer },
 });

function App({ Component, pageProps }) {
  return (
    <Provider store = {store}>
      <Head>
        <title>25+5 Clock</title>
      </Head>
      <Component {...pageProps} />
      {/* <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script> */}

    </Provider>
  );
}

export default App;
