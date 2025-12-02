import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl text-primary font-mono font-bold tracking-tight">ThinkBoard</h1>
          <div className="flex items-center gap-4">
            <Link to="/create" className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
