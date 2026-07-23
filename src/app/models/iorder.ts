export interface IOrder {
  _id?: string;
  user_id: string;
  products: OrderProduct[];
  totalprice: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt?: string;
  updatedAt?: string;
}

export interface OrderProduct {
  product: string;
  quantity: number;
}


