const pathToUsersBeforeProd="./db/users.json";
const pathToUsersAfterProd="/gems-app/db/users.json";

export const loadAuthFromLocalStorage = () => {
  const isAuth = localStorage.getItem("auth");
  return isAuth ? JSON.parse(isAuth) : Boolean(null);
};

export const pathToUsersBeforeAndAfterProd =
  process.env.NODE_ENV === "production"
    ? pathToUsersAfterProd
    : pathToUsersBeforeProd;
