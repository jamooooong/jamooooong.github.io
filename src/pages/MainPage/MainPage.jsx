import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <>
      <p>mainPage</p>
      <button onClick={() => navigate(routes.about)}>Click me</button>
    </>
  );
}
