import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <div>
        <nav>Navbar</nav>
        <div>Sidebar</div>
        <section>Main</section>
      </div>
    </ChakraProvider>
  )
}