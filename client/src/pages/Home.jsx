import React, { useState } from 'react';
import Header from '../components/Header';
import { Box, Typography, Button } from '@mui/material';
import AddInvoice from '../components/AddInovice';

const Home = () => {
  const [addInvoice, setAddInvoice] = useState(false);

  // Toggle function for showing/hiding the AddInvoice component
  const toggleInvoice = () => {
    setAddInvoice((prev) => !prev); // Toggle the state
  };

  return (
    <React.Fragment>
      <Header />
      <Box padding={2}>
        <Typography variant="h4" marginTop={5} marginBottom={3}>
          Pending Invoices
        </Typography>
        <Button
          variant="contained"
          onClick={toggleInvoice} // Attach the toggle function here
          sx={{
            backgroundColor: 'blue',
            '&:hover': { backgroundColor: 'darkblue' },
            marginBottom: 2,
          }}
        >
          {addInvoice ? 'Close Form' : 'Add Invoices'} {/* Dynamic button text */}
        </Button>
        {addInvoice && <AddInvoice />} {/* Conditionally render AddInvoice */}
      </Box>
    </React.Fragment>
  );
};

export default Home;
