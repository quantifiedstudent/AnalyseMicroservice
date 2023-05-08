import Assignment from "./AssignmentDTO";

export default interface CourseDTO {
  id: number;
  name: string;
  account_id: number;
  uuid: string;
  start_at: Date;
  grading_standard_id: number;
  is_public: boolean;
  created_at: Date;
  course_code: string;
  grade_passback_setting: null;
  end_at: null;
  course_color: null;
  friendly_name: null;
  apply_assignment_group_weights: boolean;
  hide_final_grades: boolean;
  assignments: Assignment[];
}