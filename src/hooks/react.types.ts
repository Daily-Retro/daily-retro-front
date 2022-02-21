export interface commonProps{
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClick?: () => void;
    onCancel?: () => void;
    primary?: string;
    visible?: boolean;
}