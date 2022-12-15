
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
          icon={<Icon as={RiNumber1} color={'purple.500'} w={8} h={8} /> }
          iconBg={useColorModeValue('purple.100', 'purple.900')}
          title={'Redesigns'}
          text={
            'I redesign existing features from start to finish to create a better user experience, using the mobile first strategy.'
          }
        />
        <Feature
          icon={<Icon as={RiNumber2} color={'purple.500'} w={8} h={8} />}
          iconBg={useColorModeValue('purple.100', 'purple.900')}
          title={'Features & A/B Testing'}
          text={
            'Based on provided data and other internal team needs, I work on coming up with design solutions to current user needs. I also provide alternate designs to test for AB testing.'
          }
        />
        <Feature
          icon={<Icon as={RiNumber3} color={'purple.500'} w={8} h={8} />}
          iconBg={useColorModeValue('purple.100', 'purple.900')}
          title={'UX Process Enhancements'}
          text={
            'Think of ways to improve our UX team’s process and tools to more effectively collaborate and come up with designs.'
          }
        />
      </SimpleGrid>
    </Container>
  );
}