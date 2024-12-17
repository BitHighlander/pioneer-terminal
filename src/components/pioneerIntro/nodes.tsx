'use client'

import React from 'react';
import { Box, Heading, Text, Image, Button, Link } from '@chakra-ui/react';
import { Table, List } from '@chakra-ui/react'; // Ensure the new List components are imported
import { MdCheckCircle } from 'react-icons/md';

export const Nodes = ({ setPage }: any) => {
    return (
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
          <Box width="50%">
              <Heading size="lg" color="blue.600">Optimize Your Network with Pioneer</Heading>
              <Text fontSize="md" mt={3} mb={3}>
                  Pioneers are at the forefront of decentralized network management, providing essential tools and data to optimize blockchain interactions.
              </Text>
              <Text fontSize="md" mt={3} mb={3}>
                  Dive deep into the network with real-time insights:
              </Text>

              <List.Root gap="2" variant="plain" align="flex-start">
                  <List.Item>
                      <List.Indicator asChild color="green.500">
                          <MdCheckCircle />
                      </List.Indicator>
                      Map and monitor node uptimes
                  </List.Item>
                  <List.Item>
                      <List.Indicator asChild color="green.500">
                          <MdCheckCircle />
                      </List.Indicator>
                      Access detailed charts to select the best nodes for queries
                  </List.Item>
                  <List.Item>
                      <List.Indicator asChild color="green.500">
                          <MdCheckCircle />
                      </List.Indicator>
                      Get exclusive API access, fully documented by Swagger
                  </List.Item>
              </List.Root>

              <Link href="https://pioneers.dev/docs/" isExternal>
                  <Button colorScheme="blue" mt={4} size="lg">
                      View API Documentation
                  </Button>
              </Link>
              <Button colorScheme="blue" mt={4} size="lg" onClick={() => setPage('landing')}>
                  Go Back
              </Button>
          </Box>

          <Box width="50%">
              <Image
                src="https://i.imgur.com/vytTMJl.png"
                alt="Network Nodes"
                boxSize="100%"
              />
          </Box>
      </Box>
    );
}

export default Nodes;
