import Swal from "sweetalert2";

export const BadRequest = (err: any) => {
  if (err.response) {
    const { response } = err;
    if (response.status == 403) {
      Swal.fire({
        icon: "error",
        title: "Credenciales invalidas, verifique e intente de nuevo",
        confirmButtonColor: "#0a58ca",
      });
    }

    if (response.status == 401) {
      Swal.fire({
        icon: "error",
        title: "No posee los permisos suficientes para realizar esta accion",
        confirmButtonColor: "#0a58ca",
      });
    }
  } else {
    Swal.fire({
      icon: "error",
      title:
        "Estamos presentando inconvenientes de conexion, por favor intente mas tarde.",
      confirmButtonColor: "#0a58ca",
    });
  }
};

export const signInSuccess = (
  headers: any,
  form: Record<string, any>,
  setSignIn: (token: string) => void
) => {
  let token = headers.getAuthorization();
  Swal.fire({
    icon: "success",
    title: `Hola ${form.email}`,
    text: " credenciales correctas bienvenido al sistema",
    confirmButtonText: "OK",
    confirmButtonColor: "#0a58ca",
  }).then(() => {
    setSignIn(token);
  });
};

export const signUpSuccess = (
  headers: any,
  form: Record<string, any>,
  setSignIn: (token: string) => void
) => {
  let token = headers.getAuthorization();
  Swal.fire({
    icon: "success",
    title: `Hola ${form.firstName}`,
    text: "Su registro se genero de manera exitosa en el sistema",
    confirmButtonText: "OK",
    confirmButtonColor: "#0a58ca",
  }).then(() => {
    setSignIn(token);
  });
};
