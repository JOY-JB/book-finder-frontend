import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/ui/common/Loading";
import { useAppSelector } from "../redux/hook";

interface IProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IProps) => {
  const { user, isLoading } = useAppSelector((state) => state.user);

  const { pathname } = useLocation();

  if (isLoading) {
    <Loading />;
  }
  if (!user.email && !isLoading) {
    return <Navigate to={"/sign-in"} state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
