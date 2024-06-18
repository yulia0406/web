import { IDepartment } from "./department";
import { IJob } from "./jobs";

export interface IEmployee {
    id: number,
    name: string,
    gender: string,
    birthdate: Date,
    number: number,
    department: IDepartment,
    job: IJob
}