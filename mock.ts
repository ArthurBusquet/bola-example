export type OrderItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

export type Order = {
  id: string;
  customerId: string;
  customerName: string;
  items: OrderItem[];
  total: number;
  paymentMethod: string;
  shippingAddress: string;
  status: string;
};

export const orders: Record<string, Order> = {
  "1": {
    id: "1",
    customerId: "1",
    customerName: "Arthur Busquet",
    items: [
      { id: "1", name: "Camisa Polo", quantity: 2, price: 29.99 },
      { id: "2", name: "Calça Jeans", quantity: 1, price: 49.99 },
    ],
    total: 109.97,
    shippingAddress: "Rua Principal, 123",
    paymentMethod: "CreditCard",
    status: "Em processamento",
  },
  "2": {
    id: "2",
    customerId: "1",
    customerName: "Arthur Busquet",
    items: [
      { id: "3", name: "Arroz 5 kg", quantity: 1, price: 29.99 },
      { id: "4", name: "chocolate", quantity: 10, price: 9.99 },
    ],
    total: 109.97,
    shippingAddress: "Rua Principal, 123",
    paymentMethod: "BankInvoice",
    status: "Em processamento",
  },
  "3": {
    id: "3",
    customerId: "2",
    customerName: "RAMAO RAMOS",
    items: [
      { id: "3", name: "Óculos de jogar bola", quantity: 1, price: 599.99 },
      { id: "4", name: "Óculos", quantity: 1, price: 34.99 },
    ],
    total: 114.98,
    shippingAddress: "Avenida Central, 456",
    paymentMethod: "PIX",
    status: "Entregue",
  },
};

export const secretKey = "segredo-exemplo";
