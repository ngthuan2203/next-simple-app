import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';

// CSS
import '../assets/fonts/ubuntu/ubuntu.css';
import '../assets/styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';
// i18n
import '../locales/i18n';

import { ToastContainer } from 'react-toastify';
import { baselightTheme } from '@/themes/DefaultColors';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

export default function App({ Component, pageProps }: AppProps) {
  // This ensures that data is not shared
  // between different users and requests
  const { t } = useTranslation();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
            retryDelay: 1000,
            refetchOnWindowFocus: false
          }
        }
      })
  );
  const ChildComponent = Component as any;
  return (
    <>
      <ThemeProvider theme={baselightTheme}>
        <QueryClientProvider client={queryClient}>
          <Head>
            <link rel="shortcut icon" href="/next.svg" />
            <title>{t('app.title')}</title>
          </Head>
          <ChildComponent {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
