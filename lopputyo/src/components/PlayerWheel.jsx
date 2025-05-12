import React from "react";
import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import InfoBar from "./Infobar";

const PlayerWheel = ( { onOpen } ) => {
  const navigate = useNavigate();
  const N = 6;

  // Responsive values for container, avatar size, and radius
  const containerSize = useBreakpointValue({ sm: 340, md: 400, lg: 500, "xxl": 600 });
  const avatarSize = useBreakpointValue({ sm: 70, md: 70, lg: 90, "xxl": 110 });
  const radius = useBreakpointValue({ sm: 100, md: 110, lg: 160, "xxl": 200 });

  // Calculate center based on container size
  const center = containerSize ? containerSize / 2 : 200;

  const avatars = Array.from({ length: N }).map((_, i) => {
    const angle = (2 * Math.PI * i) / N;
    const x = center + (radius ?? 120) * Math.cos(angle);
    const y = center + (radius ?? 120) * Math.sin(angle);
    return {
      x,
      y,
      src: `/avatar_${i + 1}.png`,
      alt: `Avatar ${i + 1}`,
    };
  });

  return (
    <Box
      position="relative"
      width={containerSize}
      height={containerSize}
      minWidth="200px"
      minHeight="200px"
      maxWidth="100vw"
      maxHeight="100vw"
      mx="auto"
    >
      {avatars.map((avatar, idx) => (
        <Image
          key={idx}
          src={avatar.src}
          alt={avatar.alt}
          position="absolute"
          left={avatar.x - (avatarSize ?? 70) / 2}
          top={avatar.y - (avatarSize ?? 70) / 2}
          boxSize={avatarSize}
          borderRadius="full"
        />
      ))}
      <Box
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
        onClick={() => 
        {
          if (window.innerWidth < 768) {
            console.log("moi")
            navigate("/select")
          }
          else{
            if (onOpen) {
              onOpen();
            }
          } 
        }}

 
      >
        <InfoBar text="Pelaa!" bg="#ADD1E0" color="black" size={avatarSize ? avatarSize * 1.7 : 120} />
      </Box>
    </Box>
  );
};

export default PlayerWheel;
