import React, { useEffect, useState } from 'react'
import CustomerService from '../services/CustomerService';
import { Link, useNavigate, useParams } from 'react-router-dom';


export const AddCustomerComponent = () => {


    const [name,setName] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const createOrUpdateCustomer = (e) => {
        e.preventDefault();
        const customer = {name,lastname,email};

        if(id){
            CustomerService.updateCustomer(id,customer).then((response) => {
                console.log(response.data);
                navigate('/customers');
            }).catch(error => {
                console.log(error);
            })
        }
        else{
        CustomerService.createCustomer(id,customer).then((response) => {
            console.log(response.data);
            navigate('/customers');
        }).catch(error => {
            console.log(error);
        })
    }
    }
    useEffect(() => {
        CustomerService.getCustomerById(id).then((response) => {
            setName(response.data.name);
            setLastname(response.data.lastname);
            setEmail(response.data.email);
        }).catch(error => {
            console.log(error);
        })
    },[])

    const title = () => {
        if(id){
            return <h2 className='text-center'>Update customer</h2>
        }
        else{
            return <h2 className='text-center'>Add customer</h2>
        }
    }
 
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'> 
                        {
                            title()
                        }
                    </h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Name</label>
                                <input
                                    type='text'
                                    placeholder='Write your name'
                                    name='name'
                                    className='form-control'
                                    value={ name }
                                    onChange={ (e) => setName(e.target.value)}/>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last name</label>
                                <input
                                    type='text'
                                    placeholder='Write your lastname'
                                    name='lastname'
                                    className='form-control'
                                    value={ lastname }
                                    onChange={ (e) => setLastname(e.target.value)}/>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email</label>
                                <input
                                    type='email'
                                    placeholder='Write your email'
                                    name='email'
                                    className='form-control'
                                    value={ email }
                                    onChange={ (e) => setEmail(e.target.value)}/>
                            </div>
                            <button className='btn btn-success' onClick={ (e) => createOrUpdateCustomer(e)}>Save</button>
                            &nbsp;&nbsp;
                            <Link to='/customers' className='btn btn-danger'>Cancel</Link>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCustomerComponent;
