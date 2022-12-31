import {
  Box,
  Center,
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

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

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
      <SimpleGrid columns={3} spacing={6} spacingY={20} p={10} minChildWidth='250px'>
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
              rounded={'100%'}
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
                backgroundImage: `url(https://drive.google.com/uc?id=1oHBxKknptpnT8fDzOShmZBfHKMxShc5h)`,
                filter: 'blur(25px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <LinkOverlay href='/#/experiences/national-pen'>
                <Image
                  rounded={'100%'}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={'https://drive.google.com/uc?id=1oHBxKknptpnT8fDzOShmZBfHKMxShc5h'}
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
                  Senior UX Designer
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
                backgroundImage: `url(https://drive.google.com/uc?id=1Awz1rLemjnWtu1m1O3R4K7LeR1YGV39y)`,
                filter: 'blur(15px)',
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
                  src={'https://drive.google.com/uc?id=1Awz1rLemjnWtu1m1O3R4K7LeR1YGV39y'}
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
                  Product Designer
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
                backgroundImage: `url(https://drive.google.com/uc?id=1Awz1rLemjnWtu1m1O3R4K7LeR1YGV39y)`,
                filter: 'blur(15px)',
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
                  src={'https://drive.google.com/uc?id=1Awz1rLemjnWtu1m1O3R4K7LeR1YGV39y'}
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
                  Senior UX Designer
                </Text>
              </Stack>
            </Stack>
          </LinkBox>
        </Container>










      </SimpleGrid>

    </Container>


  );
}