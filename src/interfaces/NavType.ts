import { Dispatch, SetStateAction } from 'react';

export interface clickType {
  click: boolean;
  setClick: Dispatch<SetStateAction<boolean>>;
}
