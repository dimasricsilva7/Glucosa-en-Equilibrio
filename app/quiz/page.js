import QuizClient from "./QuizClient";
import { getSettings } from "../../lib/db";
import { withDefaults } from "../../lib/defaults";

export const dynamic = "force-dynamic";

export default async function QuizPage() {
  const s = withDefaults(await getSettings());
  return <QuizClient checkoutUrl={s.checkoutUrl} />;
}
