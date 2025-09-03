import React, { FC, memo, PropsWithChildren } from 'react';

const FmTooltip: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="bg-yellow px-[31px] py-[11px]">{children}</div>
      <div
        className="w-0 h-0 border-l-[8px] border-r-[8px]
                border-t-[8px] border-l-transparent border-r-transparent border-t-yellow"
      />
    </div>
  );
};

export default memo(FmTooltip);
