import React from 'react';
import Footer from './Footer';
const Blog = () => {
    return (
        <section>
       
        <div style={{marginBottom:'280px'}}>
            <h3> differences between uncontrolled and controlled components?</h3>
            <p><strong>answer:controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</strong></p>
            <h3>How to validate React props using PropTypes?</h3>
            <p><strong>answer:With React props, you can send data to a component when you call on that component, including numbers, strings, functions, objects, and arrays. If you have multiple components, you can pass data from one component to another.</strong></p>
            <h3>difference between nodejs and express js</h3>
            <p><strong>answer:NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.</strong></p>
            <h3>What is a custom hook, and why will you create a custom hook?</h3>
            <p><strong>answer:Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</strong></p>
        </div>
            <Footer></Footer>
        </section>
       
    );
};

export default Blog;