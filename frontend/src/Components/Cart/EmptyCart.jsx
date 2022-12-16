import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

const EmptyCart = () => {
	return (
		<Box>
			<Box w={"300px"} m={"auto"} my={"70px"}>
				<Box width={"150px"} margin="auto">
					<Image src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" />
				</Box>
				<Text
					mt={5}
					mb={"2px"}
					textAlign="center"
					fontSize={"20px"}
					fontWeight="bold"
				>
					Hey, it feels so light!
				</Text>

				<Text mb={"20px"} textAlign="center" fontSize={"12px"}>
					There is nothing in your bag. Let's add some items.
				</Text>
				<Button
					display={"block"}
					colorScheme="pink"
					variant="outline"
					fontSize={"15px"}
					borderRadius="none"
					width={"85%"}
					margin="auto"
				>
					ADD ITEMS FROM WISHLIST
				</Button>
			</Box>
		</Box>
	);
};

export default EmptyCart;
