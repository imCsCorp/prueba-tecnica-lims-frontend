export interface AuthState {
  auth: string | boolean;
}

export type AuthAction =
  | { type: "[AUTH] SIGN IN" }
  | { type: "[AUTH] SIGN OUT" };
