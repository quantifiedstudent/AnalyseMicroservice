import CourseDTO from "../../infrastructure/dto/CourseDTO";

export default class Course {
  id: number;
  name: string;

  constructor(dto: CourseDTO) {
    this.id = dto.id;
    this.name = dto.name;
  }
}