import { Box, VStack, Heading, Text, Image, SimpleGrid, Link } from '@chakra-ui/react';
import { FaCalendarAlt, FaTrophy, FaImage } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={8} p={5}>
      <Box textAlign="center">
        <Heading as="h1" size="2xl" mb={2}>Venus Williams</Heading>
        <Text fontSize="xl">Professional Tennis Player</Text>
        <Image borderRadius="full" boxSize="150px" src="/images/venus-williams.jpg" alt="Venus Williams" mt={4} />
      </Box>
      <SimpleGrid columns={[1, null, 2]} spacing={10} width="100%">
        <Box as="section" p={5} boxShadow="md" borderRadius="lg">
          <Heading as="h2" size="lg" mb={3}><FaTrophy /> Career Achievements</Heading>
          <Text>
            Venus Williams has won seven Grand Slam singles titles, five at Wimbledon and two at the US Open.
          </Text>
        </Box>
        <Box as="section" p={5} boxShadow="md" borderRadius="lg">
          <Heading as="h2" size="lg" mb={3}><FaCalendarAlt /> Upcoming Events</Heading>
          <Text>
            Check out Venus's upcoming tournaments and appearances:
            <Link href="#" color="teal.500" isExternal> View Events</Link>
          </Text>
        </Box>
        <Box as="section" p={5} boxShadow="md" borderRadius="lg">
          <Heading as="h2" size="lg" mb={3}><FaImage /> Gallery</Heading>
          <Text>
            Explore a collection of Venus Williams' photos from recent matches and events.
            <Link href="#" color="teal.500" isExternal> View Gallery</Link>
          </Text>
        </Box>
        <Box as="section" p={5} boxShadow="md" borderRadius="lg">
          <Heading as="h2" size="lg" mb={3}>Biography</Heading>
          <Text>
            Born on June 17, 1980, Venus Williams has been a powerful force in women's tennis since the late 1990s.
          </Text>
        </Box>
      </SimpleGrid>
    </VStack>
  );
};

export default Index;