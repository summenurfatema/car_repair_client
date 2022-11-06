
import React from 'react';

const OrderRow = ({ order, handleDelete }) => {
    const { _id, serviceName, price, customer, email } = order;

    return (
        <div>
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)}>X</button>
                </th>

                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{customer}</div>
                            <div className="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                </td>
                <td>
                    {serviceName}
                    <br />

                </td>
                <td>{email}</td>
                <th>
                    {price}
                </th>
            </tr>
        </div>
    );
};

export default OrderRow;