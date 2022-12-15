import { Flex,Box } from '@chakra-ui/react'
import FilterSection from '../Components/FilterSection'
import ProdcutSection from '../Components/ProductSection'
import SortSection from '../Components/SortSection'


const Products = () => {

  return (
    <Box>
      <SortSection />
      <Flex>
          <FilterSection />
          <ProdcutSection />  
      </Flex>
    </Box>
  )
}

export default Products