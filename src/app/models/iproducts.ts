export interface IProducts {
    _id:string;
    name: string;
    description: string;
    category: 'dresses'|'tops'|'skirts'|'shoes'|'bags'|'haijab'|'accessories';
    price: number;
    stock: number;
    imageUrl?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
