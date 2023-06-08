import SubmissionDTO from "../../infrastructure/dto/SubmissionDTO";
export default class SubmissionInCourse {
  id: number;
  courseId: number;
  submitted_at: Date;
  submittedAtString: string;
  assignment_id: number;

  constructor(dto: SubmissionDTO) {
    this.id = dto.id;
    this.courseId = dto.courseId;
    this.submitted_at = new Date(dto.submitted_at);
    this.submittedAtString = new Date(dto.submitted_at).toISOString().split('T')[0]
    this.assignment_id = dto.assignment_id;
  }
}