export interface IItem {
    name: string;
    price: number;
    image: string;
}

export interface ShoppingContextInterface {
    items: IItem[];
    addItem: (item: IItem) => void;
    removeItem: (item: IItem) => void;
}