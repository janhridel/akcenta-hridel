import { Card, CardContent, Typography } from '@mui/material';
import { useState } from 'react';

import { UserCardProps } from '../../lib/definitions/props/UserCardProps';

const UserCard = (props: UserCardProps) => {
  const { userData } = props;
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Card onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} elevation={isHovered ? 6 : 1}>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {userData.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {userData.address.city}
          {isHovered && `, ${userData.address.street}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
