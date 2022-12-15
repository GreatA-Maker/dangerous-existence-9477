import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useParams , NavLink } from 'react-router-dom';
import { Box, Img, Text,Flex,Button } from '@chakra-ui/react';
import Styles from "../Css/Makeup.module.css";
import { BsBag } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';
import { MdOutlineLocalOffer } from 'react-icons/md';

const SingleProduct = () => {

  const [loading,setLoading] = useState(true);

  const [data,setData] = useState({});
  
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3000/products/${id}`)
    .then((res) => {
      console.log(res.data);
      setData(res.data);
      setLoading(false);
 })
    .catch((err) => {
      console.log(err);
      setLoading(false)
    });
}, [id]);

 
 return (
    <>
    {
      loading && <div className={Styles.loader}>
      	  <div className={Styles.spinner}></div>
        </div>
    }
    <Flex justifyContent={["center","center","center","center"]} gap="45px"  flexDirection={["column","column","column","row"]}>
      <Box >
        <Img src={data.image} className={Styles.image}/>
      </Box>
      <Box textAlign={["center","center","center","left"]}>
      <Text fontWeight={"bold"} lineHeight="25px" fontSize={"30px"}>{data.Brand}</Text>
      <Text lineHeight="40px" fontWeight={"meduim"} color="grey" fontSize={"20px"}>{data.discription}</Text>
       
       
        <Flex justifyContent={"center"} textAlign="center" border="1px solid black" w={["45%","45%","30%","25%"]} alignContents={"center"} m={["auto","auto","auto","0px"]}>
          <Box w="30px"><b>{data.rating}</b></Box>
          <Box p="5px"  w="30px"><AiFillStar /></Box>
          <Box color="Teal" w="100px"><b>3.5K Ratings</b></Box>
        </Flex>
        
        <hr style={{marginTop:"10px",color: 'black',borderColor: 'black',height: '1px'}}/>

        <Text fontWeight="medium" lineHeight="30px" mt="20px" fontSize={"30px"}>₹{data.price}</Text>
        <Text fontWeight="medium" lineHeight="60px" color="Teal" fontSize="18px">inclusive of all taxes</Text>

        <Flex justifyContent={["center","center","center","left"]} >
          <Text as="b">SELECT SIZE &nbsp; &nbsp; &nbsp;</Text>
          <Flex>
            <Box><Text color='tomato' as="b">SIZE CHART</Text></Box>  
            <Box mt="5px" ml="8px"><IoIosArrowForward/> </Box>  
          </Flex>
        </Flex>

        <Flex textAlign={["center","center","center","center"]} mt="30px" gap="10px" justifyContent={["center","center","center","left"]} >
           <Box  p="10px" w="50px" h="50px" borderRadius={"50px"} border="1px solid black">S</Box>
           <Box  p="10px" w="50px" h="50px" borderRadius={"50px"} border="1px solid black">M</Box>
           <Box  p="10px" w="50px" h="50px" borderRadius={"50px"} border="1px solid black">L</Box>
           <Box  p="10px" w="50px" h="50px" borderRadius={"50px"} border="1px solid black">XL</Box>
        </Flex>

        <Flex gap="20px" mt="30px" justifyContent={"center"} flexDirection={["column","column","row"]}>
          <NavLink>
          <Button
            bg="#FF69B4" w="380px" size='lg' variant="solid" colorScheme="white"  fontSize={"20px"} p="25px" leftIcon={<BsBag />} >
                ADD To BAG
            </Button> 
          </NavLink>
          <NavLink>
          <Button w="280px" size='lg' variant="outline" color="black"  fontSize={"20px"} p="25px" leftIcon={<CiHeart />}>WishList </Button> 
          </NavLink> 
        </Flex>
        <br/>
        <hr style={{marginTop:"10px",color: 'black',borderColor: 'black',height: '1px'}}/>
        
        <Flex gap="10px" mt="20px" justify={["center",,"center","left"]}>
          <Box fontWeight={"medium"} fontSize="20px">BEST OFFERS  </Box>
          <Box mt="5px" fontSize={"22px"}><MdOutlineLocalOffer /></Box>
        </Flex>

        <Box mt="10px" fontWeight={"medium"} fontSize="18px">Best Price: <span style={{color:"tomato"}}>Rs.149</span></Box>
      
         <ul mt="10px">
            <li>Applicable on: Orders above Rs. 599 (only on first purchase)</li>
            <li>Coupon code: MYNTRA200</li>
            <li>Coupon Discount: Rs. 75 off (check cart for final savings)</li>
         </ul>
         <Box mt="15px">
          <Text as="b" color="tomato">View Eligible Products</Text>
          <Text>10% Instant Discount on ICICI Bank Credit and Debit Cards.</Text>
          <ul>
            <li>Min Spend Rs 3,500 ; Max Discount Rs 1,200</li>
          </ul>
         </Box>
         <Box mt="15px">
          <Text as="b" color="tomato">View Eligible Products</Text>
          <Text>10% Instant Discount on Kotak Credit and Debit Cards.</Text>
          <ul>
            <li>Min Spend Rs 3,000 ; Max Discount Rs 1,200</li>
          </ul>
         </Box>
         <Box mt="15px">
          <Text as="b" color="tomato">View Eligible Products</Text>
          <Text>Flat Rs 150 Cashback on Paytm Wallet and Postpaid Transactions.</Text>
          <ul>
            <li>Min Spend Rs 1,500</li>
          </ul>
         </Box>
         <Box mt="15px">
          <Text as="b" >EMI option available</Text>
          <ul>
            <li>EMI starting from Rs.100/month</li>
          </ul>
         </Box>
      </Box>
    </Flex>

    </>
  )
}

export default SingleProduct