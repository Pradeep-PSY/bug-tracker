import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Msgmethod, SignupApi } from '../actions/action';

const Signup = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const navigate = useNavigate();
  const { msg } = useSelector(state => state.app)

  const [signup, setSignup] = useState({
    password: '',
    email: '',
  });

  const handleChange = e => {
    let { name, value } = e.target;
    setSignup({
      ...signup,
      [name]: value,
    });
  };
  const handleSignup = () => {
    // console.log(signup)
    dispatch(SignupApi(signup));
  };

  useEffect(() => {
    if (msg.length > 0) {
        toast({
            title: `${msg} `,
            position: 'top',
            status: 'success',
            isClosable: true,
        })
        dispatch(Msgmethod())
    }
  }, [msg]);

  return (
    <>
      <Flex
        minH={'100vh'}
        width="100wh"
        align={'center'}
        justify={'center'}
        backgroundColor="gray.200"
        // bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading color="teal.400" fontSize={'4xl'}>
              Sign Up
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            minW={{ base: '90%', md: '468px' }}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl  id="email" isRequired>
                <FormLabel pos={'static'}>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  pos={'static'}
                  value={signup.email}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={signup.password}
                  onChange={handleChange}
                />
              </FormControl>

              <Stack spacing={10}>
                <Button
                  colorScheme="teal"
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSignup}
                >
                  Sign Up
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Signup;
