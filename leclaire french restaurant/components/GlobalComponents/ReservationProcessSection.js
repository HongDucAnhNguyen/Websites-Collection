import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "./Layout";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import Step1Img from "../../public/assets/images/step1.jpg";
import Step2Img from "../../public/assets/images/step2.jpg";
import Step3Img from "../../public/assets/images/step3.jpg";
import responsiveStyles from '../../app/styles/responsive/services.module.css'
const ReservationProcessSection = () => {
  return (
    <Box bg="black">
      <Layout>
        <Box mt={20} mb={20}>
          <SectionHeading
            content="Reservation Process"
            align="center"
          ></SectionHeading>

          <Flex p={5} className={responsiveStyles.reservationProcessSectionContainer} gap={20} mt={10} justifyContent="center" alignItems="center" >
            <Box>
              <Box position="relative" width={70} height={50}>
                <Image fill src={Step1Img} alt="step 1"></Image>
              </Box>
              <Stack
                pt={5}
                gap={5}
                color="white"
                fontSize={18}
                fontFamily="Open Sans"
                maxW={400}
              >
                <Text>
                  Use the form below to fill out information about your
                  reservation, please specify any special requests you may have.
                </Text>
                <Text>
                  Please look out for us reaching you. We try our best to get in
                  touch in a timely manner (2-3 hours).
                </Text>
                <Text>
                  The reservation will be further discussed via phone call or
                  email if you prefer.
                </Text>
              </Stack>
            </Box>
            <Box>
              <Box position="relative" width={70} height={50}>
                <Image fill src={Step2Img} alt="step 1"></Image>
              </Box>
              <Stack
                pt={5}
                gap={5}
                color="white"
                fontSize={18}
                fontFamily="Open Sans"
                maxW={400}
              >
                <Text>
                  If the booking is confirmed, you will receive an email
                  containing the details of your reservation and a link attached
                  for payment.
                </Text>
                <Text>
                  Click on the link, it will lead you to a secure payment portal
                  where you can fill out your payment details and pay.
                </Text>
                <Text>
                  Should there be any problems or mistakes, contact us via the
                  information provided on the site.
                </Text>
              </Stack>
            </Box>
            <Box>
              <Box position="relative" width={70} height={50}>
                <Image fill src={Step3Img} alt="step 1"></Image>
              </Box>
              <Stack
                pt={5}
                gap={5}
                color="white"
                fontSize={18}
                fontFamily="Open Sans"
                maxW={400}
              >
                <Text>
                  {" "}
                  You will once again receive an email finalizing the details of
                  your reservation and a receipt confirming your payment.
                </Text>
                <Text>
                  There is also a link attached for cancellations that you
                  should keep. Note the cancellation policy mentioned.
                </Text>
                <Text>
                  {" "}
                  Should there be any problems or mistakes, contact us via the
                  information provided on the site.
                </Text>
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Layout>
    </Box>
  );
};

export default ReservationProcessSection;
