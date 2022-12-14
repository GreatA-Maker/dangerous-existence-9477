import {Box, Checkbox, Flex, HStack, Select, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import Styles from "../Css/Makeup.module.css"

const SortSection = () => {
  return (
    <Box borderBottom="1px solid grey">
      <Flex className={Styles.sort}>
        <Link>Home / &nbsp;</Link>
        <Link>Clothing / &nbsp;</Link>
        <Link><Text as="b">Men T-shirts</Text></Link>
      </Flex>
       <Box textAlign={"left"} className={Styles.sort}>
        <Text>Men T-Shirts - 83335 items</Text></Box>

      <Flex flexDirection={["column","column","row"]} justifyContent={"space-between"} >
       <Box p="10px"> <Text as="b">Filters</Text></Box> 
     
      <HStack>
        <Select size='sm'  placeholder='Bundles'></Select>
        <Select size='sm'  placeholder='Country'></Select>
        <Select size='sm'  placeholder='Size'></Select>
      </HStack>

      <Box>
      <Select placeholder='Sort by : Recommended' variant='outline'>
        <option value='option1'>Price:High to Low</option>
        <option value='option2'>Price:Low to High</option>
      </Select>
      </Box>

      </Flex>
    </Box>
  )
}

export default SortSection;