import { useRouter } from "next/router";
import Quiz from "../../components/Quiz";

const QuizPage = () => {
  const router = useRouter();
  const { subject } = router.query;

  if (!subject || (subject !== "math" && subject !== "english")) {
    return <div>Invalid subject</div>;
  }

  return <Quiz subject={subject as "math" | "english"} />;
};

export default QuizPage;
