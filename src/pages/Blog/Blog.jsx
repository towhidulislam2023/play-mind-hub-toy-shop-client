import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle("Blog")
    return (
        <div className='my-10 px-5'>
            <h1 className='text-green-500 text-4xl font-extrabold' > Blog :</h1>
            <div className="divider"></div>

            <h1 className="text-3xl font-bold">1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>

            <p className="text-xl ml-10 mt-5"><span className='font-bold'>Ans: </span> An access token is like a permission slip that allows a user or application to access specific resources. Access tokens can be stored in temporary storage like cookies or local storage since they don't need to be kept for a long time. <br /><br /> A refresh token is a long-lasting credential that helps you get a new access token when the old one expires.Refresh tokens should be stored more securely, like in encrypted cookies or secure storage mechanisms, to prevent unauthorized access.</p>

            <h1 className="text-3xl font-bold mt-10">2.Compare SQL and NoSQL databases?</h1>

            <div className="text-xl ml-10 mt-5"><span className='font-bold'>Ans: </span>
                <div className='text-3xl font-bold'>
                    SQL Databases: 
                </div>
                <ul className=''>

                    <li className='list-item list-disc'> Relational, structured data, fixed schema.</li>
                    <li className='list-item list-disc'> ACID compliance for data integrity.</li>
                    <li className='list-item list-disc'> Standardized query language (SQL).</li>
                    <li className='list-item list-disc'> Standardized query language (SQL).</li>
                    <li className='list-item list-disc'>  Challenging to scale.</li>
                </ul>
                <div className='text-3xl font-bold'>NoSQL Databases:</div> 
                <ul className=''>
                    <li className='list-item list-disc'> Relational, structured data, fixed schema.</li>
                    <li className='list-item list-disc'> Non-relational, flexible data models.</li>
                    <li className='list-item list-disc'> Unstructured or semi-structured data, flexible schema.</li>
                    <li className='list-item list-disc'> Scalable and distributed.</li>
                    <li className='list-item list-disc'> Sacrifice immediate consistency for availability and partition tolerance.</li>
                </ul>
            </div>
            <h1 className="text-3xl font-bold  mt-10">3.What is express js? What is Nest JS</h1>

            <p className="text-xl ml-10 mt-5"><span className='font-bold'>Ans: </span> Express.js is a minimal and flexible web framework for Node.js, used to build server-side applications and APIs, providing a simple and intuitive API for handling HTTP requests and responses. <br /><br /> Nest.js is a progressive and opinionated framework for building scalable and maintainable server-side applications with Node.js and TypeScript, leveraging object-oriented programming principles and offering features like dependency injection, routing, middleware, and more. It promotes a modular architecture for organizing code and has built-in support for features commonly needed in complex applications.</p>

            <h1 className="text-3xl font-bold  mt-10">4.What is MongoDB aggregate and how does it work?</h1>

            <p className="text-xl ml-10 mt-5"><span className='font-bold'>Ans: </span> In MongoDB, the aggregate function is like a powerful tool for working with our data. It allows us to perform more complex and advanced operations on our data by combining multiple steps together.
            <br /> <br />

                Imagine we have a bunch of data, and we want to do things like filtering, grouping, sorting, or calculating totals. With the aggregate function, we can do all of that in a step-by-step manner, where each step is called a "stage." <br /> <br />

                We provide the aggregate function with a list of stages, and it goes through each stage one by one, taking the result from the previous stage and passing it to the next stage. This allows us to perform complex data transformations and calculations on our data. <br /> <br />


                By using the aggregate function, we can easily perform tasks like analyzing data, generating reports, and getting valuable insights from our MongoDB database.</p>


        </div >
    );
};

export default Blog;