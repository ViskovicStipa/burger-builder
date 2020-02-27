import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

export default function BuildControls(props) {
    return (
        <div className={classes.BuildControls}>

            <p>Total price: <strong> {props.price.toFixed(2)}</strong></p>

            {
                
                controls.map(ctrl => (

                    <BuildControl
                        key={ctrl.type}
                        label={ctrl.label}
                        type={ctrl.type}
                        added={() => props.ingredientAdded(ctrl.type)}
                        removed={() => props.ingredientRemoved(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}
                        price={props.price}
                    />
                ))
            }

            <button 
                className={classes.OrderButton}
                disabled={!props.purchasable}    
                onClick={props.ordered}
            >ORDER NOW</button>
        </div>
    )
}
