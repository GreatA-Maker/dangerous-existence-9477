
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import Styles from "../Css/Makeup.module.css"
import SingleProductCard from "../Pages/SingleProductCard";
import FilterSection from "./FilterSection";
import SortSection from "./SortSection";

const ProductSection = () => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading ] = useState(false)

  useEffect(()=>{
    setLoading(true)
    axios.get("http://localhost:3000/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
   })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      });
  }, []);

 return (
  <>
 <Box className={Styles.box} ml={["50px","30px","10px"]}>
  <SimpleGrid className={Styles.grid} columns={[1,3,3,5]} spacing={8} >
        {
          data?.map((item) => {
            return (
              <Box key={item.id}>
                <Stack className={Styles.Stack}>
                  <SingleProductCard key={item.id}
                    image={item.image}
                    Brand={item.Brand}
                    discription={item.discription}
                    price={item.price}
                    rating={item.rating}
                    id={item.id}
                  />
                </Stack>
              </Box>
            )
          })}
          </SimpleGrid>
  </Box>
  </>
 )
}

export default ProductSection;

