import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerManagement = () => {
    const [customers, setCustomers] = useState([]);
    const [currentCustomer, setCurrentCustomer] = useState({ id: '', name: '', email: '' });
    const [isEditing, setIsEditing] = useState(false);

    // Fetch customers from API
    const fetchCustomers = async () => {
        const response = await axios.get('/api/customers');
        setCustomers(response.data);
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentCustomer({ ...currentCustomer, [name]: value });
    };

    // Create a new customer
    const handleCreate = async (e) => {
        e.preventDefault();
        await axios.post('/api/customers', currentCustomer);
        fetchCustomers();
        setCurrentCustomer({ id: '', name: '', email: '' });
    };

    // Update a customer
    const handleUpdate = async (e) => {
        e.preventDefault();
        await axios.put(`/api/customers/${currentCustomer.id}`, currentCustomer);
        fetchCustomers();
        setCurrentCustomer({ id: '', name: '', email: '' });
        setIsEditing(false);
    };

    // Delete a customer
    const handleDelete = async (id) => {
        await axios.delete(`/api/customers/${id}`);
        fetchCustomers();
    };

    const handleEdit = (customer) => {
        setCurrentCustomer(customer);
        setIsEditing(true);
    };

    return (
        <div>
            <h1>Customer Management</h1>
            <form onSubmit={isEditing ? handleUpdate : handleCreate}>
                <input
                    type="text"
                    name="name"
                    value={currentCustomer.name}
                    onChange={handleChange}
                    placeholder="Customer Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={currentCustomer.email}
                    onChange={handleChange}
                    placeholder="Customer Email"
                    required
                />
                <button type="submit">{isEditing ? 'Update' : 'Create'} Customer</button>
            </form>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>
                        {customer.name} - {customer.email}
                        <button onClick={() => handleEdit(customer)}>Edit</button>
                        <button onClick={() => handleDelete(customer.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerManagement;