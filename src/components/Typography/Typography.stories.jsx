import { Typography } from "./Typography";

const variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline'];

export default {
    title: 'Components/Typography',
    component: Typography,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: { type: 'none' },
        },
    },
    render: (args) => (
        <div className="flex flex-col">
            {variants.map((variant, i) => 
                <Typography key={i} variant={variant} {...args}>
                    {variant}. {args.children}
                </Typography>
            )}
        </div>
    )
};

export const Text = {
    args: {
        children: 'Example text',	
    },
}