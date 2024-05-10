import type { ICelerisAgentRuntimeErrorType } from "@celeris/ai-core";

export const ChatErrorType = {
  // ******* 业务错误语义 ******* //

  OpenAIBusinessError: "OpenAIBusinessError", // OpenAI 返回的业务错误
  NoOpenAIAPIKey: "NoOpenAIAPIKey", // 缺少 OpenAI API 密钥

  // ******* 客户端错误 ******* //
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  ContentNotFound: 404,
  MethodNotAllowed: 405,
  TooManyRequests: 429,

  // ******* 服务端错误 ******* //
  InternalServerError: 500,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
} as const;

export type ErrorType = (typeof ChatErrorType)[keyof typeof ChatErrorType];

export interface ErrorResponse {
  body: any;
  errorType: ErrorType | ICelerisAgentRuntimeErrorType;
}
