import { useState } from 'react';
import { Button, Textarea } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState('');

  const toast = useToast();

  const submitText = () => {
    if (text === '') {
      toast({
        title: 'Text field is empty.',
        description: 'Please enter some text to extract keywords.',
        status: 'error',
        duration: 5000,
        isClosable: false,
      });
      return;
    }

    extractKeywords(text);
  };

  return (
    <>
      <Textarea
        bg='gray.200'
        padding={4}
        marginTop={6}
        height={300}
        color='black'
        value={text}
        focusBorderColor='green.500'
        onChange={(e) => setText(e.target.value)}
        placeholder="Inter your text here and we'll extract them for you... "
      />

      <Button
        bg='green.400'
        color='white'
        marginTop={4}
        width='100%'
        _hover={{ bg: 'green.500' }}
        onClick={submitText}
      >
        Extract Keywords
      </Button>
    </>
  );
};
export default TextInput;