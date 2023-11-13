import React, { createContext, useState } from "react";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const initialValue = { isVisible: false, toggleSideBarVisibility: () => {} };

export const SideBarContext = createContext(initialValue);

const SideBarProvider = ({ children }: Props) => {
  const [isVisible, setisVisible] = useState<boolean>(true);

  const toggleSideBarVisibility = () => {
    setisVisible((prev) => !prev);
  };

  return (
    <SideBarContext.Provider value={{ isVisible, toggleSideBarVisibility }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;
