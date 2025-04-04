import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center h-full">
      <FontAwesomeIcon icon={faSpinner} spin size="lg" className="text-rose-400 w-5 h-5" />
    </div>
  );
}
