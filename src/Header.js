import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import WithSubnavigation from './WithSubnavigation'

function Header() {
  return (
    <div className="header">
      <WithSubnavigation/>
    </div>
  );
}

export default Header;
