/* Cómo y partes de información obtenemos del estado
del carrito de compras */

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.state";
import { cartFeatureKey } from "./cart.reducer";

export const selectCartState = createFeatureSelector<CartState>(cartFeatureKey);

/*Obtener todos los productos*/
export const selectCartItems = createSelector(
    selectCartState,
    state => state.items
);

/*Total de compra*/
export const selectCartTotal = createSelector(
    selectCartItems,
    items => items.reduce((total, cartItem) => total + cartItem.item.amount * cartItem.quantity, 0)
);

/*Cantidad de productos*/
export const selectTotalItems = createSelector(
    selectCartItems,
    items => items.reduce((conteo, cartItem) => conteo + cartItem.quantity, 0)
);