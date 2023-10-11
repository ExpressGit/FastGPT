import React, { useMemo } from 'react';
import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import { feConfigs } from '@/store/static';
import { useTranslation } from 'react-i18next';
import Avatar from '@/components/Avatar';
import { useRouter } from 'next/router';
import CommunityModal from '@/components/CommunityModal';

const Footer = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const list = useMemo(() => [], [onOpen, t]);

  return (
    <Box
      display={['block', 'flex']}
      px={[5, 0]}
      maxW={'1200px'}
      m={'auto'}
      py={['30px', '60px']}
      flexWrap={'wrap'}
    >
      <Box flex={1}>
        <Flex alignItems={'center'}>
          <Avatar src="/icon/logo.svg" w={['24px', '30px']} />
          <Box
            className="textlg"
            fontSize={['xl', '2xl']}
            fontWeight={'bold'}
            ml={3}
            fontStyle={'italic'}
          >
            {feConfigs?.systemTitle}
          </Box>
        </Flex>
        <Box mt={5} fontSize={'sm'} color={'myGray.600'} maxW={'380px'} textAlign={'justify'}>
          {t('home.AI Desc', { title: feConfigs.systemTitle })}
        </Box>
      </Box>
      {isOpen && <CommunityModal onClose={onClose} />}
    </Box>
  );
};

export default Footer;
