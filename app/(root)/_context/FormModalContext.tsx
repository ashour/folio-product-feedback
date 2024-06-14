"use client";

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

const FormModalContext = createContext<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>({ isOpen: false, setIsOpen: () => {} });

export const FormModalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FormModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </FormModalContext.Provider>
  );
};

export const useFormModalContext = () => {
  return useContext(FormModalContext);
};
