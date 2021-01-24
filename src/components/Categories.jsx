import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children }) => (
    <div className="categories">
        <h2 class="categories__title">Frutas</h2>
        {children}
    </div>
);

export default Categories;