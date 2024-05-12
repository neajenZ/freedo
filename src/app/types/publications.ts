export interface IPublicationForm {
    category: string,
    subcategory: string | number,
    data: {
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
}