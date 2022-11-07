import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://car-repair-server-dun.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            Services: {services.length}
            <div className='grid grid-cols-3 gap-16'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;