"use client";

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

const ModalContext = createContext<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>({ isOpen: false, setIsOpen: () => {} });

export const ModalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
