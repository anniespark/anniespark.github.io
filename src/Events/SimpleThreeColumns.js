
import { Box, SimpleGrid, Icon, Text, Stack, Flex,Container, Center, useColorModeValue, } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
} from 'react-icons/ri';


interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
  iconBg: string;
}

const Feature = ({ title, text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={12}
        h={12}
        ml="auto" 
        mr="auto"
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600} fontSize={24} pb="3">{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Container maxW={'7xl'} py='12' >
      <SimpleGrid  columns={{ base: 1, md: 3 }} spacing={30} >
        <Feature 
          icon={<Icon as={RiNumber1} color={'blue.500'} w={8} h={8} /> }
          iconBg={useColorModeValue('blue.100', 'blue.900')}
          title={'New Features'}
          text={
            'Upon receiving customer feedback, spearhead designing these new features from start to finish to meet more of our users needs'
          }
        />
        <Feature
          icon={<Icon as={RiNumber2} color={'blue.500'} w={8} h={8} />}
          iconBg={useColorModeValue('blue.100', 'blue.900')}
          title={'Enhancements'}
          text={
'Based on continual feedback from our users in collaboration with the customer success team or user studies, enhance our existing features.'          }
        />
        <Feature
          icon={<Icon as={RiNumber3} color={'blue.500'} w={8} h={8} />}
          iconBg={useColorModeValue('blue.100', 'blue.900')}
          title={'Usability'}
          text={
'Conduct in-person and remote usability tests. Based on results, redesign our current features to optimize user experience, overhauling our current design to make our product more user friendly'          }
        />
      </SimpleGrid>
    </Container>
  );
}