import { Agentation } from "agentation";

export default function Layout({ children }) {
  return (
    <>
      {children}
      {import.meta.env.DEV && <Agentation />}
    </>
  );
}
