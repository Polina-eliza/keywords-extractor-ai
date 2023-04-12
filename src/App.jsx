import '@fontsource/space-grotesk/400.css';
import { useState } from 'react';
import { Container, Box } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import TextInput from './components/TextInput';
import KeywordsModal from './components/KeywordsModal';
import axios from 'axios';


const App = () => {
  const [keywords, setKeywords] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);
      

    const options = {
      method: 'POST',
      url: 'https://api.edenai.run/v2/text/keyword_extraction',
      headers: {
              'authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
              'Content-Type': 'application/json'
                },
      data: {
        'providers': 'microsoft, amazon',
        'text': text,
        'language': 'en'
      }
};

    try {
      const response = await axios.request(options);
      console.log(response.data)
      if (response.data) {

        const responsearray=response.data['eden-ai'].items
        const keywords=[]
        responsearray.forEach(element => {
          keywords.push(element.keyword)
        });
    
        setKeywords(keywords);
      } else {
        console.error('Keywords not found in response data.');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  const closeModal = () => {
    setIsOpen(false);
  };
  

  return (
    <Box bg='gray.600' fontFamily='monospace' color='white' height='100vh' paddingTop={130}>
      <Container maxW='3xl' centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
      <KeywordsModal
        keywords={keywords}
        loading={loading}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </Box>
  );
};

export default App;