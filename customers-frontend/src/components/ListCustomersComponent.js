import React, { useEffect, useState } from "react";
import CustomerService from "../services/CustomerService";
import { Link } from "react-router-dom";

export const ListCustomersComponent = () => {

    const [customers,setCustomers] = useState([]);

    useEffect(() => {
        listarCustomers();
    },[])

    const listarCustomers = () => {
        CustomerService.getAllCustomers().then(response => {
            setCustomers(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteCustomer = (customerId) => {
        CustomerService.deleteCustomer(customerId).then((response) => {
            listarCustomers();
        }).catch(error => {
            console.log(error);
        })
    }


    return (
        <div className="container">
            <h2 className="text-center">Customers List</h2>
            <Link to='/add-customer' className='btn btn-primary mb-2'>Add customer</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Acciones</th>
                </thead>
                <tbody>
                    
                    {
                        customers.map(
                            customer =>
                            <tr key={ customer.id }>
                                <td>{ customer.id }</td>
                                <td>{ customer.name }</td>
                                <td>{ customer.lastname }</td>
                                <td>{ customer.email }</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-customer/${customer.id}`}>Update</Link>    
                                    <button style={{marginLeft:'10px' }} className="btn btn-danger" onClick={() => deleteCustomer(customer.id)}>Delete</button>
                                </td>
                                <td>{ customer.email }</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )

}

export default ListCustomersComponent;