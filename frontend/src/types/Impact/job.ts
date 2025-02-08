// Enum for Job Types
enum JobType {
  DOWNLOAD_REPORT = "DownloadReport",
  API_REPORT = "ApiReport",
  UPLOAD_ADS = "UploadAds",
  TERM_MODIFICATION = "TermModification",
  CLICK_EXPORT = "ClickExport",
}

// Enum for Job Status
export enum JobStatus {
  QUEUED = "QUEUED",
  RUNNING = "RUNNING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  ERROR = "ERROR",
  FAILED = "FAILED",
}

// Job Object Type Definition
export type Job = {
  Id: string;
  Type: JobType;
  ProgramId: string;
  CreatedBy: string;
  CreatedDate: string;
  StartedDate?: string;
  CompletedDate?: string;
  AbandonedDate?: string;
  CancelledDate?: string;
  FailedDate?: string;
  LastProgressUpdateDate?: string;
  Status: JobStatus;
  StatusMessage?: string;
  RecordsProcessed?: number;
  PercentageComplete?: number;
  Replayable: boolean;
  ResultUri?: string;
};

export type JobListing = {
  "@page": string;
  "@numpages": string;
  "@pagesize": string;
  "@total": string;
  "@start": string;
  "@end": string;
  "@uri": string;
  "@firstpageuri": string;
  "@previouspageuri": string;
  "@nextpageuri": string;
  "@lastpageuri": string;
  Jobs: Job;
};
