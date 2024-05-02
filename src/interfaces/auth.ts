export interface AuthState {
  auth: string | boolean;
}

export type AuthAction =
  | { type: "[AUTH] SIGN IN"; payload: Record<string, any> }
  | { type: "[AUTH] SIGN OUT" };
