export interface ProjectDetails {
  Name: string;
  Status: string;
  Image: string;
  Description: string;
  StartDate?: string | Date | undefined;
  EndDate?: string | Date | undefined;
}
