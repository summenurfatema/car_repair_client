import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Checkout = () => {
    const { user } = useContext(AuthContext)
    const { _id, title, price } = useLoaderData()

    const handleOrder = event => {
        event.preventDefault()
        const form = event.target
        const name = `${form.firstname.value} & ${form.lastname.value}`
        const phone = form.phone.value
        const email = form.email.value


        const order = {
            service: _id,
            serviceName: title,
            price: price,
            customer: name,
            email,
            phone: phone
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                alert('done')
                console.log(data)
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <h2>You are about to order : {title} & cost wil be {price} dollar</h2>
            <form onSubmit={handleOrder} className="card-body">
                <div className="form-control">

                    <input type="text" name='firstname' placeholder="First name" className="input input-bordered" />
                </div>
                <div className="form-control">

                    <input type="text" name='lastname' placeholder="Last name" className="input input-bordered" />
                </div>
                <div className="form-control">

                    <input type="text" name='phone' placeholder="Phone" className="input input-bordered" />

                </div>
                <div className="form-control">

                    <input type="text" name='email' placeholder="email" defaultValue={user?.email} readOnly className="input input-bordered" />

                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Check</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
