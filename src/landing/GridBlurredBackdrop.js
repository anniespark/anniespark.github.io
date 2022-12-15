import {
  Avatar,
  Box,
  chakra,
  ChakraProvider,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
} from 'react-icons/ri';

const testimonials = [
  {
    name: '1. User Research and Analysis',
    content:
      'Customer Feedback, User Interview, Usability Study, Competitive Analysis - to empathize with the user for human-centered design & define the problem',
    avatar:
      'https://drive.google.com/uc?id=17Ly0dHBeLw18CA7ggOZOPNllAYDXWQ6O',
    step:'1',
  },
  {
    name: '2. Ideation & Concept Design',
    content:
      "Reviews with Stakeholders, Sketches, Low Fidelity Wireframes, Information Architecture, Story Shell & Epic Creation in JIRA - generate ideas and have an initial idea",
    avatar:
      'https://drive.google.com/uc?id=1Vpyhh0zkZQe45SZGud7snWbsfy6yyKG2',
  },
  {
    name: '3. Prototype',
    content:
      "High Fidelity Prototypes & JIRA story writing - turn the initial idea into a concrete solution",
    avatar:
      'https://drive.google.com/uc?id=1f8TCbWj90Dq0J4q0g2TjogFNWPow4szW',
  },
  {
    name: '4. Usability Tests & Reviews',
    content:
      'Usability Tests, Stakeholder Reviews, Product Design Review - evaluate and test the design solution',
    avatar:
      'https://drive.google.com/uc?id=1Vpyhh0zkZQe45SZGud7snWbsfy6yyKG2',
  },
  {
    name: '5. Fine-Tuning',
    content:
      'Completion of high-fidelity interactive prototype, JIRA story business rules, information architecture - finalize based on evaluation before moving onto development',
    avatar:
      'https://drive.google.com/uc?id=1Awz1rLemjnWtu1m1O3R4K7LeR1YGV39y',
  },
];

const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
];

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  index: number;
  step: string;
}

function TestimonialCard(props: TestimonialCardProps) {
  const { name, role, content, avatar, index, step } = props;
  return (
    
    <Flex
      boxShadow={'lg'}
      maxW={'640px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
      src = {step}
    
      _after={{
        content: '""',
        position: 'absolute',
        height: '21px',
        width: '29px',
        left: '35px',
        top: '-10px',
        backgroundSize: 'cover',
      }}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        maxW: '640px',
        width: 'full',
        filter: 'blur(40px)',
        transform: 'scale(0.98)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 0,
        left: 0,
        backgroundImage: backgrounds[index % 4],
      }}>
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}>
      
        <chakra.p pb="3" fontFamily={'system-ui'} fontWeight={'bold'} fontSize={24}>
          {name}

          <chakra.span
            fontFamily={'system-ui'}
            fontWeight={'medium'}
            color={'gray.500'}>
            {role}
          </chakra.span>
        </chakra.p>
        <chakra.p
          fontFamily={'system-ui'}
          fontWeight={'400'}
          fontSize={'15px'}
          pb={4}>
          {content}
        </chakra.p>
      </Flex>
      <Avatar
        src={avatar}
        height={'150px'}
        width={'150px'}
        alignSelf={'center'}
        m={{ base: '0 0 30px 0', md: '0 0 0 25px' }}
      />
    </Flex>
  );
}

export default function GridBlurredBackdrop() {
  return (
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}>
      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
        <chakra.h3
          fontFamily={'system-ui'}
          fontWeight={'bold'}
          fontSize={20}
          textTransform={'uppercase'}
          color={'purple.400'}>
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={48}
          fontFamily={'system-ui'}
          fontWeight={'bold'}
          color={useColorModeValue('gray.700', 'gray.50')}>
          My Design Process
        </chakra.h1>
        <chakra.h2
          margin={'auto'}
          width={'100%'}
          fontFamily={'system-ui'}
          fontWeight={'400'}
          color={useColorModeValue('gray.500', 'gray.400')}>
          These are basic free-flowing steps I take in approaching a design solution in an agile environment - with a willingness to go back in forth between each step - and even start all over again :) in order to reach the best solution.
        </chakra.h2>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={'20'}
        mt={16}
        mx={'auto'}>
        {testimonials.map((cardInfo, index) => {
          if (index < testimonials.length - 1)
          return (
          <TestimonialCard {...cardInfo} index={index} />
        )})}
      </SimpleGrid>
      <Flex justifyContent="center" mt="20">
        <TestimonialCard {...testimonials[testimonials.length - 1]} index={testimonials.length} />
      </Flex>
      <Box>
        <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={'purple.400'}>
          <path
            fill={'currentColor'}
            d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
          />
        </Icon>
      </Box>
    </Flex>
  );
}