import { Card, CardContent } from "@/components/ui";

interface LoadingProps {
  message?: string;
  size?: "md" | "lg";
  className?: string;
}

export default function Loading({
  message = "Loading...",
  size = "md",
  className = "",
}: LoadingProps) {
  const spinnerSize = size === "lg" ? "w-8 h-8" : "w-6 h-6";

  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center justify-center space-y-3">
          <div
            className={`${spinnerSize} animate-spin rounded-full border-2 border-gray-300 border-t-primary`}
          />
          <p className="text-sm text-muted-foreground">{message}</p>
        </div>
      </CardContent>
    </Card>
  );
}
