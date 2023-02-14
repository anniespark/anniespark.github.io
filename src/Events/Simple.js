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

      <Box p={20}>
        <Divider />
      </Box>

      <Box as={'header'}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
          New Features
        </Heading>
        <Text
          color={useColorModeValue('gray.900', 'gray.400')}
          fontWeight={300}
          fontSize={'2xl'}>
          Example: Analytics Feature
        </Text>
      </Box>

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'Visualization of Feedback Received from Customers'}
            src={
              'https://drive.google.com/uc?id=1wGHVzpGJudbq1YvQTh99MQjCt66qjsNS'
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
                <Text as='b'>Target User</Text> - Event Organizers
                <br /><br />
                <Text as='b'>Defined User Need</Text> - Event organizers need a way to analyze, understand, and manage their online traffic across multiple events in more specific ways so that LEOs can effectively increase the number of conversions by putting marketing efforts into the right areas.
                <br /><br />
                <Text as='b'>Goal</Text> - Help increase the number of event goers for our event organizers.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '18px', lg: '20px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                User Research & Analysis
              </Text>


              <OrderedList spacing={2} align='left'>
                <ListItem>compiled and analyzed feedback from current customers</ListItem>
                <ListItem>competitive analysis via google sheets</ListItem>{' '}
                <ListItem>presentation on user research & competitive analysis for stakeholders</ListItem>
              </OrderedList>

            </Box>


          </Stack>



        </Stack>
      </SimpleGrid>

      <Flex>
        <Image
          rounded={'md'}
          alt={'checkout experience designs'}
          src={
            'https://drive.google.com/uc?id=1mBmNYpf7cg3FrSiThRlKC0ZvGC2jWpnF'
          }
          fit={'cover'}
          align={'center'}
          w={'100%'}
        />
      </Flex>

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'Visualization of Feedback Received from Customers'}
            src={
              'https://drive.google.com/uc?id=1yS1eokRXd8dha-crgFiBMoXouXQ9HK-g'
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
            <Box>

              <Text
                fontSize={{ base: '18px', lg: '20px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Ideation, Concept Design, & Review
              </Text>

              <OrderedList spacing={2} align='left'>
                <ListItem>Brainstorming</ListItem>
                <ListItem>Low-fidelity Wireframe</ListItem>{' '}
                <ListItem>JIRA - Epic Creation & Story Shells</ListItem>
              </OrderedList>

            </Box>
            <Box>
              <Text
                fontSize={{ base: '18px', lg: '20px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Prototype & JIRA
              </Text>


              <UnorderedList spacing={2} align='left'>
                <ListItem>High-Fidelity Interactive Prototype</ListItem>
                <ListItem>JIRA - Epic Management in Agile phases, Story Writing, Business Rules </ListItem>
              </UnorderedList>

            </Box>


          </Stack>



        </Stack>
      </SimpleGrid>

      <Flex>
        <Image
          rounded={'md'}
          alt={'checkout experience designs'}
          src={
            'https://drive.google.com/uc?id=134UsCjqcVZpOQZr2qdljgtfM3xbzzGsT'
          }
          fit={'cover'}
          align={'center'}
          w={'100%'}
        />
      </Flex>
      
      <Stack spacing={{ base: 6, md: 10 }}>
        <Box>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            pt='20'>
            Usability Study & Feature Enhancements
          </Heading>
          <Text
            color={useColorModeValue('gray.900', 'gray.400')}
            fontWeight={300}
            fontSize={'2xl'}>
            Example: Self-Service Project
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
              <Text as='b'>Target User</Text> - Self-Service Event Organizers who are those who will not contact our customer success team
              <br /><br />
              <Text as='b'>Defined User Need</Text> - Self-Service Event organizers need a way to easily use our product without reaching out for human help.
              <br /><br />
              <Text as='b'>Goal</Text> - Help Events.com increase the number of self-service users.

            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}>
            <Flex>
              <Image
                rounded={'md'}
                alt={'Visualization of Feedback Received from Customers'}
                src={
                  'https://drive.google.com/uc?id=1zK5iS6U_yzXfZ_fLz5CgHhYmUncqf_bx'
                }
                fit={'contain'}
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
                <Box>

                  <Text
                    fontSize={{ base: '18px', lg: '20px' }}
                    color={useColorModeValue('yellow.500', 'yellow.300')}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}>
                    Usability Study & Project Management
                  </Text>

                  <UnorderedList spacing={2} align='left'>
                    <ListItem>Project Planning & Usability Study Plans</ListItem>
                    <ListItem>Participant Recruitment & Communication</ListItem>{' '}
                    <ListItem>Remote and In-Person Script Writing </ListItem>
                    <ListItem>Conducted Usability Studies </ListItem>
                  </UnorderedList>

                </Box>
                <Box>
                  <Text
                    fontSize={{ base: '18px', lg: '20px' }}
                    color={useColorModeValue('yellow.500', 'yellow.300')}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}>
                    Prototype & JIRA
                  </Text>


                  <UnorderedList spacing={2} align='left'>
                    <ListItem>High-Fidelity Interactive Prototype</ListItem>
                    <ListItem>JIRA - Epic Management in Agile phases, Story Writing, Business Rules </ListItem>
                  </UnorderedList>

                </Box>


              </Stack>



            </Stack>
          </SimpleGrid>
          <Flex>
              <Image
                rounded={'md'}
                alt={'Visualization of Feedback Received from Customers'}
                src={
                  'https://drive.google.com/uc?id=1dSosA8WzNg7AodddJThV9TDLHqkXzyGs'
                }
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '500px' }}
              />
          </Flex>

          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}>
            <Flex>
              <Image
                rounded={'md'}
                alt={'Visualization of Feedback Received from Customers'}
                src={
                  'https://drive.google.com/uc?id=1syUTtbrRdragDN875EKWb0xoYptbsJX0'
                }
                fit={'cover'}
                align={'center'}
                w={'90%'}
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
                <Box>

                  <Text
                    fontSize={{ base: '18px', lg: '20px' }}
                    color={useColorModeValue('yellow.500', 'yellow.300')}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}>
                    Heuristic Evaluation & Analysis
                  </Text>

                  <OrderedList spacing={2} align='left'>
                    <ListItem>Listed all findings from usability studies</ListItem>
                    <ListItem>Categorized and rated each finding based on severity level, heuristics, and criticality</ListItem>{' '}
                    <ListItem>Came up with initial recommendations for each main finding</ListItem>
                    <ListItem>Put together a summary report & presentation</ListItem>
                  </OrderedList>

                </Box>


              </Stack>



            </Stack>
          </SimpleGrid>
          <Flex>
              <Image
                rounded={'md'}
                alt={'Visualization of Feedback Received from Customers'}
                src={
                  'https://drive.google.com/uc?id=1T57_LkZaFC09B6oFMwhBYYQ9LtWmSghL'
                }
                fit={'contain'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '500px' }}
              />
          </Flex>
          
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}>
            <Flex>
              <Image
                rounded={'md'}
                alt={'Visualization of Feedback Received from Customers'}
                src={
                  'https://drive.google.com/uc?id=1Af4V_AdBOmf4slz3GWm4bO7LZEdqbvae'
                }
                fit={'contain'}
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
                <Box>

                  <Text
                    fontSize={{ base: '18px', lg: '20px' }}
                    color={useColorModeValue('yellow.500', 'yellow.300')}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}>
                    Recommendations
                  </Text>
                  <Text
                    align='left'
                    mb={'4'}>
                  All our important findings translated into design opportunities so I took the following steps. 
                  </Text>

                  <OrderedList spacing={2} align='left'>
                    <ListItem>Created JIRA story shells with the findings.</ListItem>
                    <ListItem>Determine which have less undertaking.</ListItem>
                    <ListItem>Design solutions for those with less undertaking.</ListItem>
                    <ListItem>Create a separate project for our biggest overall recommendation - to onboard users and have an interactive Tutorial Tool.</ListItem>
                  </OrderedList>

                </Box>
                <Box>
                  <Text
                    fontSize={{ base: '18px', lg: '20px' }}
                    color={useColorModeValue('yellow.500', 'yellow.300')}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}>
                    Prototype & JIRA
                  </Text>


                  <UnorderedList spacing={2} align='left'>
                    <ListItem>High-Fidelity Interactive Prototype</ListItem>
                    <ListItem>JIRA - Epic Management in Agile phases, Story Writing, Business Rules </ListItem>
                  </UnorderedList>

                </Box>
                
                <Box>
                <Text
                    fontSize={{ base: '18px', lg: '20px' }}
                    color={useColorModeValue('yellow.500', 'yellow.300')}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}>
                    Improvements Made
                  </Text>
                
                  <UnorderedList spacing={2} align='left'>
                    <ListItem>Completed all stories that came from our findings which were developed.  </ListItem>
                    <ListItem>Co-led the project to implement an onboarding tool and increase help & documentation for our new users.</ListItem>
                  </UnorderedList>
                </Box>


              </Stack>



            </Stack>
          </SimpleGrid>
          <Flex>
              <Image
                rounded={'md'}
                alt={'Visualization of Feedback Received from Customers'}
                src={
                  'https://drive.google.com/uc?id=18nykG3CKvhJTUB4Rudgt-IbV-o0bRKlu'
                }
                fit={'contain'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '500px' }}
                pb={'20'}
              />
          </Flex>
          
        
        </Stack>
      </Stack>
  


    </Container>
  );
}