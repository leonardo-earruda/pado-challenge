export interface Log {
  id: string;
  lockId: string;
  mac: string;
  sender: string;
  recipient: string;
  messageId: number;
  payload: {
    version: number;
    logId: number;
    timestamp: number;
    type: number;
    method: number;
    isLocked: boolean;
    userId: string;
    userName: string;
    counter: number;
    adminMethod: number;
    targetUserId: string;
    targetUserName: string;
  };
  createdAt: number;
}
