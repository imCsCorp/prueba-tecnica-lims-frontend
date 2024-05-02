import { JwtPayload, jwtDecode } from "jwt-decode";

const useAuth = (token: string) => {
  if (!token || token == "") {
    return false;
  }
  let isAuth = true;
  try {
    let now = new Date().getTime() / 1000;
    const decoded: any = jwtDecode(token) as JwtPayload;
    if (decoded?.exp < now) {
      isAuth = false;
    }
  } catch (error) {
    isAuth = false;
  }

  return isAuth;
};

export default useAuth;
