import { Box, Text, Image, Flex } from '@chakra-ui/react';
import logo from '../assets/eden.webp';

const Footer = () => {
  return (
    <Box marginTop={150}>
      <Flex justifyContent='center' alignItems='center'>
        <Image src={logo} marginRight={1} width={50} />
        <Text>Powered By Eden AI</Text>
      </Flex>
    </Box>
  );
};
export default Footer;