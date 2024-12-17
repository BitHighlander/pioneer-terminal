'use client'

import React from 'react';
import { Box, Heading, Text, Image, Button } from '@chakra-ui/react';
import { List } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

export const Blockchains = ({ setPage }: any) => {
    return (
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
          <Box width="50%">
              <Heading size="lg" color="blue.600">Discover Blockchains</Heading>
              <Text fontSize="md" mt={3}>
                  Dive into blockchain technology with Pioneers:
              </Text>

              <List.Root gap="2" variant="plain" mt={2} mb={3}>
                  <List.Item>
                      <List.Indicator asChild color="green.500">
                          <MdCheckCircle />
                      </List.Indicator>
                      Charting and indexing block explorers for seamless access to data.
                  </List.Item>
                  <List.Item>
                      <List.Indicator asChild color="green.500">
                          <MdCheckCircle />
                      </List.Indicator>
                      Ensuring reliable, live data for deep blockchain engagement.
                  </List.Item>
                  <List.Item>
                      <List.Indicator asChild color="green.500">
                          <MdCheckCircle />
                      </List.Indicator>
                      Supported by expert and AI-driven insights to optimize interactions.
                  </List.Item>
              </List.Root>

              <Button colorScheme="blue" size="lg" onClick={() => setPage('landing')}>
                  Go Back
              </Button>
          </Box>
          <Box width="50%">
              <Image
                src="https://i.imgur.com/ZHPnNSy.png"
                alt="Blockchain Overview"
                boxSize="100%"
              />
          </Box>
      </Box>
    );
}

export default Blockchains;
