/* tslint:disable */
/* eslint-disable */
import { TeamMember } from '../models/team-member';
export interface TeamMemberListApiResult {
  data?: Array<TeamMember> | null;
  isSucceed?: boolean;
  message?: string | null;
  statusCode?: number;
}
