import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user } = useContext(AuthContext)

    const [orders, setOrders] = useState([])








    useEffect(() => {
        fetch(`https://car-repair-server-dun.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [user?.email])


    const handleDelete = _id => {

        const proced = window.confirm('Are you sure to delete this order ?')
        if (proced) {
            fetch(`https://car-repair-server-dun.vercel.app/orders/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount === 1) {
                        const remain = orders.filter(odr => odr._id !== _id)
                        setOrders(remain)
                    }
                })

        }

    }

    return (
        <div>
            YOU HAVE {orders.length} ORDERS
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>ASD</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}></OrderRow>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Orders;