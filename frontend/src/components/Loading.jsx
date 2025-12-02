import { LoaderIcon } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <LoaderIcon className="animate-spin size-10" />
    </div>
  );
}
