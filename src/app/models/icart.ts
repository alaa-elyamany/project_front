export interface ICart {
    _id?:string;
    user_id:string;
    products:CartProducts[];
}

export interface CartProducts{
    product:string;
    quantity:number;
}