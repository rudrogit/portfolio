import React from 'react'
import Accordion from './Accordion'

const FAQ = () => {
  return (
    <div className='py-10 lg:pb-20'>
        
        <div className="py-10">
            <h1 className='text-4xl border-l-4 pl-3 mb-5 font-bold font-poptwo text-slate-800 dark:text-slate-200 border-slate-800 dark:border-slate-200'>Your Qustions</h1>
            <p className='text-lg font-poptwo pr-[5%] font-medium text-slate-800 dark:text-slate-200'>The MERN stack combines MongoDB, Express.js, React, and Node.js to create a powerful JavaScript-based framework for building full-stack web applications. MongoDB handles data storage, Express and Node power the backend, and React builds dynamic, interactive UIs. This stack allows for fast, scalable development with a single language across the entire application.  
            </p>
        </div>

       <div className="pb-10 flex flex-col justify-between items-start lg:flex-row">
          <div className="w-full lg:w-5/12 ">
             <Accordion 
                qustion={'What is the MERM Stack?'} 
                answer={'The MERM stack is a set of technologies used for building web applications. MERM stands for MongoDB, Express, React, and MySQL. MongoDB is a NoSQL database, MySQL is a relational database, Express is a backend framework, and React is a frontend library. This combination allows developers to build scalable and efficient applications with both relational and non-relational data handling.'
             }/>
            <Accordion 
                qustion={'How does the MERM Stack differ from the MERN Stack?'} 
                answer={'The MERN stack uses MongoDB, Express, React, and Node.js, while the MERM stack swaps MySQL for Node.js. In MERM, you can use either MongoDB or MySQL depending on the data structure needs. MongoDB is ideal for flexible, schema-less data, while MySQL is structured, making it suitable for relational data.'
             }/>
            <Accordion 
                qustion={'Why choose MERM over other stacks?'} 
                answer={'MERM offers flexibility. You can use MongoDB for data that doesn’t require strict relationships and MySQL for structured, relational data. This hybrid model allows applications to leverage the advantages of both NoSQL and SQL, potentially improving performance, scalability, and data management options.'
             }/>
          </div>
          <div className="w-full lg:w-5/12 ">
            <Accordion 
                qustion={'What are the benefits of using React in MERM?'} 
                answer={'React is a popular frontend library for building user interfaces. It is efficient, allows for reusable components, and helps create interactive UIs with a responsive user experience. React’s component-based architecture also makes it easy to maintain and scale application.'
            }/>
            <Accordion 
                qustion={'How does MERM handle data security?'} 
                answer={' Security in MERM can be managed through the Express middleware, MySQL and MongoDB’s built-in security features, and best practices for securing React apps. This includes authentication, input validation, encryption, and secure API endpoints.'
            }/>
            <Accordion 
                qustion={'What types of applications are best suited for the MERM stack?'} 
                answer={'MERM is versatile and can handle e-commerce platforms, social networks, content management systems, and more. It s ideal for applications requiring a mix of relational and non-relational data or needing to handle a large volume of data efficiently.'
            }/>
          </div>
       </div>
    </div>
  )
}

export default FAQ

