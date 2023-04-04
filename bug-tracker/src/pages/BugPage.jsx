
import React from 'react'
import {
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input,
    Button,
    FormControl,
    FormLabel,
} from '@chakra-ui/react'

const BugPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const report = [
        {
            id: 'item-1',
            name: 'Bug-1'
        },
        {
            id: 'item-2',
            name: 'Bug-2'
        },
        {
            id: 'item-3',
            name: 'Bug-3'
        },
        {
            id: 'item-4',
            name: 'Bug-4'
        },
        {
            id: 'item-5',
            name: 'Bug-5'
        },

    ]
    return (
        <Box border={'1px solid'}>
            <Button onClick={onOpen}>Open Modal</Button>
            {
                report.map((el) => (
                    <Box key={el.id} bg='tomato' w='10%' m={2} p={4} color='white'>
                        {el.name}
                    </Box>
                ))
            }



            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>First name</FormLabel>
                            <Input placeholder='First name' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Last name</FormLabel>
                            <Input placeholder='Last name' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>

    )
}

export default BugPage