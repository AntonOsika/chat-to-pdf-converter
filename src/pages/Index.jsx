import { Box, Button, Checkbox, Container, Flex, Heading, IconButton, Input, List, ListItem, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaCloudUploadAlt, FaEye, FaPlus, FaRegFilePdf, FaSearchMinus, FaSearchPlus } from "react-icons/fa";

const Index = () => {
  const bgGradient = useColorModeValue("gray.600", "gray.800");
  const borderColor = useColorModeValue("gray.300", "gray.500");
  const textColor = useColorModeValue("white", "gray.200");

  return (
    <Box bgGradient={`linear(${bgGradient}, ${bgGradient})`} minH="100vh" color={textColor}>
      <Flex as="nav" bg={bgGradient} align="center" justify="space-between" wrap="wrap" p={6} borderBottomWidth="1px" borderColor={borderColor}>
        <Button leftIcon={<FaCloudUploadAlt />} colorScheme="gray">
          Upload PDF
        </Button>
      </Flex>

      <Container maxW="container.xl" mt={10}>
        <Flex>
          <Box w="250px" mr={10}>
            <Heading as="h3" size="md" mb={4}>
              PDF Files
            </Heading>
            <List spacing={2}>
              <ListItem d="flex" alignItems="center">
                <Checkbox size="lg" colorScheme="gray" mr={2} />
                smartwatch_user_guide.pdf
              </ListItem>
              <ListItem d="flex" alignItems="center">
                <Checkbox size="lg" colorScheme="gray" mr={2} />
                CV.pdf
              </ListItem>
            </List>
          </Box>

          <VStack flex="1" borderWidth="1px" borderColor={borderColor} p={4} spacing={4}>
            <Flex w="full" justify="space-between">
              <IconButton aria-label="Zoom out" icon={<FaSearchMinus />} />
              <IconButton aria-label="Zoom in" icon={<FaSearchPlus />} />
              <IconButton aria-label="View PDF" icon={<FaEye />} />
            </Flex>
            <Box w="full" h="500px" bgGradient={`linear(${bgGradient}, ${bgGradient})`} d="flex" alignItems="center" justifyContent="center">
              <FaRegFilePdf size="5rem" />
              <Heading as="h2" size="lg" ml={4}>
                SMART WATCH USER GUIDE
              </Heading>
            </Box>
            <Flex w="full" justify="center">
              <Box p={10} borderWidth="2px" borderStyle="dashed" borderColor={borderColor} w="full" textAlign="center">
                <FaCloudUploadAlt size="3rem" />
                <Text mt={2}>Drag and drop your PDF file here</Text>
              </Box>
            </Flex>
            <Box w="full">
              <Input placeholder="Ask any question" size="lg" />
            </Box>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;
