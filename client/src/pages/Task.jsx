// Component renders a box containing a title, a list of tasks, and an input field with a button to add new tasks

import React, { useState } from 'react';
// Chakra UI components for styling, functionality
import { Box, Heading, Text, Input, Button, VStack, HStack, Checkbox } from '@chakra-ui/react';

export default function Task() {
  // Define state to manage tasks (array of tasks), new task input (string for new task input)
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Function to add a new task to 'tasks' state array when "Add Task" button is clicked; Input cannot be empty
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };
    // Indicate task completion status; Function to toggle completion status of a task when corresponding checkbox is clicked
    const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    // Update tasks w/ updatedTasks array
    setTasks(updatedTasks);
  };

  return (
    <Box p={4} bg="purple.800" color="white" borderRadius="md" boxShadow="lg">
      <Heading as="h1" size="xl" mb={4}>
        Task Navigator
      </Heading>
      <Text mb={4}>Tasks:</Text>

      <VStack spacing={4} align="stretch">
        {tasks.map((task, index) => (
          <HStack key={index} spacing={4}>
            <Checkbox
              isChecked={task.completed}
              onChange={() => handleAddTask(index)}
              colorScheme="cyan"
            />
            <Text as={task.completed ? 's' : undefined}
            fontSize="md"
            textDecoration={task.completed ? 'line-through' : 'none'}
            >
              {task.text}
              </Text>
          </HStack>
        ))}
      </VStack>

      <HStack mt={4}>
        <Input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New Task"/>
          bg="purple.700"
          color="white"
          borderRadius="md"
          border="none"
          _placeholder={{ color: 'gray.300' }}
        />
      
        <Button onClick={handleAddTask} colorScheme="blue" variant="outline">
          Add Task
        </Button>
      </HStack> 
    </Box>
  );
}
