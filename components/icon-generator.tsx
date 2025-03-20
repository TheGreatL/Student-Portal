import {Reaction} from '@prisma/client';
import React from 'react';
import {Frown, Heart, Laugh, PartyPopper, Smile, ThumbsUp} from 'lucide-react';
import {Button} from './ui/button';

export default function IconGenerator({reaction}: {reaction: Reaction}) {
  let ReactionIcon = Smile;
  let color = '#6c757d'; // Default color (gray)

  switch (reaction) {
    case 'sad':
      ReactionIcon = Frown;
      color = '#0d6efd'; // Blue
      break;
    case 'angry':
      ReactionIcon = Frown;
      color = '#dc3545'; // Red
      break;
    case 'celebrate':
      ReactionIcon = PartyPopper;
      color = '#ffc107'; // Yellow
      break;
    case 'heart':
      ReactionIcon = Heart;
      color = '#d63384'; // Pink
      break;
    case 'laugh':
      ReactionIcon = Laugh;
      color = '#198754'; // Green
      break;
    case 'like':
      ReactionIcon = ThumbsUp;
      color = '#6f42c1'; // Purple
      break;
  }

  return (
    <Button variant={'outline'}>
      <ReactionIcon
        color={'black'}
        fill={color}
      />
    </Button>
  );
}
