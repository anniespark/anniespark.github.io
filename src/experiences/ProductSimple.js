import {
  Box,
  //Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
  Container,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';

//const IMAGE =
  //'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

export default function ProductSimple() {
  return (
    <Container maxW={'7xl'}>
      <Box as={'header'} p={'20'}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
          Experiences
        </Heading>
      </Box>
      <SimpleGrid columns={3} spacing={10} spacingY={20} p={10} minChildWidth='250px'>
        <Container centerContent>
          <LinkBox
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(https://drive.google.com/uc?id=1CXjYfRUcLlY_63A-7njxzaBXBpaZzcBt)`,
                filter: 'blur(40px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <LinkOverlay href='/#/experiences/national-pen'>
                <Image
                  rounded={'lg'}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={'https://drive.google.com/uc?id=1CXjYfRUcLlY_63A-7njxzaBXBpaZzcBt'}
                />
              </LinkOverlay>

            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                July 2020 - Present
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                National Pen
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={400} fontSize={'l'}>
                  UX Designer -> Senior UX Designer
                </Text>
              </Stack>
            </Stack>
          </LinkBox>
        </Container>
        <Container centerContent>
          <LinkBox
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(https://drive.google.com/uc?id=13d7STwyKje5UvZxLySZb3giX0YEXkZSz)`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <LinkOverlay href='/#/experiences/eventsdotcom'>
                <Image
                  rounded={'lg'}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={'https://drive.google.com/uc?id=13d7STwyKje5UvZxLySZb3giX0YEXkZSz'}
                />
              </LinkOverlay>

            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                December 2017 - July 2020
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                Events.com
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={400} fontSize={'l'}>
                  Jr. Product Designer -> Product Designer
                </Text>
              </Stack>
            </Stack>
          </LinkBox>
        </Container>
        <Container centerContent>
          <LinkBox
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(https://drive.google.com/uc?id=1Rax2SniUdceG_uWasCrq7FBqT5s3EA3D)`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <LinkOverlay href='/#/experiences/lytx'>
                <Image
                  rounded={'lg'}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={'https://drive.google.com/uc?id=1Rax2SniUdceG_uWasCrq7FBqT5s3EA3D'}
                />
              </LinkOverlay>

            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                June 2016 - August 2016
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                Lytx, Inc.
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={400} fontSize={'l'}>
                  UX/UI Intern
                </Text>
              </Stack>
            </Stack>
          </LinkBox>
        </Container>
      </SimpleGrid>
    
      <SimpleGrid columns={3} spacing={10} spacingY={20} p={10} minChildWidth='250px'>
        <Container centerContent>
          <LinkBox
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(https://drive.google.com/uc?id=1BrP4qVw1WEiJX8EdDa24wxpnkGe5bL5A)`,
                filter: 'blur(25px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <LinkOverlay href='/#/experiences/gracepoint'>
                <Image
                  rounded={'lg'}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={'https://drive.google.com/uc?id=1BrP4qVw1WEiJX8EdDa24wxpnkGe5bL5A'}
                />
              </LinkOverlay>

            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                September 2018 - April 2021
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                Gracepoint
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={400} fontSize={'l'}>
                  Visual Design & Publications Lead
                </Text>
              </Stack>
            </Stack>
          </LinkBox>
        </Container>
        <Container centerContent>
          <LinkBox
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(https://drive.google.com/uc?id=1GydZrvGhQjwfAW_PbazWvv-udSHMP8W8)`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <LinkOverlay href='/#/experiences/galilee'>
                <Image
                  rounded={'lg'}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={'https://drive.google.com/uc?id=1GydZrvGhQjwfAW_PbazWvv-udSHMP8W8'}
                />
              </LinkOverlay>

            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                November 2018
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                Galilee Pool Website
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={400} fontSize={'l'}>
                  Freelance
                </Text>
              </Stack>
            </Stack>
          </LinkBox>
        </Container>
        <Container centerContent>
          <LinkBox
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(https://drive.google.com/uc?id=1esctBjWuvRJqC5KaN5qZUl-qz-l-Uw1-)`,
                filter: 'blur(30px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <LinkOverlay href='/#/experiences/sio'>
                <Image
                  rounded={'lg'}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={'https://drive.google.com/uc?id=1esctBjWuvRJqC5KaN5qZUl-qz-l-Uw1-'}
                />
              </LinkOverlay>

            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                January 2016 - June 2016
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                SIO UCSD Lab
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={400} fontSize={'l'}>
                Web Designer
                </Text>
              </Stack>
            </Stack>
          </LinkBox>
        </Container>
      </SimpleGrid>

      <SimpleGrid columns={2} spacing={0} spacingY={20} p={10} minChildWidth='250px'>

        <Container centerContent>
          <LinkBox
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(https://drive.google.com/uc?id=1Ua4WDXoMJs6EQrwUBq-F2cU3irqYM7zA)`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <LinkOverlay href='/#/experiences/ucsd'>
                <Image
                  rounded={'lg'}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={'https://drive.google.com/uc?id=1Ua4WDXoMJs6EQrwUBq-F2cU3irqYM7zA'}
                />
              </LinkOverlay>

            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                June 2015 - November 2015
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                UCSD AI Office
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={400} fontSize={'l'}>
                  Web Designer
                </Text>
              </Stack>
            </Stack>
          </LinkBox>
        </Container>
        <Container centerContent>
          <LinkBox
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(https://drive.google.com/uc?id=1YUBZyh3AXbN51XAnBtggpLbhssXH1TuK)`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <LinkOverlay href='/#/experiences/paulys'>
                <Image
                  rounded={'lg'}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={'https://drive.google.com/uc?id=1YUBZyh3AXbN51XAnBtggpLbhssXH1TuK'}
                />
              </LinkOverlay>

            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                January 2017- December 2017
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                Pauly's Pizza Joint
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={400} fontSize={'l'}>
                Freelance
                </Text>
              </Stack>
            </Stack>
          </LinkBox>
        </Container>
      </SimpleGrid>

    </Container>


  );
}