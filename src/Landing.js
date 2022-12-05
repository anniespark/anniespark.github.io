import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Body from './Body';
import Hero from './Hero';
import { Box } from "@chakra-ui/react"

function Landing() {
  return (
    <div className="landing">
      <Hero/>
      <Body/>
      <Box p={10}/>
    </div>
  );
}

export default Landing;
