import { Dispatch, SetStateAction } from 'react';

export interface setNumberType {
  num: number;
  setNum: Dispatch<SetStateAction<number>>;
}

export interface setBooleanType {
  boolean: boolean;
  setBoolean: Dispatch<SetStateAction<boolean>>;
}
