import React, {FC} from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Spinner: FC<{ loading?: boolean; size?: number }> = ({
                                                               loading = true,
                                                               size
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
                color="#fff"
                size={size}
                loading={loading}
                aria-label="Loading Spinner"
            />
        </div>
    );
};

export default Spinner;
