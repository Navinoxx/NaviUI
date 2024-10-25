import { FC } from "react";

export interface InputProps {
    id: string | number;
    variant?: 'Outlined' | 'Filled' | 'Standard';
    ariaDescribedBy?: string;
    label?: string;
    type?: string;
    color?: 'blue' | 'red' | 'green' | 'indigo' | 'purple' | 'pink' | 'black';
    disabled?: boolean;
    validate?: (value: string) => boolean;
    helperText?: string;
    placeholder?: string;
    onBlur?: () => void;
    onFocus?: () => void;
    onChange?: () => void;
    value?: string;
    defaultValue?: string;
    readOnly?: boolean;
    required?: boolean;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    inputRef?: any;
    inputProps?: any;
    className?: string | { 
        root?: string; 
        label?: string; 
        inputContainer?: string; 
        input?: string; 
        fieldset?: string; 
        legend?: string;
        helperText?: string
    }
}

export const Input: FC<InputProps>;