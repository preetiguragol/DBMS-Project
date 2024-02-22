import React, { useState } from 'react';
import './UpdateAddress.css';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, update } from 'firebase/database';

const AddressForm = () => {
  const [name, setName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [nameError, setNameError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        setNameError(value.match(/^[^0-9]+$/) ? null : 'Name cannot contain numbers.');
        break;
      case 'emailId':
        setEmailId(value);
        break;
      case 'currentAddress':
        setCurrentAddress(value);
        break;
      case 'newAddress':
        setNewAddress(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!nameError && name && emailId && currentAddress && newAddress) {
      try {
        // Get Firebase instances
        const auth = getAuth();
        const database = getDatabase();

        // Get the currently logged-in user
        const user = auth.currentUser;

        // Ensure the user ID is retrieved correctly
        if (!user.uid) {
          throw new Error('Could not retrieve user ID for authenticated user.');
        }

        // Update the user's address in the Realtime Database CUSTOMER table
        const userRef = ref(database, `customer/CUSTOMER/${user.uid}/ADDRESS`);

        // Create an object with both old and new addresses
        const updatedAddress = {
          currentAddress,
          newAddress
        };

        // Update the address using `update` with the merged object
        await update(userRef, updatedAddress);

        console.log('Address updated successfully!', updatedAddress);
        alert('Address updated successfully!');

        
        setName('');
        setEmailId('');
        setCurrentAddress('');
        setNewAddress('');
        setNameError(null);
      } catch (error) {
        console.error('Error updating address:', error);
        alert('Failed to update address. Please try again.');
      }
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="address-form">
      <h2>Address Change Form</h2>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
        required
      />
      {nameError && <p className="error">{nameError}</p>}

      <label htmlFor="emailId">Email ID:</label>
      <input
        type="email"
        id="emailId"
        name="emailId"
        value={emailId}
        onChange={handleChange}
        required
      />

      <label htmlFor="currentAddress">Current Address:</label>
      <textarea
        id="currentAddress"
        name="currentAddress"
        value={currentAddress}
        onChange={handleChange}
        required
      />

      <label htmlFor="newAddress">New Address:</label>
      <textarea
        id="newAddress"
        name="newAddress"
        value={newAddress}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddressForm;
