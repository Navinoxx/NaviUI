import { Stack } from "./Stack";
import { Box } from "../Box";

const boxes = [1, 2, 3]

export default {
    title: 'Components/Layout/Stack',
    component: Stack,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        direction: {
            control: { type: 'select' },
        },
        justifyContent: {
            control: { type: 'select' },
        },
        alignItems: {
            control: { type: 'select' },
        },
        spacing: {
            control: { type: 'select' },
        },
        className: {
            control: { type: 'none' },
        },
    },
    render: (args) => (
        <Stack {...args} className="h-[100vh]">
            {boxes.map(box => 
                <Box component="div" className="border p-5 bg-slate-100 flex justify-center items-center" key={box} {...args} >
                    {args.children} {box}
                </Box>
            )}
        </Stack>
    )
}

export const Example = {
    args: {
        children: 'Box',
    },
}