import { ITypeOperation } from "./typeOperation";

export interface IOperation {
    id: number,
    name: string,
    date: Date,
    typeOperation: ITypeOperation
}