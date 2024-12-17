'use client'

import React from 'react';
import { Box, Heading, Text, Image, Button } from '@chakra-ui/react';
import { Table } from '@chakra-ui/react';

export const Leaderboard = ({ setPage }:any) => {
    return (
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
          <Box width="70%">
              <Heading size="lg" color="blue.600">Pioneer Leaderboard</Heading>
              <Text fontSize="md" mt={3} mb={3}>
                  Top Pioneers are rewarded for their contributions with access to exclusive tools and features. At the heart of Pioneer is an AI-driven system designed to assist and elevate the efforts of our most active members.
              </Text>

              <Table.Root variant="simple" mt={4}>
                  <Table.Header>
                      <Table.Row>
                          <Table.ColumnHeader>Avatar</Table.ColumnHeader>
                          <Table.ColumnHeader>Pioneer</Table.ColumnHeader>
                          <Table.ColumnHeader textAlign="end">Points</Table.ColumnHeader>
                      </Table.Row>
                  </Table.Header>
                  <Table.Body>
                      <Table.Row>
                          <Table.Cell>
                              <Image
                                src="https://pioneers.dev/coins/bithighlander_Depict_a_pioneer_casting_a_magical_spell_of_smart_b021fcff-a67b-4595-a79e-74980ba3d108_4.png"
                                boxSize="50px"
                                alt="Pioneer 1"
                              />
                          </Table.Cell>
                          <Table.Cell>Pioneer01</Table.Cell>
                          <Table.Cell textAlign="end">1520</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                          <Table.Cell>
                              <Image
                                src="https://pioneers.dev/coins/bithighlander_Illustrate_a_pioneer_of_Litecoin_mining_the_first_168530de-0558-4d3a-8a44-352151346593_2.png"
                                boxSize="50px"
                                alt="Pioneer 2"
                              />
                          </Table.Cell>
                          <Table.Cell>Charter10</Table.Cell>
                          <Table.Cell textAlign="end">1385</Table.Cell>
                      </Table.Row>
                  </Table.Body>
              </Table.Root>

              <Button colorScheme="blue" size="lg" mt={4} onClick={() => setPage('landing')}>
                  Go Back
              </Button>
          </Box>
          <Box width="30%">
              <Image
                src="https://i.imgur.com/1CeVQtw.png"
                alt="Pioneer Activities"
                boxSize="100%"
              />
          </Box>
      </Box>
    );
}

export default Leaderboard;
