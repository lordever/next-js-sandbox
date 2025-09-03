import React, { FC } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export enum FmSpinnerColorKeys {
  WHITE = 'white',
  YELLOW = 'yellow',
}

interface FmSpinnerProps {
  loading?: boolean;
  size?: number;
  color?: FmSpinnerColorKeys;
}

const COLOR_MAP: Record<FmSpinnerColorKeys, string> = {
  [FmSpinnerColorKeys.WHITE]: '#fff',
  [FmSpinnerColorKeys.YELLOW]: '#FCB72B',
};

const FmSpinner: FC<FmSpinnerProps> = ({
  loading = true,
  color = FmSpinnerColorKeys.WHITE,
  size,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
      }}
    >
      <ClipLoader
        color={COLOR_MAP[color]}
        size={size}
        loading={loading}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default FmSpinner;
