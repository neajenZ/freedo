export interface ICreateComment {
    author_id: string,
    card_id: string,
    description: string,
    rate: number,
    photoUrls: string[]
}

export interface IComment {
    id: number,
    author_id: string,
    avatar: string,
    card_id: number,
    description: string,
    rate: 4,
    photoUrls: string[],
    date_of_registration: string
}