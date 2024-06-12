import { Box } from "./Box";

export default {
    title: 'Components/Layout/Box',
    component: Box,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        component: {
            control: { type: 'none' },
        },
    },
    render: (args) => (
        <Box {...args} component="main" className="border p-10 bg-slate-100" />
    )
}

export const Example = {
    args: {
        children: 'Box model',
    },
}