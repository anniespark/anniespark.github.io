import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Body from './Body';
import Hero from './Hero';

function Landing() {
  return (
    <div className="landing">
      <Hero/>
      <Body/>
    </div>
  );
}

export default Landing;
