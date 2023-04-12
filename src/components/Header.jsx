import { Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/setting-research.gif';

const Header = () => {
  return (
    <>
    
      <Image src={logo} alt='logo' width={100} marginBottom='1rem' />
      <Heading color='white' fontFamily='monospace' marginBottom='1rem'>
        AI Keyword Extractor
      </Heading>
      <Text fontSize={18} textAlign='center'>
      By analyzing keywords and key phrases, our tool can help you optimize your content for search engines, gain insights into market trends and customer preferences, and make data-driven decisions that can improve your overall performance and success.
      </Text>
    </>
  );
};

export default Header;