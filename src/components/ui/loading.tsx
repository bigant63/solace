import { Card, CardContent } from "@/components/ui";
import Spinner from "./spinner";

interface LoadingProps {
  message?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Loading({
  message = "Loading...",
  size = "md",
  className = "",
}: LoadingProps) {
  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center justify-center space-y-3">
          <Spinner size={size} className="text-primary" />
          <p className="text-sm text-muted-foreground">{message}</p>
        </div>
      </CardContent>
    </Card>
  );
}
