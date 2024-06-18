import { IEmployee } from "./employee";
import { IOperation } from "./operation";

export interface IEmployeeOperation {
    id: number,
    employee: IEmployee,
    operation: IOperation
}