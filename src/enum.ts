export enum CustomerType {
    REGULAR = 'REGULAR',
    GOLD = "GOLD",
    PLATINIUM = "PLATINIUM"
}

export type Customer = {
    id: number;
    name: string;
    type: CustomerType;
}