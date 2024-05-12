export interface IRootCategory {
    name: string,
    id: number
}

export interface ISubcategory {
    id: number,
    name: string,
    subcategories: string[]
}