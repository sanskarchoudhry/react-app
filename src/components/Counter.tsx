import { useState } from "react";
import { Box, Button, HStack, VStack, Text, Heading } from "@chakra-ui/react";
import { useSpring, animated } from "@react-spring/web";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Dynamic background color transition based on count
  const backgroundStyle = useSpring({
    backgroundColor: `rgba(59, 130, 246, ${Math.min(count / 10, 1)})`, // Tailwind "blue-500"
    config: { tension: 150, friction: 20 },
  });

  return (
    <animated.div
      style={backgroundStyle}
      className="w-full min-h-screen flex items-center justify-center"
    >
      {/* <Box
        className="bg-white p-10 rounded-2xl shadow-xl flex flex-col items-center space-y-6 transition-all duration-300"
        maxW="md"
      > */}
      <VStack className="flex items-center justify-center">
        <Heading size="lg" className="text-gray-800 text-center">
          Counter
        </Heading>
        <Text fontSize="4xl" fontWeight="bold" className="text-blue-600">
          {count}
        </Text>
        <HStack gap={4} className="w-full flex flex-row">
          <Button
            colorScheme="blue"
            size="lg"
            className=" font-semibold bg-sky-500"
            onClick={() => setCount(count + 1)}
          >
            +
          </Button>
          <Button
            colorScheme="red"
            size="lg"
            className=" font-semibold bg-red-500"
            onClick={() => setCount(count > 0 ? count - 1 : 0)}
          >
            -
          </Button>
        </HStack>
        <Button
          colorScheme="gray"
          size="lg"
          className="w-full font-semibold"
          onClick={() => setCount(0)}
        >
          Reset
        </Button>
      </VStack>
      {/* </Box> */}
    </animated.div>
  );
};

export default Counter;
