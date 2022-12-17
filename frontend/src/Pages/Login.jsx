import React from "react";
import { FcGoogle } from "react-icons/fc";
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { login } from "../Redux/Auth/action";
import { Link as ReactLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box
      w="100%"
      h="100vh"
      bgGradient="linear(to-tl,yellow.50 0%, orange.50 25%, red.50 50%)"
    >
      <VStack p={8}>
        <Box w={400} height="100vh-137px" bg="#FFFFFF">
          <Box>
            <img
              src="https://assets.myntassets.com/dpr_1.5,q_auto,w_400,c_limit,fl_progressive/assets/images/2022/12/9/74786f11-eb3b-4677-9069-bb2e880263f91670575018339-offer-banner-500-600x240-code-_-MYNTRA500.jpg"
              alt=""
            />
          </Box>
          <VStack p={8} spacing={6}>
            <Heading
              fontSize="20px"
              color="#424553"
              fontWeight={600}
              letterSpacing={1}
            >
              Login
            </Heading>

            <FormControl>
              <Stack spacing={6}>
                <Input
                  type="email"
                  placeholder="Email"
                  borderRadius={false}
                  height={12}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  borderRadius={false}
                  height={12}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <Text
                  fontSize="sm"
                  color="#424553"
                  letterSpacing={1}
                  textAlign="left"
                >
                  By continuing, I agree to the{" "}
                  <Link fontWeight={600} color="#ff3c6f">
                    Terms of use
                  </Link>{" "}
                  &{" "}
                  <Link fontWeight={600} color="#ff3c6f">
                    Privacy Policy
                  </Link>
                </Text>
                <Button
                  bg="#ff3c6f"
                  borderRadius={false}
                  color="#ffffff"
                  _hover={false}
                  onClick={() => login(dispatch, email, password, navigate)}
                >
                  LOGIN
                </Button>

                <Button
                  leftIcon={<FcGoogle />}
                  colorScheme="black"
                  variant="outline"
                  borderRadius={false}
                >
                  Login with Google
                </Button>
                <Text
                  fontSize="sm"
                  color="#424553"
                  letterSpacing={1}
                  textAlign="left"
                >
                  Already have an account{" "}
                  <Link
                    as={ReactLink}
                    fontWeight={600}
                    color="#ff3c6f"
                    to="/signup"
                  >
                    Signup
                  </Link>
                </Text>
              </Stack>
            </FormControl>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Login;
