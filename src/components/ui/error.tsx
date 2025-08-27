import { Card, CardContent } from "@/components/ui";
import { AlertCircle } from "lucide-react";

interface ErrorProps {
  message: string;
  title?: string;
  className?: string;
}

export default function ErrorCard({
  message,
  title = "Error",
  className = "",
}: ErrorProps) {
  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="flex items-center justify-center space-x-2 text-destructive">
          <AlertCircle className="h-5 w-5" />
          <div className="text-center">
            {title && <h3 className="font-semibold">{title}</h3>}
            <p className="text-sm">{message}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
