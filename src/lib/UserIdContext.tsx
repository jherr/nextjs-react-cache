import { createContext, useContext } from "react";

const UserIdContext = createContext<number | null>(null);

export const UserIdProvider = ({
  userId,
  children,
}: {
  userId: number;
  children: React.ReactNode;
}) => {
  return (
    <UserIdContext.Provider value={userId}>{children}</UserIdContext.Provider>
  );
};

export const useUserId = () => useContext(UserIdContext);
