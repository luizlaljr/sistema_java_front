import {
  Heading,
  Flex,
  HStack,
  Text,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Th,
  Td,
  Tr,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import api from '../services/api/api'

export async function getStaticProps(context) {
  const { data: volumes } = await api.get('volumes')
  return {
    props: volumes,
  }
}

function pages(props) {
  const volumes = props._embedded.volumes
  const [listaVolumes, setListVolumes] = useState(volumes)

  const handleRemove = async (volumeId) => {
    console.log(listaVolumes)
    setListVolumes(listaVolumes.splice(volumeId, 1))
    console.log(volumeId)
    // await api.delete(`volumes/${volumeId + 1}`)
  }

  const handleEdit = async (volumeId) => {
    console.log(listaVolumes)
    console.log(volumeId)
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="flex-start"
      p={8}
      align="center"
      bg="bg"
      direction="column"
    >
      <Flex
        bg="base"
        w="100vw"
        justify="flex-start"
        align="center"
        p={8}
        color="text"
      >
        <Heading>Volumes</Heading>
      </Flex>
      <Flex bg="base" w="100vw" justify="center" align="left" color="text">
        <Table variant="striped" colorScheme="teal">
          <TableCaption>A lista tem {volumes.length} volume(s)</TableCaption>
          <Thead>
            <Tr>
              <Th>Evento</Th>
              <Th>Edição</Th>
              <Th>Cidade</Th>
              <Th>Data</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {listaVolumes.map((volume, index) => {
              return (
                <Tr key={index}>
                  <Td>{index}</Td>
                  <Td>{volume.edicaoEvento}</Td>
                  <Td>{volume.cidadeEvento}</Td>
                  <Td>{volume.dataEvento}</Td>
                  <Td>
                    <HStack spacing={4}>
                      <Text>...</Text>
                      <EditIcon onClick={() => handleEdit(index)} />
                      <DeleteIcon onClick={() => handleRemove(index)} />
                    </HStack>
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </Flex>
    </Flex>
  )
}

export default pages
