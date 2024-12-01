import { Box, Button, TextField, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import { saveInvoice } from '../services/api';

// Styled Component
const StyledBox = styled(Box)({
  marginTop: 20,
  '& > p': {
    fontSize: 23,
    marginBottom: 10,
  },
  '& > div > div': {
    marginLeft: 20,
    minWidth: 200,
  },
});

// Default Invoice Object
const defaultObj = {
  vendor: '',
  product: '',
  amount: 0,
  date: '',
  action: 'pending',
};

const AddInvoice = ({ setAddInvoice }) => {
  const [invoice, setInvoice] = useState(defaultObj);

  // Handle Input Changes
  const onValueChange = (e) => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };

  // Add New Invoice
  const addNewInvoice = async () => {
    const invoiceData = { 
      ...invoice, 
      amount: Number(invoice.amount) // Ensure amount is a number 
    };
    setAddInvoice(false);

    try {
      const response = await saveInvoice(invoiceData); // Save to API
      console.log('Invoice Saved Successfully:', response);
      alert('Invoice added successfully!');
      setInvoice(defaultObj); // Reset form
    } catch (error) {
      console.error('Error while adding invoice:', error);
      alert('Failed to add invoice. Please try again.');
    }
  };

  return (
    <StyledBox>
      <Typography variant="h6" marginTop={5} marginBottom={5}>
        Add Invoices
      </Typography>
      <Box>
        <TextField
          variant="standard"
          placeholder="Enter Vendor Name"
          onChange={(e) => onValueChange(e)}
          name="vendor"
          value={invoice.vendor}
        />
        <br /> <br />
        <TextField
          variant="standard"
          placeholder="Enter Product Name"
          onChange={(e) => onValueChange(e)}
          name="product"
          value={invoice.product}
        />
        <br /> <br />
        <TextField
          variant="standard"
          placeholder="Enter Amount (in rupees)"
          type="number"
          onChange={(e) => onValueChange(e)}
          name="amount"
          value={invoice.amount}
        />
        <br /> <br />
        <TextField
          variant="standard"
          placeholder="Enter Date"
          type="date"
          InputLabelProps={{
            shrink: true, // Ensures the label doesn't overlap for type="date"
          }}
          onChange={(e) => onValueChange(e)}
          name="date"
          value={invoice.date}
        />
        <br /> <br /> <br />
        <Button
          variant="contained"
          onClick={addNewInvoice}
          sx={{
            backgroundColor: 'red',
            '&:hover': { backgroundColor: '#ffcccc' },
          }}
        >
          Submit
        </Button>
      </Box>
    </StyledBox>
  );
};

export default AddInvoice;
