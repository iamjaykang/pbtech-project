import React from "react";

const RestartButton = ({restartModal}) => {
  return (
    <button onClick={restartModal} className="flex gap-1 mt-6">
      <span className="text-pb-dark-gray pl-6 mb-11">Restart</span>
    </button>
  );
};

export default RestartButton;
