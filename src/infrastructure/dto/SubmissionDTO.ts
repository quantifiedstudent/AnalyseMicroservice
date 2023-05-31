import AssignmentDTO from "./AssignmentDTO";

export default interface SubmissionDTO {
  id: number;
  courseId: number;
  body: null;
  url: null;
  grade: null;
  score: null;
  submitted_at: Date;
  assignment_id: number;
  user_id: number;
  submission_type: string;
  workflow_state: string;
  grade_matches_current_submission: boolean;
  graded_at: null;
  grader_id: null;
  attempt: number;
  cached_due_date: null;
  excused: null;
  late_policy_status: null;
  points_deducted: null;
  grading_period_id: null;
  extra_attempts: null;
  posted_at: Date;
  redo_request: boolean;
  late: boolean;
  missing: boolean;
  seconds_late: number;
  entered_grade: null;
  entered_score: null;
  preview_url: string;
  attachments: AttachmentDTO[];
  full_rubric_assessment?: FullRubricAssessmentDTO;
  assignment?: AssignmentDTO;
}

export interface AttachmentDTO {
  id: number;
  uuid: string;
  folder_id: number;
  display_name: string;
  filename: string;
  upload_status: string;
  url: string;
  size: number;
  created_at: Date;
  updated_at: Date;
  unlock_at: null;
  locked: boolean;
  hidden: boolean;
  lock_at: null;
  hidden_for_user: boolean;
  thumbnail_url: null;
  modified_at: Date;
  mime_class: string;
  media_entry_id: null;
  category: string;
  locked_for_user: boolean;
  preview_url: string;
}

export interface FullRubricAssessmentDTO {
  id: number;
  rubric_id: number;
  rubric_association_id: number;
  score: number;
  artifact_id: number;
  artifact_type: string;
  assessment_type: string;
  assessor_id: number;
  artifact_attempt: number;
  criterias: GradedCriteriaDTO[];
  rubric_association: RubricAssociationDTO;
  assessor_name: string;
  assessor_avatar_url: string;
}

//Change for GradedCriteria
//
export interface GradedCriteriaDTO {
  id: string;
  criterion_id: string;
  learning_outcome_id: number | null;
  description: string;
  comments_enabled: boolean;
  comments: string;
  comments_html?: string;
  studentsPoints?: number;
  maxPoints?: number;
  above_threshold?: boolean;
}

export interface RubricAssociationDTO {
  id: number;
  rubric_id: number;
  association_id: number;
  association_type: string;
  use_for_grading: boolean;
  created_at: Date;
  updated_at: Date;
  title: string;
  summary_data: null;
  purpose: string;
  url: null;
  context_id: number;
  context_type: string;
  hide_score_total: boolean;
  bookmarked: boolean;
  context_code: string;
  hide_points: boolean;
  hide_outcome_results: boolean;
  root_account_id: number;
  workflow_state: string;
}