export interface IUserAuth {
    email: string,
    password: string
}

export interface IUserData {
    first_name: string,
    last_name: string,
    photo_url: string,
    email: string,
    date_of_registration: string[] | number[],
    id: string,

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