import { Box, Img, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import Styles from "../Css/Makeup.module.css"

const SingleProductCard = ({id,image,Brand,discription,price,rating}) => {
  return (
      <Box textAlign={"left"}>
        <Link to={`/singleproduct/${id}`}><Img src={image} className={Styles.grow}/></Link> 
        <Text fontWeight={"bold"} lineHeight="22px" mt="5px" fontSize={"20px"}>{Brand}</Text>
        <Text lineHeight="22px" fontSize={"18px"}>{discription}</Text>
        <Text lineHeight="22px" fontSize={"18px"}>{rating}</Text>
        <Text lineHeight="22px" fontSize={"20px"}> <b>Rs.</b>{price} </Text>
    </Box>
  )
}

export default SingleProductCard;