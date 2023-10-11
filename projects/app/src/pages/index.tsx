import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { feConfigs } from '@/store/static';
import { serviceSideProps } from '@/utils/web/i18n';
import { useRouter } from 'next/router';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ability from './components/Ability';
import Choice from './components/Choice';
import Footer from './components/Footer';
import Loading from '@/components/Loading';
import Head from 'next/head';

const Home = ({ homeUrl = '/' }: { homeUrl: string }) => {
  const router = useRouter();

  if (homeUrl !== '/') {
    router.replace(homeUrl);
  }

  useEffect(() => {
    router.prefetch('/app/list');
    router.prefetch('/login');
  }, []);

  return (
    <>
      <Head>
        <title>{feConfigs?.systemTitle}</title>
      </Head>

      {homeUrl !== '/' && <Loading bg={'white'} />}
    </>
  );
};

export async function getServerSideProps(content: any) {
  return {
    props: {
      ...(await serviceSideProps(content)),
      homeUrl: process.env.HOME_URL || '/login'
    }
  };
}

export default Home;
