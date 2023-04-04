
import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
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

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(report)
    }, [])

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

    const reorder = (arr, startIndex, endIndex) => {
        const result = Array.from(arr)
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)
        console.log(result)
        return result
    }

    const handleDragEnd = (result) => {
        console.log(result)
        
        const reorderedItems = reorder(items, result.source.index, result.destination.index)
        console.log(reorderedItems)
        setItems(reorderedItems)
    }
    return (
        <DragDropContext onDragEnd={handleDragEnd}>

            <Box border={'1px solid'}>
                <Droppable droppableId='droppable'>
                    {
                        (provided, snapshot) => (
                            <Box {...provided.droppableProps} ref={provided.innerRef} bg={snapshot.isDraggingOver ? 'lightgreen' : ""}>
                                {/* <Button onClick={onOpen}>Open Modal</Button> */}
                                {
                                    items.map((el, i) => (
                                        <Draggable key={el.id} draggableId={el.id} index={i}>
                                            {(provided, snapshot) => (
                                                <Box ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} bg={snapshot.isDragging ? "tomato" : "grey"} w='10%' m={2} p={4} color='white'>
                                                    {el.name}
                                                </Box>
                                            )}

                                        </Draggable>
                                    ))
                                }
                                {provided.placeholder}
                            </Box>
                        )
                    }


                </Droppable>


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

        </DragDropContext>
    )
}

export default BugPage