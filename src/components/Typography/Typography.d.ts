import { FC } from "react";

/**
 * Props for the Typography component.
 */
interface TypographyProps {
    /**
     * The variant of the typography.
     */
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline';

    /**
     * The alignment of the text.
     */
    align?: 'left' | 'center' | 'right';

    /**
     * The class name to apply to the typography element.
     */
    className?: string;
}

export const Typography: FC<TypographyProps>;