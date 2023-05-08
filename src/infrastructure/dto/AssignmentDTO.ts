export default interface AssignmentDTO {
  id: number;
  description: string;
  due_at: Date | null;
  points_possible: number;
  grading_type: string;
  assignment_group_id: number;
  grading_standard_id: number;
  created_at: Date;
  updated_at: Date;
  position: number;
  grade_group_students_individually: boolean;
  moderated_grading: boolean;
  omit_from_final_grade: boolean;
  grader_count: number;
  grader_comments_visible_to_graders: boolean;
  final_grader_id: null | number;
  grader_names_visible_to_final_grader: boolean;
  lti_context_id: string;
  course_id: number;
  name: string;
  submission_types: string[];
  has_submitted_submissions: boolean;
  due_date_required: boolean;
  in_closed_grading_period: boolean;
  graded_submissions_exist: boolean;
  is_quiz_assignment: boolean;
  original_course_id: null | number;
  original_assignment_id: null | number;
  original_assignment_name: null | string;
  original_quiz_id: null | number;
  workflow_state: string;
  important_dates: boolean;
  html_url: string;
  use_rubric_for_grading: boolean;
  rubric: RubricDTO[];
  rubric_settings: RubricSettingsDTO | null;
  published: boolean;
}


export interface RubricDTO {
  id: string;
  points: number;
  description: string;
  long_description: string;
  ignore_for_scoring: boolean;
  criterion_use_range: boolean;
  ratings: RatingDTO[];
  outcome_id: null | number;
  vendor_guid: null;
}

export interface RatingDTO {
  id: string;
  points: number;
  description: string;
  long_description: string;
}

export interface RubricSettingsDTO {
  id: number;
  title: string;
  points_possible: number;
  free_form_criterion_comments: boolean;
  hide_score_total: boolean;
  hide_points: boolean;
}