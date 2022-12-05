import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
  Avatar,
  Card,
} from '@chakra-ui/react';
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
} from 'react-icons/ri';
import { ReactElement } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={'7xl'} py={12}>
      <Grid
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}>
        <GridItem rowSpan={1} colSpan={5} bg=''>
          <Flex alignItems='center' flexWrap={['wrap','wrap','nowrap']}>
            <Flex justifyContent="center" w={['100%','100%','auto']}>
              <Avatar
                size={['2xl','3xl','2xl']}
                alt={'np logo'}
                my={"5"}
                mr={["","","10"]}
                src={
                  'https://drive.google.com/uc?id=1oHBxKknptpnT8fDzOShmZBfHKMxShc5h'
                }
                objectFit={'cover'}
              />
            </Flex>
            <Flex flexDirection="column" textAlign={["","", "left"]} pr="3">
              <Heading pb="3">National Pen</Heading>
              <Text color={'gray.500'} fontSize={'lg'}>
                I work in the e-commerce side of National Pen - a promotional product company that operates globally.
                <Box pb={5} />
                I specialize in UX teardowns, competitive analysis, information architecture, and interaction design . At any given time, I am handling multiple projects and creating user-centered designs in the following categories:
              </Text>
            </Flex>

          </Flex>

        </GridItem>
        <GridItem rowSpan={1} colSpan={5} >
          <Stack p="3" spacing={4}>

            <Stack
              spacing={4}>
              <Feature
                icon={
                  <Icon as={RiNumber1} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Redesigns'}
              />
              <text>
              I redesign existing features from start to finish to create a better user experience, using the mobile first strategy.
              </text>
              <Feature
                icon={<Icon as={RiNumber2} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Features & A/B Testing'}
              />
              <Feature
                icon={
                  <Icon as={RiNumber3} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'UX Process Enhancements'}
              />
            </Stack>
          </Stack>
        </GridItem>
        <Flex>

        </Flex>
      </Grid>
    </Container>
  );
}