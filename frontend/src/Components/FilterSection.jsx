import { Box, Checkbox, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const FilterSection = () => {
  return (
    <>
      <Box textAlign={"left"} border="1px solid grey" w={["40%","30%","30%","15%"]} p="5px">

      <Flex mt="10px" flexDirection={"column"} >
        <Text as="b">CATEGORIES</Text>
        <Checkbox >Tshirts</Checkbox>
        <Checkbox >Long Tshirts</Checkbox>
      </Flex>
    
      <Flex mt="10px" flexDirection={"column"} borderTop="1px solid grey">
        <Text as="b">BRAND</Text>
        <Checkbox>Roadster</Checkbox>
        <Checkbox>Puma</Checkbox>
        <Checkbox>WROGN</Checkbox>
        <Checkbox>U.S.Polo Assn</Checkbox>
        <Checkbox>HRX by Hrithik Roshan</Checkbox>
        <Checkbox>max</Checkbox>
        <Checkbox>Tommy Hilfiger</Checkbox>
        <Checkbox>Huetrap</Checkbox>
      </Flex>
      
      <Flex mt="10px" flexDirection={"column"} borderTop="1px solid grey">
        <Text as="b">PRICE</Text>
        <Checkbox>Black</Checkbox>
        <Checkbox>Blue</Checkbox>
        <Checkbox>White</Checkbox>
        <Checkbox>Navy Blue</Checkbox>
        <Checkbox>Green</Checkbox>
        <Checkbox>Red</Checkbox>
        <Checkbox>Grey</Checkbox>
      </Flex>

        <Flex mt="10px" flexDirection={"column"}>
          <Text as="b">Distance Range</Text>
          <Checkbox>10% and above</Checkbox>
          <Checkbox>20% and above</Checkbox>
          <Checkbox>30% and above</Checkbox>
          <Checkbox>40% and above</Checkbox>
          <Checkbox>50% and above</Checkbox>
          <Checkbox>60% and above</Checkbox>
          <Checkbox>70% and above</Checkbox>
          <Checkbox>80% and above</Checkbox>
        </Flex>
      </Box> 

      
    </>
  )
}

export default FilterSection