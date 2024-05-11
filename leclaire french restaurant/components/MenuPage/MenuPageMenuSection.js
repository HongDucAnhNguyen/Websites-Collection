import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../GlobalComponents/Layout";
import Image from "next/image";
import appetizer1Img from "../../public/assets/images/appetizer1.jpg";
import appetizer2Img from "../../public/assets/images/appetizer2.jpg";
import appetizer3Img from "../../public/assets/images/appetizer3.jpg";
import mainCourse1Img from "../../public/assets/images/maincourse1.jpg";
import mainCourse2Img from "../../public/assets/images/maincourse2.jpg";
import mainCourse3Img from "../../public/assets/images/maincourse3.jpg";
import dessert1Img from "../../public/assets/images/dessert1.jpg";
import dessert2Img from "../../public/assets/images/dessert2.jpg";
import dessert3Img from "../../public/assets/images/dessert3.jpg";
import dessert4Img from "../../public/assets/images/dessert4.jpg";
import dessert5Img from "../../public/assets/images/dessert5.jpg";

import drink1Img from "../../public/assets/images/drink1.jpg";
import drink2Img from "../../public/assets/images/drink2.jpg";
import drink3Img from "../../public/assets/images/drink3.jpg";
import drink4Img from "../../public/assets/images/drink4.jpg";
import styles from "../../app/styles/menu.module.css";
const MenuPageMenuSection = () => {
  return (
    <Box bg="#303030">
      <Layout>
        <Flex alignItems="center" direction="column" mt={20} mb={20}>
          <Flex gap={10} className={styles.menupageMenuContainer}>
            <Box>
              <Text color="#DCB015" fontWeight="bold" fontSize={24}>
                Appetizers
              </Text>
              <Flex gap={10} paddingTop={10}>
                <Flex
                  className={styles.menuDishContainer}
                  gap={7}
                  bg="black"
                  borderRadius={7}
                  p={5}
                >
                  <Box
                    position="relative"
                    className={styles.menuDishImgContainer}
                  >
                    <Image
                      style={{ objectFit: "cover" }}
                      quality={100}
                      fill={true}
                      src={appetizer1Img}
                      alt="appetizer 1"
                    ></Image>
                  </Box>
                  <Box
                    fontSize={18}
                    fontFamily="Open Sans"
                    color="white"
                    maxW={250}
                  >
                    <Text fontWeight="bold">Escargot à la Bourguignonne</Text>
                    <Text mt={5}>
                      Tender snails cooked in garlic butter and parsley, served
                      with crusty baguette.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
              <Flex gap={10} paddingTop={10}>
                <Flex
                  className={styles.menuDishContainer}
                  gap={7}
                  bg="black"
                  borderRadius={7}
                  p={5}
                >
                  <Box
                    position="relative"
                    className={styles.menuDishImgContainer}
                  >
                    <Image
                      style={{ objectFit: "cover" }}
                      quality={100}
                      fill={true}
                      src={appetizer2Img}
                      alt="appetizer 1"
                    ></Image>
                  </Box>
                  <Box
                    fontSize={18}
                    fontFamily="Open Sans"
                    color="white"
                    maxW={250}
                  >
                    <Text fontWeight="bold">Soupe à l'Oignon</Text>
                    <Text mt={5}>
                      Classic French onion soup topped with melted Gruyère
                      cheese and toasted baguette slices.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
              <Flex gap={10} paddingTop={10}>
                <Flex
                  className={styles.menuDishContainer}
                  gap={7}
                  bg="black"
                  borderRadius={7}
                  p={5}
                >
                  <Box
                    position="relative"
                    className={styles.menuDishImgContainer}
                  >
                    <Image
                      style={{ objectFit: "cover" }}
                      quality={100}
                      fill={true}
                      src={appetizer3Img}
                      alt="appetizer 1"
                    ></Image>
                  </Box>
                  <Box
                    fontSize={18}
                    fontFamily="Open Sans"
                    color="white"
                    maxW={250}
                  >
                    <Text fontWeight="bold">Salade Niçoise</Text>
                    <Text mt={5}>
                      A refreshing salad featuring fresh tuna, hard-boiled eggs,
                      vegetables drizzled with a Dijon vinaigrette.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Box>
            <Box>
              <Text color="#DCB015" fontWeight="bold" fontSize={24}>
                Main Courses
              </Text>
              <Flex gap={10} paddingTop={10}>
                <Flex
                  className={styles.menuDishContainer}
                  gap={7}
                  bg="black"
                  borderRadius={7}
                  p={5}
                >
                  <Box
                    position="relative"
                    className={styles.menuDishImgContainer}
                  >
                    <Image
                      style={{ objectFit: "cover" }}
                      quality={100}
                      fill={true}
                      src={mainCourse1Img}
                      alt="appetizer 1"
                    ></Image>
                  </Box>
                  <Box
                    fontSize={18}
                    fontFamily="Open Sans"
                    color="white"
                    maxW={250}
                  >
                    <Text fontWeight="bold">Coq au vin</Text>
                    <Text mt={5}>
                      Tender chicken braised in red wine with mushrooms, onions,
                      and bacon, served with buttery mashed potatoes.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
              <Flex gap={10} paddingTop={10}>
                <Flex
                  className={styles.menuDishContainer}
                  gap={7}
                  bg="black"
                  borderRadius={7}
                  p={5}
                >
                  <Box
                    position="relative"
                    className={styles.menuDishImgContainer}
                  >
                    <Image
                      style={{ objectFit: "cover" }}
                      quality={100}
                      fill={true}
                      src={mainCourse2Img}
                      alt="appetizer 1"
                    ></Image>
                  </Box>
                  <Box
                    fontSize={18}
                    fontFamily="Open Sans"
                    color="white"
                    maxW={250}
                  >
                    <Text fontWeight="bold">Boeuf Bourguignon</Text>
                    <Text mt={5}>
                      Slow-cooked beef stewed in red wine with carrots, onions,
                      and mushrooms, served over creamy mashed potatoes.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
              <Flex gap={10} paddingTop={10}>
                <Flex
                  className={styles.menuDishContainer}
                  gap={7}
                  bg="black"
                  borderRadius={7}
                  p={5}
                >
                  <Box
                    position="relative"
                    className={styles.menuDishImgContainer}
                  >
                    <Image
                      style={{ objectFit: "cover" }}
                      quality={100}
                      fill={true}
                      src={mainCourse3Img}
                      alt="appetizer 1"
                    ></Image>
                  </Box>
                  <Box
                    fontSize={18}
                    fontFamily="Open Sans"
                    color="white"
                    maxW={250}
                  >
                    <Text fontWeight="bold">Moules Marinières</Text>
                    <Text mt={5}>
                      Fresh mussels steamed in a flavorful broth, garlic,
                      shallots, and parsley, served with crispy French fries.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Flex>

          <Divider mt={20} mb={20}></Divider>

          <Flex gap={10} className={styles.menupageMenuContainer}>
            <Box>
              <Text color="#DCB015" fontWeight="bold" fontSize={24}>
                Desserts
              </Text>
              <Flex gap={10} paddingTop={10}>
                <Flex
                  className={styles.menuDishContainer}
                  gap={7}
                  bg="black"
                  borderRadius={7}
                  p={5}
                >
                  <Box
                    position="relative"
                    className={styles.menuDishImgContainer}
                  >
                    <Image
                      style={{ objectFit: "cover" }}
                      quality={100}
                      fill={true}
                      src={dessert1Img}
                      alt="appetizer 1"
                    ></Image>
                  </Box>
                  <Box
                    fontSize={18}
                    fontFamily="Open Sans"
                    color="white"
                    maxW={250}
                  >
                    <Text fontWeight="bold">Crème Brûlée</Text>
                    <Text mt={5}>
                      Creamy vanilla custard with a caramelized sugar crust,
                      served with fresh berries.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
              <Flex gap={10} paddingTop={10}>
                <Flex
                  className={styles.menuDishContainer}
                  gap={7}
                  bg="black"
                  borderRadius={7}
                  p={5}
                >
                  <Box
                    position="relative"
                    className={styles.menuDishImgContainer}
                  >
                    <Image
                      style={{ objectFit: "cover" }}
                      quality={100}
                      fill={true}
                      src={dessert2Img}
                      alt="appetizer 1"
                    ></Image>
                  </Box>
                  <Box
                    fontSize={18}
                    fontFamily="Open Sans"
                    color="white"
                    maxW={250}
                  >
                    <Text fontWeight="bold">Profiteroles au Chocolat</Text>
                    <Text mt={5}>
                      Light and airy choux pastry filled with vanilla ice cream
                      and drizzled with warm chocolate sauce.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
              <Flex gap={10} paddingTop={10}>
                <Flex
                  className={styles.menuDishContainer}
                  gap={7}
                  bg="black"
                  borderRadius={7}
                  p={5}
                >
                  <Box
                    position="relative"
                    className={styles.menuDishImgContainer}
                  >
                    <Image
                      style={{ objectFit: "cover" }}
                      quality={100}
                      fill={true}
                      src={dessert3Img}
                      alt="appetizer 1"
                    ></Image>
                  </Box>
                  <Box
                    fontSize={18}
                    fontFamily="Open Sans"
                    color="white"
                    maxW={250}
                  >
                    <Text fontWeight="bold"> Pain Perdu</Text>
                    <Text mt={5}>
                      Classic French Toast, served with maple syrup, fresh
                      berries and banana slices.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
              <Flex gap={10} paddingTop={10}>
                <Flex
                  className={styles.menuDishContainer}
                  gap={7}
                  bg="black"
                  borderRadius={7}
                  p={5}
                >
                  <Box
                    position="relative"
                    className={styles.menuDishImgContainer}
                  >
                    <Image
                      style={{ objectFit: "cover" }}
                      quality={100}
                      fill={true}
                      src={dessert4Img}
                      alt="appetizer 1"
                    ></Image>
                  </Box>
                  <Box
                    fontSize={18}
                    fontFamily="Open Sans"
                    color="white"
                    maxW={250}
                  >
                    <Text fontWeight="bold"> Quiche Lorraine</Text>
                    <Text mt={5}>
                      A classic French tart filled with bacon, Gruyère cheese,
                      and savory custard, baked to golden perfection.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
              <Flex gap={10} paddingTop={10}>
                <Flex
                  className={styles.menuDishContainer}
                  gap={7}
                  bg="black"
                  borderRadius={7}
                  p={5}
                >
                  <Box
                    position="relative"
                    className={styles.menuDishImgContainer}
                  >
                    <Image
                      style={{ objectFit: "cover" }}
                      quality={100}
                      fill={true}
                      src={dessert5Img}
                      alt="appetizer 1"
                    ></Image>
                  </Box>
                  <Box
                    fontSize={18}
                    fontFamily="Open Sans"
                    color="white"
                    maxW={250}
                  >
                    <Text fontWeight="bold">Tarte Tatin</Text>
                    <Text mt={5}>
                      Classic French apple tart with caramelized apples baked in
                      a buttery pastry crust, served warm with a dollop of crème
                      fraîche.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Box>
            <Box>
              <Text color="#DCB015" fontWeight="bold" fontSize={24}>
                Beverages
              </Text>

              <Flex gap={10} paddingTop={10}>
                <Flex
                  className={styles.menuDishContainer}
                  gap={7}
                  bg="black"
                  borderRadius={7}
                  p={5}
                >
                  <Box
                    position="relative"
                    className={styles.menuDishImgContainer}
                  >
                    <Image
                      style={{ objectFit: "cover" }}
                      quality={100}
                      fill={true}
                      src={drink1Img}
                      alt="appetizer 1"
                    ></Image>
                  </Box>
                  <Box
                    fontSize={18}
                    fontFamily="Open Sans"
                    color="white"
                    maxW={250}
                  >
                    <Text fontWeight="bold">Freshly Squeezed Juices</Text>
                    <Text mt={5}>
                      Enjoy a refreshing selection of freshly squeezed juices,
                      including orange, grapefruit, and apple, bursting with
                      natural flavors.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
              <Flex gap={10} paddingTop={10}>
                <Flex
                  className={styles.menuDishContainer}
                  gap={7}
                  bg="black"
                  borderRadius={7}
                  p={5}
                >
                  <Box
                    position="relative"
                    className={styles.menuDishImgContainer}
                  >
                    <Image
                      style={{ objectFit: "cover" }}
                      quality={100}
                      fill={true}
                      src={drink2Img}
                      alt="appetizer 1"
                    ></Image>
                  </Box>
                  <Box
                    fontSize={18}
                    fontFamily="Open Sans"
                    color="white"
                    maxW={250}
                  >
                    <Text fontWeight="bold">Artisanal Teas and Coffees</Text>
                    <Text mt={5}>
                      Conclude your meal with a selection of fine teas and
                      coffees, including French press coffee and herbal
                      infusions
                    </Text>
                  </Box>
                </Flex>
              </Flex>
              <Flex gap={10} paddingTop={10}>
                <Flex
                  className={styles.menuDishContainer}
                  gap={7}
                  bg="black"
                  borderRadius={7}
                  p={5}
                >
                  <Box
                    position="relative"
                    className={styles.menuDishImgContainer}
                  >
                    <Image
                      style={{ objectFit: "cover" }}
                      quality={100}
                      fill={true}
                      src={drink3Img}
                      alt="appetizer 1"
                    ></Image>
                  </Box>
                  <Box
                    fontSize={18}
                    fontFamily="Open Sans"
                    color="white"
                    maxW={250}
                  >
                    <Text fontWeight="bold"> Crafted Mocktails</Text>
                    <Text mt={5}>
                      Indulge in our handcrafted mocktails, expertly blended
                      with fresh fruits and herbs, offering a delightful
                      alternative to traditional cocktails.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
              <Flex gap={10} paddingTop={10}>
                <Flex
                  className={styles.menuDishContainer}
                  gap={7}
                  bg="black"
                  borderRadius={7}
                  p={5}
                >
                  <Box
                    position="relative"
                    className={styles.menuDishImgContainer}
                  >
                    <Image
                      style={{ objectFit: "cover" }}
                      quality={100}
                      fill={true}
                      src={drink4Img}
                      alt="appetizer 1"
                    ></Image>
                  </Box>
                  <Box
                    fontSize={18}
                    fontFamily="Open Sans"
                    color="white"
                    maxW={250}
                  >
                    <Text fontWeight="bold"> Water</Text>
                    <Text mt={5}>
                      Stay hydrated with our refreshing filtered water, served
                      with a slice of lemon or lime upon request.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Layout>
    </Box>
  );
};

export default MenuPageMenuSection;
