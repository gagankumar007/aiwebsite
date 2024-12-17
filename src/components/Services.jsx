import React from 'react';

function Services() {
    return (
        <section className="py-12 px-4" id="services">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">For Individual Customers</h3>
                    <p className="text-lg text-gray-700">
                        We provide medical elective consultation services at home through our AI for a nominal fee. We give our patients a downloadable prescription PDF at the end of the consultation and also analyze medical reports for a better understanding of your disease diagnosis and treatment.
                    </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">For Space Companies</h3>
                    <p className="text-lg text-gray-700">
                        We loan out our AI medical care API to customers on a contract basis. Our AI is trained in space medical data to handle medical conditions in space and deep space (Moon and Mars).
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Services;
