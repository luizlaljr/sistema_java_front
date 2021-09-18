import React from 'react'
import { Flex, Box, VStack, Heading, Text, Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" justify="center" align="center" bg="bg">
      <Box p={8} borderWidth="3px" borderRadius="xl" boxShadow="2xl" bg="base">
        <Flex bg="base" justify="center" align="center" color="text">
          <VStack align="center" spacing={8}>
            <Heading textShadow="2px 2px #50B4F2">
              Sistema de Anais Científico
            </Heading>
            <Heading size="sm">
              Trabalho da disciplina de desenvolvimento de aplicações corporativas
            </Heading>
            <Flex direction="column" align="left" w="100%" color="#2C3E50">
              <Text>Professor: Viterbo</Text>
              <Text>Aluno: Luiz Alberto Junior</Text>
            </Flex>
            <Button colorScheme="blue">Começar</Button>
          </VStack>
        </Flex>
      </Box>
    </Flex>
  )