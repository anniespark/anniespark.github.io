import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  OrderedList,
  ListIcon,
  UnorderedList,
  Divider,
} from '@chakra-ui/react';
import { FaBluetooth, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping, MdStarPurple500 } from 'react-icons/md';
import { RiNumber1 } from 'react-icons/ri';

export default function Simple() {
  return (
    <Container maxW={'7xl'}>
      <Button
        rounded={'lg'}
        w={'md'}
        mt={5}
        size={'lg'}
        py={'7'}
        bg={useColorModeValue('#F56565')}
        color={useColorModeValue('white', 'gray.900')}
        textTransform={'uppercase'}
        as={'a'}
        variant={'link'}
        href ={'https://www.pens.com'}
        target="_blank"
        _hover={{
          transform: 'translateY(2px)',
          boxShadow: 'lg',
        }}
        >
        See Website
      </Button>
      <Box p={20}>
        <Divider/>
      </Box>
      <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              Redesigns
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              Example: Checkout Experience
            </Text>
          </Box>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              'https://drive.google.com/uc?id=16xMW8nTdzoAPGS_Od-GtB7a_1RABSqh3'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>

        <Stack spacing={{ base: 6, md: 10 }}>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>

              <Text fontSize={'lg'} align='left'>
                <Text as='b'>Defined User Need</Text> - Customers need an easy way to checkout with the items they have in their cart.
                <br /><br />
                <Text as='b'>Business Need</Text> - National Pen wants to reduce the abandonment rate at checkout.
                <br /><br />
                <Text as='b'>Goal</Text> - Increase checkout rate
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '18px', lg: '20px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                User Research
              </Text>


              <OrderedList spacing={2} align='left'>
                <ListItem>teardown of current user flow</ListItem>
                <ListItem>competitive analysis</ListItem>{' '}
                <ListItem>presentation and feedback from UX team on research</ListItem>
              </OrderedList>

            </Box>

            <Box>
              <Text
                fontSize={{ base: '18px', lg: '20px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Ideation, Concept Design, & Review
              </Text>
              <UnorderedList spacing={2} align='left'>
                <ListItem>Braistorming</ListItem>
                <ListItem>Low Fidelity Mockup</ListItem>{' '}
                <ListItem>Interactive Prototuype & Iterative Design</ListItem>
              </UnorderedList>

            </Box>

            <Box>
              <Text
                fontSize={{ base: '18px', lg: '20px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Prototyping & Handoff
              </Text>
              <UnorderedList spacing={2} align='left'>
                <ListItem>High-Fidelity Mock Up with various use cases</ListItem>
                <ListItem>High-Fidelity Interactive Prototype</ListItem>{' '}

              </UnorderedList>

            </Box>
            <Box>
              <Text
                fontSize={{ base: '18px', lg: '20px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Solution
              </Text>
              <Text>Reduce the number of pages and steps by creating a one page checkout experience with 3 easy steps.</Text>
            </Box>
          </Stack>



        </Stack>
      </SimpleGrid>
      <Flex>
        <Image
          rounded={'md'}
          alt={'checkout experience designs'}
          src={
            'https://drive.google.com/uc?id=1nmEBVsdSvD67W_75LOgpm52CTf_sP6sc'
          }
          fit={'cover'}
          align={'center'}
          w={'100%'}
        />
      </Flex>


      <Stack spacing={{ base: 6, md: 10 }}>
        <Box as={'header'}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            pt='20'>
            Feature Updates & A/B Testing
          </Heading>
          <Text
            color={useColorModeValue('gray.900', 'gray.400')}
            fontWeight={300}
            fontSize={'2xl'}>
            Examples: Adyen Payment Update & Cross-sell A/B Test
          </Text>
        </Box>

        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={'column'}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.200', 'gray.600')}
            />
          }>
          <VStack spacing={{ base: 4, sm: 6 }}>

            <Text fontSize={'lg'} align='left'>
              <Text as='b'>Defined User Need</Text> - Customers need an easy way to choose whether to pay now or pay later.
              <br/><br/> 
              <Text as='b'>Business Need</Text> - Include the Adyen payment method as the pay now option. 
            </Text>
          </VStack>
        
          <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              'https://drive.google.com/uc?id=16xMW8nTdzoAPGS_Od-GtB7a_1RABSqh3'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            pb='20'
          />
        </Flex>
        </Stack>



      </Stack>





    </Container>
  );
}