import { Rocket } from "lucide-react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-primary-600 font-bold text-xl"
    >
      <Rocket className="w-6 h-6" />
      StartAppЁж
    </Link>
  );
};
