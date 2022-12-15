import {
	Badge,
	Box,
	Flex,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	Spacer,
	Text,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import { SlUser } from "react-icons/sl";
import { SlHandbag } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import { Search2Icon } from "@chakra-ui/icons";
import NavbarDropDown from "./NavbarDropDown";

const links = [
	//************Men***************
	{
		name: "MEN",
	},
	{
		name: "WOMEN",
	},

	{
		name: "KIDS",
	},
	{
		name: "HOME & LIVING",
	},
	{
		name: "BEAUTY",
	},
	{
		name: "STUDIO",
		badge: "NEW",
	},
];

const One = [
	//Men - 1
	{
		heading: "Topwear",

		sub: [
			"T-Shirts",
			"Casual Shirts",
			"Formal Shirts",
			"Sweatshirts",
			"Sweaters",
			"Jackets",
			"Blazers & Coats",
			"Suits",
			"Rain Jackets",
		],
	},
	{
		heading: "Indian & Festive Wear",

		sub: ["Kurtas & Kurta Sets", "Sherwanis", "Nehru Jackets", "Dhotis"],
	},
];

const Two = [
	//men - 2
	{
		heading: "Bottomwear",

		sub: [
			"Jeans",
			"Casual Trousers",
			"Formal Trousers",
			"Shorts",
			"Track Pants & Joggers",
		],
	},
	{
		heading: "Innerwear & Sleepwear",

		sub: [
			"Briefs & Trunks",
			"Boxers",
			"Vests",
			"Sleepwear & Loungewear",
			"Thermals",
		],
	},
	{
		heading: "Plus Size",
	},
];

const Three = [
	//Men-3
	{
		heading: "Footwear",

		sub: [
			"Casual Shoes",
			"Sports Shoes",
			"Formal Shoes",
			"Sneakers",
			"Sandals & Floaters",
			"Flip Flops",
			"Socks",
		],
	},

	{
		heading: "Personal Care & Grooming",
	},
	{
		heading: "Sunglasses & Frames",
	},
	{
		heading: "Watches",
	},
];

const Four = [
	//Men -4
	{
		heading: "Sports & Active Wear",

		sub: [
			"Sports Shoes",
			"Sports Sandals",
			"Active T-Shirts",
			"Track Pants & Shorts",
			"Tracksuits",
			"Jackets & Sweatshirts",
			"Sports Accessories",
			"Swimwear",
		],
	},
	{
		heading: "Gadgets",

		sub: ["Smart Wearables", "Fitness Gadgets", "Headphones", "Speakers"],
	},
];

const Five = [
	{
		heading: "Fashion Accessories",

		sub: [
			"Wallets",
			"Belts",
			"Perfumes & Body Mists",
			"Trimmers",
			"Deodorants",
			"Ties, Cufflinks & Pocket Squares",
			"Accessory Gift Sets",
			"Caps & Hats",
			"Mufflers, Scarves & Gloves",
			"Phone Cases",
			"Rings & Wristwear",
			"Helmets",
		],
	},

	{
		heading: "Bags & Backpacks",
	},
	{
		heading: "Luggages & Trolleys",
	},
];

const Navbar = () => {
	return (
		<Box>
			<Box
				w="100%"
				border={"1px solid teal.200"}
				boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
				p={"15px 2.5% 10px"}
				top="0"
				left="0"
				position="fixed"
				zIndex="100000000"
				visibility="none"
			>
				<Flex align={"center"} gap="25px">
					<Box>
						<Image
							width={"100px"}
							src="https://images.indianexpress.com/2021/01/myntra.png"
							alt="myntra logo"
						/>
					</Box>

					{/* navbar div items */}
					{links.map((ele) => (
						<NavbarDropDown
							name={ele.name}
							badge={ele.badge}
							one={One}
							two={Two}
							three={Three}
							four={Four}
							five={Five}
						/>
					))}

					<Spacer />

					<Box mr={4}>
						{/* <Input placeContent={'search'} borderRadius="10px" p="10px 80px" mr="100px" /> */}
						<InputGroup>
							<InputLeftElement
								pointerEvents="none"
								children={<Search2Icon color="gray.300" />}
							/>
							<Input
								type="tel"
								placeholder="Search for product and more"
								p="7px 10px 10px 40px"
								variant="filled"
								// bg="#F5F5F5"
								color={"black"}
								width="400px"
							/>
						</InputGroup>
					</Box>
					<Box width={20} w={"40px"}>
						<Box margin={"auto"} width={"20px"}>
							{<SlUser fontSize={20} fontWeight="bold" />}{" "}
						</Box>
						<Text fontSize="10.5px" mt={1} fontWeight={"bold"}>
							Profile
						</Text>
					</Box>
					<Box w={"40px"}>
						<Box margin={"auto"} width={"20px"}>
							{<SlHeart fontSize={20} fontWeight="bold" />}{" "}
						</Box>
						<Text fontSize="10.5px" mt={1} fontWeight={"bold"}>
							Wishlist
						</Text>
					</Box>
					<Box>
						<VStack w={"40px"} spacing={-6}>
							<Box margin={"auto"} width={"20px"}>
								{<SlHandbag fontSize={20} fontWeight={"bold"} />}{" "}
							</Box>
							<Box>
								<Badge
									variant="solid"
									colorScheme="green"
									ml={"30px"}
									mt="-15px"
								>
									1
								</Badge>
							</Box>
						</VStack>
						<Text fontSize="10.5px" mt={1} fontWeight={"bold"}>
							Bag
						</Text>
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};

export default Navbar;
