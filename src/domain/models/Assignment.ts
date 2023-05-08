// import { AssignmentDTO, Rubric, Rating, RubricSettings } from "./interfaces";
import AssignmentDTO, { RatingDTO, RubricDTO, RubricSettingsDTO } from "../../infrastructure/dto/AssignmentDTO";

export default class Assignment {
  id: number;
  description: string;
  due_at: Date | null;
  points_possible: number;
  grading_type: string;
  created_at: Date;
  updated_at: Date;
  position: number;
  course_id: number;
  name: string;
  html_url: string;

  constructor(dto: AssignmentDTO) {
    this.id = dto.id;
    this.description = dto.description;
    this.due_at = dto.due_at ? new Date(dto.due_at) : null;
    this.points_possible = dto.points_possible;
    this.grading_type = dto.grading_type;
    this.created_at = new Date(dto.created_at);
    this.updated_at = new Date(dto.updated_at);
    this.position = dto.position;
    this.course_id = dto.course_id;
    this.name = dto.name;
    this.html_url = dto.html_url;
  }
}