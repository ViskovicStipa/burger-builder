import React from 'react';

import Auxilary from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';

export default function OdrerSummary(props) {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}: {props.ingredients[igKey]}</span>
                </li>
            )
        })

    return (
        <div>

            <Auxilary>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
            </Auxilary>
        </div>
    )
}
