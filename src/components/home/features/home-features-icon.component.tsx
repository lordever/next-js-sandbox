'use client';

import React, { FC } from 'react';
import { FeatureModel } from '@/models/feature.model';
import Image from 'next/image';

type HomeFeaturesIconProps = Omit<FeatureModel, '_id' | 'description'>;

const HomeFeaturesIcon: FC<HomeFeaturesIconProps> = ({ imagePath, title }) => {
  return <Image src={imagePath} alt={title} width={96} height={96} />;
};

export default HomeFeaturesIcon;
