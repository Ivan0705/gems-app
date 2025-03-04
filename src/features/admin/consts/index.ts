export const loadAuthFromLocalStorage = () => {
  const isAuth = localStorage.getItem("auth");
  return isAuth ? JSON.parse(isAuth) : Boolean(null);
};

export const pathToUsersBeforeAndAfterProd =
  process.env.NODE_ENV === "production"
    ? "/gems-app/db/users.json"
    : "./public/db/users.json";
