import * as React from 'react'

// 1. import `ChakraProvider` component
import { Box, ChakraProvider, Grid, GridItem } from '@chakra-ui/react'
import {Header} from "./Header"
import {Navigation} from "./Navigation"
import { MainContent } from './Content'
import { Contribution } from './forms/Contribution'

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Box w="100%">
      <Grid
        templateAreas={`"header header"
                        "nav main"
                        "nav footer"`}
        gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={'150px 1fr'}
        h='auto'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' bg='orange.300' area={'header'}>
          <Header title="Konti" />
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={'nav'}>
          <Navigation />
        </GridItem>
        <GridItem pl='2' area={'main'}>
          <Contribution />
        </GridItem>
        <GridItem pl='2'  area={'footer'}>
          
        </GridItem>
      </Grid>
      </Box>
    </ChakraProvider>
  )
}