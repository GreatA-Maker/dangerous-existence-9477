import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  Checkbox,
  ButtonGroup,
  Radio,
  Image,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';
import AddressButton from './Modal';
import cartimg from '../Myntraasset/cartproimg.jpg';

var data = JSON.parse(localStorage.getItem('address')) || [];

// console.log(data);

const Address = () => {
  return (
    <div>
      {/* <Stack>
        <Box h="120px" w="100%" border={'1px solid red'}></Box>
      </Stack> */}

      <Box mt="90px">
        <Flex
          gap={10}
          mt="20px"
          p="30px"
          flexDirection={['column', 'column', 'row']}
        >
          <Box h="730px" w="45%" mb="10px">
            <Flex justifyContent={'space-between'}>
              <Text
                fontSize={['13px', 'lg', 'xl']}
                fontWeight={[200, 300, 600]}
                mr={['60px', '', '']}
              >
                Selet Delivery Address
              </Text>
              <AddressButton />
            </Flex>

            <Text color={'grey.200'} mt="20px" fontSize={['16px', 'xl', '2xl']}>
              DEFAULT ADDRESS
            </Text>

            <Box
              h={['auto', '400px', ' ']}
              w={['320px', '400px', '90%']}
              //   border={'1px solid '}
              borderRadius={'20px'}
              mt="20px"
              boxShadow={'md'}
              border="2px solid grey"
            >
              <Box>
                <Flex gap={10} mb="10px" ml="50px">
                  <Radio
                    checked
                    colorScheme="pink"
                    size="lg"
                    fontSize={['10px', '20px', 'xl']}
                  >
                    Sachin Kumar
                  </Radio>
                  <Button
                    border={'1px solid green'}
                    color="green"
                    ml="20px"
                    bg="white"
                    p="0 20px"
                    borderRadius={'50px'}
                    mt="5px"
                  >
                    Home
                  </Button>
                </Flex>

                <Text
                  mb="10px"
                  ml="50px"
                  color={'grey'}
                  fontSize={['15px', '25px', 'xl']}
                >
                  Bazar samiti , bhelai road , Vishnu nagar <br /> new era
                  school <br /> 8033
                </Text>
                <Text ml="50px" color={'grey'} fontSize="xl">
                  mobile: <span fontWeight="800">123456788</span>
                </Text>
                <li
                  style={{
                    margin: '20px',
                    marginLeft: '50px',
                    fontSize: '20px',
                    color: 'grey',
                  }}
                >
                  Pay on Delivery available
                </li>
              </Box>

              <ButtonGroup gap="4" ml="50px">
                <Button border={'1px solid'} bg="white">
                  REMOVE
                </Button>
                <Button border={'1px solid'} bg="white">
                  EDIT
                </Button>
              </ButtonGroup>
            </Box>

            <Text
              color={'grey.200'}
              mt="20px"
              fontSize={['15px', '30px', 'xl']}
            >
              OTHERS ADDRESS
            </Text>

            {data.map((ele, ind) => {
              return (
                <Box
                  key={ele.ind}
                  // h="220px"
                  // w="90%"
                  //   border={'1px solid '}
                  borderRadius={'20px'}
                  borderTopColor="red.200"
                  mt="20px"
                  boxShadow={'xl'}
                  border="2px solid grey"
                  h={['auto', '400px', ' 220px']}
                  w={['320px', '400px', '90%']}
                  // mb={['', '', '50px']}
                >
                  <Box>
                    <Flex gap={10} mb="20px" ml="50px">
                      <Radio colorScheme="pink" size="lg" fontSize={'xl'}>
                        {ele.name}
                      </Radio>
                      <Button
                        border={'1px solid green'}
                        color="green"
                        ml="20px"
                        bg="white"
                        p="0 20px"
                        borderRadius={'50px'}
                        mt="5px"
                      >
                        Home
                      </Button>
                    </Flex>

                    <Text mb="20px" ml="50px" color={'grey'} fontSize="xl">
                      {ele.address}
                    </Text>
                    <Text ml="50px" color={'grey'} fontSize="xl">
                      mobile: <span fontWeight="800">{ele.moblie}</span>
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box
            h={['auto', 'auto', '500px']}
            border={'3px solid '}
            w={['300px', '300px', '35%']}
            ml="30px"
          >
            <Text ml="10px" fontSize={'lg'} mb="20px">
              DELIVERY ESTIMATES
            </Text>
            <Box>
              <Flex gap={['5px', '7px', '20px']}>
                <Image
                  src={cartimg}
                  alt="product_img"
                  w="50px"
                  ml="20px"
                  mb="22px"
                ></Image>
                <Text fontSize={'lg'}>Estimate delivery by</Text>{' '}
                <span style={{ fontSize: '20px', fontWeight: '600' }}>
                  26 Dec 2022
                </span>
              </Flex>

              <Text fontSize={'lg'} fontWeight="800" mb="10px">
                PRICE DETAILS (1 Item)
              </Text>

              <Box>
                <Flex justifyContent={'space-between'} mt="2px" p="30px">
                  <Text fontSize={'lg'} fontWeight="700">
                    Total MRP
                  </Text>
                  <Text fontSize={'lg'} fontWeight="700">
                    1299
                  </Text>
                </Flex>

                <Flex justifyContent={'space-between'} mt="2px" p="30px">
                  <Text fontSize={'lg'} fontWeight="700">
                    Convenience Fee{' '}
                  </Text>
                  <Text fontSize={'lg'} fontWeight="700">
                    <strike style={{ color: 'grey' }}>49</strike>{' '}
                    <span style={{ color: 'grey' }}>FREE</span>
                  </Text>
                </Flex>

                <hr></hr>

                <Flex justifyContent={'space-between'} mt="2px" p="30px">
                  <Text fontSize={'xl'} fontWeight="700">
                    Total Amount
                  </Text>
                  <Text fontSize={'lg'} fontWeight="700">
                    1299
                  </Text>
                </Flex>

                <Button
                  w="100%"
                  border={'1px solid white'}
                  bg="pink.400"
                  P="100px"
                >
                  CONTINUE
                </Button>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box
        h="auto"
        w="100%"
        border={'1px solid white'}
        mt={['', '20px', '40px']}
      >
        <Flex
          flexWrap={'wrap'}
          align="center"
          justifyContent={'center'}
          p="30px"
        >
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png"></Image>
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"></Image>
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"></Image>
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"></Image>
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png"></Image>

          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png"></Image>
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png"></Image>
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png"></Image>
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"></Image>
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png"></Image>

          <Spacer />
          <Text fontSize={'lg'} fontWeight="900">
            Need Help ? Contact Us
          </Text>
        </Flex>
      </Box>
    </div>
  );
};

export default Address;
