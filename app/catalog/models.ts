export interface Pallet {
    photoPath: string;
    name: string;
}

export interface Group {
    id: number;
    groupName: string;
    pallets: Pallet[]
}