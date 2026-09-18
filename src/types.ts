export type QuestionType =
  | 'define'
  | 'list'
  | 'explain'
  | 'state'
  | 'distinguish'
  | 'law'
  | 'short'
  | 'scenario'
  | 'essay';

export interface QuestionItem {
  id: string;
  topicId: string;
  topicName: string;
  questionNumber: number;
  questionText: string;
  questionType: QuestionType;
  marks?: number;
  modelAnswer: string;
  markingPoints: string[];
  paperContext?: string; // e.g. "Paper 1 - Section I", "Paper 2 - Section II"
}

export interface TopicSection {
  id: string;
  number: number;
  title: string;
  description: string;
  questionCount?: number;
}

export type UserRating = 'full' | 'partial' | 'review' | null;

export interface TraineeResponse {
  answer: string;
  isAnswerVisible: boolean;
  rating?: UserRating;
  lastUpdated?: number;
}
