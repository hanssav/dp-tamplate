import { FriendSuggestionContent } from '@components/_types/card';
import IMAGE_CONSTANTS from '@constant/images';

export const friendSuggestionData: FriendSuggestionContent[] = [
  {
    name: 'Andrew Grant',
    mainImage: IMAGE_CONSTANTS.FOLLOW_USER_1,
    mutualFriends: [
      IMAGE_CONSTANTS.FOLLOW_USER_2,
      IMAGE_CONSTANTS.FOLLOW_USER_3,
      IMAGE_CONSTANTS.FOLLOW_USER_4,
    ],
    mutualCount: 3,
  },
  {
    name: 'Maya Rivera',
    mainImage: IMAGE_CONSTANTS.FOLLOW_USER_2,
    mutualFriends: [
      IMAGE_CONSTANTS.FOLLOW_USER_1,
      IMAGE_CONSTANTS.FOLLOW_USER_4,
      IMAGE_CONSTANTS.FOLLOW_USER_3,
    ],
    mutualCount: 3,
  },
  {
    name: 'John Lee',
    mainImage: IMAGE_CONSTANTS.FOLLOW_USER_3,
    mutualFriends: [
      IMAGE_CONSTANTS.FOLLOW_USER_1,
      IMAGE_CONSTANTS.FOLLOW_USER_2,
      IMAGE_CONSTANTS.FOLLOW_USER_4,
    ],
    mutualCount: 3,
  },
  {
    name: 'Emily Stone',
    mainImage: IMAGE_CONSTANTS.FOLLOW_USER_4,
    mutualFriends: [
      IMAGE_CONSTANTS.FOLLOW_USER_2,
      IMAGE_CONSTANTS.FOLLOW_USER_3,
      IMAGE_CONSTANTS.FOLLOW_USER_1,
    ],
    mutualCount: 3,
  },
];
