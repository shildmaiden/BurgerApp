import React from 'react'
import classes from './Burger.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    const transformedIngredient = Object.keys(props.ingredients)
        .map(item => {
            return [...Array(props.ingredients[item])].map((_, i) => {
                return <BurgerIngredient key={item + i} type={item} />
            });
        })

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredient}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;