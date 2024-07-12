import React, { useState } from 'react';
import { Box, Heading, Text, Input, Button, VStack, HStack, Checkbox } from '@chakra-ui/react';

export default function Task() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

    const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
    i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Planisphere
      </Heading>
      <Text mb={4}>Tasks:</Text>

      <VStack spacing={4} align="stretch">
        {tasks.map((task, index) => (
          <HStack key={index} spacing={4}>
            <Checkbox
            isChecked={task.completed}
            onChange={() => handleAddTask(index)}/>
            <Text as={task.completed ? 's' : undefined}>{task.text}</Text>
          </HStack>
        ))}
      </VStack>

      <HStack mt={4}>
        <Input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New Task"/>
        <Button onClick={handleAddTask} colorScheme="blue">
          Add Task
        </Button>
      </HStack> 
    </Box>
  );
}
