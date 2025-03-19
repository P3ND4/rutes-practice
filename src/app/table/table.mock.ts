export const productList: Product[] = [
    {id: 1, name: 'sisors', price: 2, detail: "cortan papel"},
    {id: 2, name: 'cutter', price: 13, detail: "cortan lo que sea"},
    {id: 3, name: 'knife', price: 10, detail: "cortan carne"},
    {id: 4, name: 'spoon', price: 11, detail: "sirve para comer"},
    {id: 5, name: 'forks', price: 1, detail: "pincha"}
]

export interface Product {
    id: number | string,
    name: string,
    price: number,
    detail: string
}