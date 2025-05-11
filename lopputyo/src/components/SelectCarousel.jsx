import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Box, Button, Stack, useBreakpointValue } from "@chakra-ui/react";
import SelectCard from "./SelectCard";
import feeds from "../feeds.json";
import { Link } from 'react-router-dom';

export default function SelectCarousel() {
  const responsiveGap = useBreakpointValue({
    base: 25,
    sm: 25,
    md: 350,
    xl: 350,
  });

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Box maxW="400px" mx="auto" position="relative">
      {/* Custom Left Button */}
      <Button
        ref={prevRef}
        position="absolute"
        top="50%"
        left="-30px"
        transform="translateY(-50%)"
        zIndex={2}
        bg="white"
        borderRadius="full"
        boxSize="48px"
        minW="0"
        boxShadow="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
        _hover={{ bg: "gray.200" }}
      >
        <svg width="24" height="24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </Button>
      {/* Custom Right Button */}
      <Button
        ref={nextRef}
        position="absolute"
        top="50%"
        right="-30px"
        transform="translateY(-50%)"
        zIndex={2}
        bg="white"
        borderRadius="full"
        boxSize="48px"
        minW="0"
        boxShadow="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
        _hover={{ bg: "gray.200" }}
      >
        <svg width="24" height="24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </Button>

      <Swiper
        spaceBetween={responsiveGap || 25}
        slidesPerView={1}
        loop={false}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {feeds.map((bubble) => (
          <SwiperSlide key={bubble.heading}>
            <Stack>
              <SelectCard data={bubble} />
              <Button
                as={Link}
                to={`/feed/${bubble.heading}`}
                bg="kuplassa.kupla3"
                mx="30px"
                width="80%"
                mt="15px"
                maxWidth="334px"
                fontSize="30px"
                padding={8}
                borderRadius="15px"
                boxShadow="lg"
                color="black"
              >
                SUKELLA KUPLAAN
              </Button>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
