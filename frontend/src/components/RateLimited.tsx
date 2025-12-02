import { ZapIcon } from "lucide-react";
import React from "react";

export default function RateLimited() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="border border-primary/30 rounded-lg bg-primary/10 shadow-md">
        <div className="flex flex-col items-center p-6 md:flex-row">
          <div className="shrink-0 mb-4 p-4 rounded-full bg-primary/20 md:mb-0 md:mr-6">
            <ZapIcon className="size-10 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="mb-2 text-xl font-bold">Rate Limited Reached</h3>
            <p className="mb-1 text-base-content">
              You've made too many request in a short periode. Please wait a moment.
            </p>
            <p className="text-sm text-base-content/70">Try again in a few seconds for the best experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
