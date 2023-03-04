import { PlatformCard } from 'components';
import { platformsData, IPlatform } from 'mocks';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const PlatformDetailsPage = () => {
  const { id } = useParams();
  const [platform, setPlatform] = useState<IPlatform | undefined>();
  useEffect(() => {
    setPlatform(platformsData.find((item) => item.id === id));
  }, [id]);
  if (platform) {
    return <PlatformCard {...platform} />;
  }
  return null;
};
