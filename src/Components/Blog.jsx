import React from 'react';
import Footer from './Footer';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Blog = () => {
    return (
        <section>
         <a className="my-anchor-element" data-tooltip-content="ibrahim!">
  mmmmmmmmmmmmmmmmmmmmmm
</a>

<Tooltip anchorSelect=".my-anchor-element" />
            blog is comming
            <Footer></Footer>
        </section>
       
    );
};

export default Blog;