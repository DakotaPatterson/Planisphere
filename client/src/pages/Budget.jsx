import React, { useState, useEffect } from 'react';
import { Box, Button, Input, VStack, Text } from '@chakra-ui/react';
import { useQuery, useMutation, gql } from '@apollo/client';

// Import necessary components from Chart.js
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);


const GET_BUDGET = gql`
  query GetBudget {
    getBudget {
      totalBudget
      categories {
        name
        amount
      }
    }
  }
`;

const SET_BUDGET = gql`
  mutation SetBudget($totalBudget: Float!, $categories: [CategoryInput]!) {
    setBudget(totalBudget: $totalBudget, categories: $categories) {
      totalBudget
      categories {
        name
        amount
      }
    }
  }
`;

const Budget = () => {
  const { data, loading, error } = useQuery(GET_BUDGET);
  const [setBudget] = useMutation(SET_BUDGET);
  const [totalBudget, setTotalBudget] = useState('');
  const [categories, setCategories] = useState([{ name: '', amount: '' }]);

  useEffect(() => {
    if (data && data.getBudget) {
      setTotalBudget(data.getBudget.totalBudget);
      setCategories(data.getBudget.categories);
    }
  }, [data]);


  const handleTotalChange = (e) => {
    setTotalBudget(e.target.value);
  };

  const handleCategoryChange = (index, field, value) => {
    const newCategories = [...categories];
    newCategories[index][field] = value;
    setCategories(newCategories);
  };

  const addCategory = () => {
    setCategories([...categories, { name: '', amount: '' }]);
  };

  const saveBudget = () => {
    setBudget({
      variables: {
        totalBudget: parseFloat(totalBudget),
        categories: categories.map(category => ({
          name: category.name,
          amount: parseFloat(category.amount),
        })),
      },
    });
  };

  const chartData = {
    labels: categories.map(category => category.name),
    datasets: [
      {
        data: categories.map(category => category.amount),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    return (
      <VStack spacing={4} p={4}>
        <Text fontSize="2xl">Budget Planner</Text>
        <Box w="100%">
          <Input
            placeholder="Total Budget"
            value={totalBudget}
            onChange={handleTotalChange}
            mb={2}
          />
          {categories.map((category, index) => (
            <Box key={index} display="flex" mb={2}>
              <Input
                placeholder="Category Name"
                value={category.name}
                onChange={(e) => handleCategoryChange(index, 'name', e.target.value)}
                mr={2}
              />
              <Input
                placeholder="Amount"
                type="number"
                value={category.amount}
                onChange={(e) => handleCategoryChange(index, 'amount', e.target.value)}
              />
            </Box>
          ))}
          <Button onClick={addCategory} colorScheme="teal" w="100%" mb={2}>
            Add Category
          </Button>
          <Button onClick={saveBudget} colorScheme="blue" w="100%">
            Save Budget
          </Button>
        </Box>
        <Box w="100%">
          <Text fontSize="xl" mb={2}>Budget Breakdown</Text>
          <Pie data={chartData} />
        </Box>
      </VStack>
    );
  };
  
 
export default Budget;