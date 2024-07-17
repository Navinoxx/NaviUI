import { Box, Grid, Stack } from "../Layout";
import { Button } from "../Button";
import { Tooltip } from "./Tooltip";

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
};

export const Basic = {
    args: {
        content: "Tooltip",
        children: <Button>Hover me</Button>,
    },
}

export const Arrow = {
    args: {
        content: "Tooltip",
        arrow: true,
        children: <Button>Hover me</Button>,
    },
}


export const Placement = {
    args: {
        content: "Tooltip",
    },
    render: (args) => (
        <Box>
            <Grid container className="justify-center mb-5">
                <Grid item colSpan={12} className="flex gap-2">
                    <Tooltip {...args} placement="topStart">
                        <Button>top start</Button>
                    </Tooltip>
                    <Tooltip {...args} placement="top">
                        <Button>top</Button>
                    </Tooltip>
                    <Tooltip {...args} placement="topEnd">
                        <Button>top end</Button>
                    </Tooltip>
                </Grid>
            </Grid>
            <Grid container columns={12}>
                <Grid item colSpan={6}>
                    <Stack alignItems="start" spacing={2}>
                        <Tooltip {...args} placement="leftStart">
                            <Button>left start</Button>
                        </Tooltip>
                        <Tooltip {...args} placement="left">
                            <Button>left</Button>
                        </Tooltip>
                        <Tooltip {...args} placement="leftEnd">
                            <Button>left end</Button>
                        </Tooltip>
                    </Stack>
                </Grid>
                <Grid item colSpan={6}>
                    <Stack alignItems="end" spacing={2}>
                        <Tooltip {...args} placement="rightStart">
                            <Button>right start</Button>
                        </Tooltip>
                        <Tooltip {...args} placement="right">
                            <Button>right</Button>
                        </Tooltip>
                        <Tooltip {...args} placement="rightEnd">
                            <Button>right end</Button>
                        </Tooltip>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container className="justify-center mt-5">
                <Grid item colSpan={12} className="flex gap-2">
                    <Tooltip {...args} placement="bottomStart">
                        <Button>bottom start</Button>
                    </Tooltip>
                    <Tooltip {...args} placement="bottom">
                        <Button>bottom</Button>
                    </Tooltip>
                    <Tooltip {...args} placement="bottomEnd">
                        <Button>bottom end</Button>
                    </Tooltip>
                </Grid>
            </Grid>
        </Box>
    )
}