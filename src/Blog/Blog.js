import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className=' mt-6'>
                <h2 className='text-secondary text-xl'> #1:How will you improve the performance of a React Application?</h2>
                <div className='text-primary font-bold'>
                    <li>Keeping component state local where necessary.</li>
                    <li>Memoizing React components to prevent unnecessary re-renders.</li>
                    <li>Code-splitting in React using dynamic import()</li>
                    <li>Windowing or list virtualization in React.</li>
                    <li>Lazy loading images in React.</li>
                </div>
            </section>
            <section>
                <h2 className='text-secondary text-xl'>#2: What are the different ways to manage a state in a React application?</h2>
                <div className='text-primary font-bold'>
                    <p>    React uses an observable object as the state that observes what changes are made to the state and helps the component behave accordingly. For example, if we update the state of any component like the following the webpage will not re-render itself because React State will not be able to detect the changes made</p>
                </div>
            </section>
            <section>
                <h2 className='text-secondary text-xl'>#3:How does prototypical inheritance work?</h2>
                <div className='text-primary font-bold'>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </section>
            <section>
                <h2 className='text-secondary text-xl'>#4:Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts? </h2>
                <div className='text-primary font-bold'>
                    <li>Keeping component state local where necessary.</li>
                    <li>Memoizing React components to prevent unnecessary re-renders.</li>
                    <li>Code-splitting in React using dynamic import()</li>
                    <li>Windowing or list virtualization in React.</li>
                    <li>Lazy loading images in React.</li>
                </div>
            </section>
            <section>
                <h2 className='text-secondary text-xl'>#5:You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <div className='text-primary font-bold'>
                      <p>By doing destructruing properly</p>
                </div>
            </section>
            <section>
                <h2 className='text-secondary text-xl'>#6:What is a unit test? Why should write unit tests?</h2>
                <div className='text-primary font-bold'>
                   <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
                </div>
            </section>
            <section>

            </section>
            <section>

            </section>
        </div>
    );
};

export default Blog;