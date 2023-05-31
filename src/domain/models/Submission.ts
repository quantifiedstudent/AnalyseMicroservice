import SubmissionDTO, {
  FullRubricAssessmentDTO,
  AttachmentDTO,
  GradedCriteriaDTO,
  RubricAssociationDTO,
} from "../../infrastructure/dto/SubmissionDTO";
export default class Submission {
  id: number;
  courseId: number;
  body: null;
  url: null;
  grade: null;
  score: null;
  submitted_at: Date;
  submittedAtString: string;
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
  attachments: Attachment[];
  full_rubric_assessment?: FullRubricAssessment;

  constructor(dto: SubmissionDTO) {
    this.id = dto.id;
    this.courseId = dto.courseId;
    this.body = dto.body;
    this.url = dto.url;
    this.grade = dto.grade;
    this.score = dto.score;
    this.submitted_at = new Date(dto.submitted_at);
    this.submittedAtString = new Date(dto.submitted_at).toISOString().split('T')[0]
    this.assignment_id = dto.assignment_id;
    this.user_id = dto.user_id;
    this.submission_type = dto.submission_type;
    this.workflow_state = dto.workflow_state;
    this.grade_matches_current_submission =
      dto.grade_matches_current_submission;
    this.graded_at = dto.graded_at;
    this.grader_id = dto.grader_id;
    this.attempt = dto.attempt;
    this.cached_due_date = dto.cached_due_date;
    this.excused = dto.excused;
    this.late_policy_status = dto.late_policy_status;
    this.points_deducted = dto.points_deducted;
    this.grading_period_id = dto.grading_period_id;
    this.extra_attempts = dto.extra_attempts;
    this.posted_at = new Date(dto.posted_at);
    this.redo_request = dto.redo_request;
    this.late = dto.late;
    this.missing = dto.missing;
    this.seconds_late = dto.seconds_late;
    this.entered_grade = dto.entered_grade;
    this.entered_score = dto.entered_score;
    this.preview_url = dto.preview_url;
    if (dto.attachments != null) {
      this.attachments = dto.attachments.map(
        (attachmentDTO) => new Attachment(attachmentDTO)
      );
    }
    else {
      this.attachments = [];
    }
    this.full_rubric_assessment = dto.full_rubric_assessment
      ? new FullRubricAssessment(dto.full_rubric_assessment)
      : undefined;
  }
}

export class Attachment {
  id: number;
  display_name: string;
  filename: string;
  upload_status: string;
  url: string;
  created_at: Date;
  updated_at: Date;
  locked: boolean;
  hidden: boolean;
  modified_at: Date;
  preview_url: string;

  constructor(attachmentDTO: AttachmentDTO) {
    this.id = attachmentDTO.id;
    this.display_name = attachmentDTO.display_name;
    this.filename = attachmentDTO.filename;
    this.upload_status = attachmentDTO.upload_status;
    this.url = attachmentDTO.url;
    this.created_at = new Date(attachmentDTO.created_at);
    this.updated_at = new Date(attachmentDTO.updated_at);
    this.locked = attachmentDTO.locked;
    this.hidden = attachmentDTO.hidden;
    this.modified_at = new Date(attachmentDTO.modified_at);
    this.preview_url = attachmentDTO.preview_url;
  }
}

export class FullRubricAssessment {
  id: number;
  rubric_id: number;
  rubric_association_id: number;
  score: number;
  assessment_type: string;
  criterias: GradedCriteria[];
  rubric_association: RubricAssociation;
  assessor_name: string;

  constructor(fullRubricAssessmentDTO: FullRubricAssessmentDTO) {
    this.id = fullRubricAssessmentDTO.id;
    this.rubric_id = fullRubricAssessmentDTO.rubric_id;
    this.rubric_association_id = fullRubricAssessmentDTO.rubric_association_id;
    this.score = fullRubricAssessmentDTO.score;
    this.assessment_type = fullRubricAssessmentDTO.assessment_type;
    this.criterias = fullRubricAssessmentDTO.criterias.map(
      (criteria: GradedCriteriaDTO) => new GradedCriteria(criteria)
    );
    this.rubric_association = new RubricAssociation(
      fullRubricAssessmentDTO.rubric_association
    );
    this.assessor_name = fullRubricAssessmentDTO.assessor_name;
  }
}

//Change for GradedCriteria
//
export class GradedCriteria {
  id: string;
  criterion_id: string;
  learning_outcome_id: number | null;
  description: string;
  comments: string;
  comments_html?: string;
  points?: number;
  maxPoints?: number;
  above_threshold?: boolean;

  constructor(data: GradedCriteriaDTO) {
    this.id = data.id;
    this.criterion_id = data.criterion_id;
    this.learning_outcome_id = data.learning_outcome_id;
    this.description = data.description;
    this.comments = data.comments;
    this.comments_html = data.comments_html;
    this.points = data.points;
    this.above_threshold = data.above_threshold;
    this.maxPoints = data.maxPoints
  }
}

export class RubricAssociation {
  id: number;
  rubric_id: number;
  association_id: number;
  association_type: string;
  use_for_grading: boolean;
  created_at: Date;
  updated_at: Date;
  title: string;
  context_id: number;
  context_type: string;

  constructor(dto: RubricAssociationDTO) {
    this.id = dto.id;
    this.rubric_id = dto.rubric_id;
    this.association_id = dto.association_id;
    this.association_type = dto.association_type;
    this.use_for_grading = dto.use_for_grading;
    this.created_at = new Date(dto.created_at);
    this.updated_at = new Date(dto.updated_at);
    this.title = dto.title;
    this.context_id = dto.context_id;
    this.context_type = dto.context_type;
  }
}