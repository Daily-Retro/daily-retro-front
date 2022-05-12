export interface commonType {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: () => void;
  onCancel?: () => void;
  primary?: string;
  visible?: boolean;
}

export interface multipleChildType {
  children: React.ReactNode;
}
