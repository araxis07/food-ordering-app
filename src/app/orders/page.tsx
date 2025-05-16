import React from 'react';

const OrdersPage = () => {
    // Sample data for past orders
    const pastOrders = [
        {
            id: 1,
            items: [
                { name: 'Pizza Margherita', quantity: 2, price: 10.99 },
                { name: 'Caesar Salad', quantity: 1, price: 7.99 },
            ],
            total: 29.97,
            date: '2023-10-01',
        },
        {
            id: 2,
            items: [
                { name: 'Spaghetti Carbonara', quantity: 1, price: 12.99 },
                { name: 'Tiramisu', quantity: 1, price: 5.99 },
            ],
            total: 18.98,
            date: '2023-09-15',
        },
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Your Past Orders</h1>
            <div className="space-y-4">
                {pastOrders.map(order => (
                    <div key={order.id} className="border p-4 rounded-lg">
                        <h2 className="font-semibold">Order ID: {order.id}</h2>
                        <p className="text-gray-600">Date: {order.date}</p>
                        <ul className="list-disc pl-5">
                            {order.items.map((item, index) => (
                                <li key={index}>
                                    {item.quantity} x {item.name} - ${item.price.toFixed(2)}
                                </li>
                            ))}
                        </ul>
                        <p className="font-bold mt-2">Total: ${order.total.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrdersPage;