// In order to define the structure of the body data a so called Data Transfer Object (DTO) type is used
export class CreateCourseDto {
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly url: string;
}