import { Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/setting-research.gif';

const Header = () => {
  return (
    <>
      <Image src={logo} alt='logo' width={100} marginBottom='1rem' />
      <Heading color='white' fontFamily='monospace' marginBottom='1rem' textAlign='center'>
        AI Keyword Extractor
      </Heading>
      <Text fontSize={18} textAlign='center'>
      Our tool can help optimize your content for search engines, gain insights into market trends and customer preferences, which therefore improve your overall performance and success.
      </Text>
    </>
  );
};

export default Header;