'use client'

import { Box, Button, Text, Image, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react"

// Custom switch from your provided snippet
import { Switch } from "@/components/ui/switch";

// Imported components (unchanged)
import { Dapps } from './dapps';
import { Assets } from './assets';
import { Nodes } from './nodes';
import { Blockchains } from './blockchains';
import { Landing } from './landing';
import { Leaderboard } from './leaderboard';
import ConnectButton from '@/components/layout/connect-button';
import { useAccount } from 'wagmi';

export function Index() {
    const { isConnected } = useAccount();
    const [page, setPage] = useState('');
    const [useMainnet, setUseMainnet] = useState(false);

    const renderPage = () => {
        switch (page) {
            case 'dapps':
                return <Dapps setPage={setPage}/>;
            case 'blockchains':
                return <Blockchains setPage={setPage}/>;
            case 'assets':
                return <Assets setPage={setPage}/>;
            case 'nodes':
                return <Nodes setPage={setPage}/>;
            case 'leaderboard':
                return <Leaderboard setPage={setPage}/>;
            default:
                return <Landing setPage={setPage}></Landing>;
        }
    };

    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        p={5}
        m="auto"
        mt="10%"
        bg="#2D3748"
        color="white"
        borderRadius="lg"
        borderWidth="1px"
        overflow="hidden"
        maxW="3xl"
      >
          <Box display="flex" flexDirection={["column", "row"]} flex="1" w="full">
              {renderPage()}
          </Box>

          <Flex justifyContent="space-between" alignItems="center" w="full" pt={4}>
              <Flex alignItems="center" gap="2">
                  <Image
                    src={useMainnet ? "https://pioneers.dev/coins/ethereum.png" : "https://pioneers.dev/coins/base.png"}
                    boxSize="24px"
                  />
                  <Text fontWeight="medium">
                      Use {useMainnet ? "Mainnet" : "Base"}
                  </Text>
                  {/*<Switch*/}
                  {/*  checked={useMainnet}*/}
                  {/*  onCheckedChange={(checked) => setUseMainnet(checked)}*/}
                  {/*>*/}
                  {/*    Toggle Network*/}
                  {/*</Switch>*/}
              </Flex>

              {isConnected && (
                <div>Is Connected! Buy now (to go auction)</div>
              )}
              {!isConnected && (
                <div>
                    <ConnectButton />
                </div>
              )}
          </Flex>
      </Box>
    );
}
