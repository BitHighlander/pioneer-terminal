'use client'

import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Image, Stack, Button } from '@chakra-ui/react';
import { Table } from '@chakra-ui/react';
import axios from 'axios';

export const Assets = ({ setPage }:any) => {
    const [data, setData] = useState({
        usersOnline: "0",
        info: {
            users: "0",
            assets: "0",
            blockchains: "0",
            nodes: "0",
            devs: "0",
            dapps: "0"
        }
    });

    // Function to fetch data
    const fetchData = async () => {
        try {
            const response = await axios.get('https://pioneers.dev/api/v1/globals');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    // UseEffect to fetch data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    // UseEffect to periodically bump numbers
    useEffect(() => {
        let timeoutId:any;

        const bumpNumbers = () => {
            setData(prevData => ({
                ...prevData,
                info: {
                    ...prevData.info,
                    assets: String(Number(prevData.info.assets) + 1),
                    blockchains: String(Number(prevData.info.blockchains) + 1),
                    nodes: String(Number(prevData.info.nodes) + 1),
                    dapps: String(Number(prevData.info.dapps) + 1)
                }
            }));
        };

        const randomTimeBump = () => {
            const timeInterval = Math.random() * (16000 - 3000) + 3000; // Random time between 3 and 16 seconds
            timeoutId = setTimeout(() => {
                bumpNumbers();
                randomTimeBump(); // Recursively call to continue at new random intervals
            }, timeInterval);
        };

        randomTimeBump();

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
          <Box width="50%">
              <Heading size="lg" color="blue.600">Asset Management Dashboard</Heading>
              <Text fontSize="md" mt={3} mb={3}>
                  Pioneers meticulously track and manage CAIPs, consistently uncovering and indexing new assets to create comprehensive, embeddable lists for your applications.
              </Text>
              <Text fontSize="md" mt={3} mb={3}>
                  Utilize our expansive and dynamic asset database, which extends well beyond conventional coin lists, offering a rich resource for developers and investors alike.
              </Text>

              <Table.Root variant="striped" size="md" mt={4}>
                  <Table.Header>
                      <Table.Row>
                          <Table.ColumnHeader>Category</Table.ColumnHeader>
                          <Table.ColumnHeader>Count</Table.ColumnHeader>
                      </Table.Row>
                  </Table.Header>
                  <Table.Body>
                      <Table.Row>
                          <Table.Cell>Assets</Table.Cell>
                          <Table.Cell>{data.info.assets}</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                          <Table.Cell>Blockchains</Table.Cell>
                          <Table.Cell>{data.info.blockchains}</Table.Cell>
                      </Table.Row>
                  </Table.Body>
              </Table.Root>

              <Button colorScheme="blue" size="lg" mt={4} onClick={() => setPage('landing')}>
                  Go Back
              </Button>
          </Box>
          <Box width="50%">
              <Image
                src="https://i.imgur.com/WeSEiX9.png"
                alt="Asset Management"
                boxSize="100%"
              />
          </Box>
      </Box>
    );
};

export default Assets;
