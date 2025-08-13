
export interface Technique {
  name: string;
  description: string;
  category: string;
}

export interface StudyTechnique extends Technique {
  isMastered: boolean;
  missCount: number;
}

export interface KyuLevel {
  name: string;
  techniques: Technique[];
}

export interface BeltData {
  belt: string;
  color: string;
  kyus: KyuLevel[];
}
