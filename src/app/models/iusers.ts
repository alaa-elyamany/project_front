export interface IUsers {
    _id?:string;
    firstname:string;
    lastname:string;
    email:string;
    password:string;
    role?:'user' | 'admin';
    phone?:string;
    imageUrl?:string;
    address?:{
        state?:string;
        city?:string;
        street?:string;
    };
    Orders?:string[];
    createdAt?:Date;
    updatedAt?:Date;
    


}
