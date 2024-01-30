export interface IUserAuth {
    email: string,
    password: string
}

export interface ICreatedAdData {
    type: 'executor' | 'customer',
    status: string | null,
    title: string,
    description: string,
    images: string,
    price: {
        value: number,
        currency: string
    }
}