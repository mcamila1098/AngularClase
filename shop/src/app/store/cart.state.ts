/* En este archivo se definen los objetos que
serán usados para manejar el estado */

import { Item } from "../services/item.service";

export interface CartItem {
    item: Item;
    quantity: number;
}

export interface CartState{
    items:CartItem[];
}

export const initialCartState: CartState={items:[]};