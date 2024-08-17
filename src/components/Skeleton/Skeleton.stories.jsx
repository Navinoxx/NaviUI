import { Box, Grid, Stack } from "../Layout";
import { Skeleton } from "./Skeleton";
import { Typography } from "../Typography";
import { Avatar } from "../Avatar";

export default {
    title: "Components/Skeleton",
    component: Skeleton,
    parameters: {
        layout: "centered",
    },
};

export const Variants = {
    args: {},
    render: (args) => (
        <Stack spacing={2}>
            <Skeleton {...args} variant="text" />
            <Skeleton {...args} variant="circular" width={40} height={40} />
            <Skeleton {...args} variant="rectangular" width={210} height={60} />
            <Skeleton {...args} variant="rounded" width={210} height={60} />
        </Stack>
    )
}

export const Animations = {
    args: {},
    render: (args) => (
        <Stack spacing={2} className="w-96">
            <Skeleton {...args} />
            <Skeleton {...args} animation="wave" />
            <Skeleton {...args} animation={false} />
        </Stack>
    )
}

export const InferringDimensions = {
    args: {},
    render: (args) => {
        const loading = true
        const variants = ['h1', 'h3', 'body1', 'caption'];

        return (
            <Grid container spacing={8} columns={12}>
                <Grid item colSpan={6}>
                    {variants.map((variant) => (
                        <Typography key={variant} variant={variant}>
                            {loading ? <Skeleton {...args} /> : variant}
                        </Typography>
                    ))}
                </Grid>
                <Grid item colSpan={6}>
                    {variants.map((variant) => (
                        <Typography key={variant} variant={variant}>
                            {variant}
                        </Typography>
                    ))}
                </Grid>
            </Grid>
        )
    }
}

export const WithChildren = {
    args: {},
    render: (args) => {
        const loading = true

        return (
            <Box className="flex items-center gap-10">
                <Box className="flex gap-2">
                    {loading ? (
                        <Skeleton {...args} variant="circular">
                            <Avatar />
                        </Skeleton>
                        ) : (
                        <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
                    )}
                    {loading ? (
                        <Skeleton {...args}>
                            <Typography variant="h5">Ted</Typography>
                        </Skeleton>
                        ) : (
                        <Typography variant="h5">Ted</Typography>
                    )}
                </Box>
                <Box className="flex gap-2">
                    <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
                    <Typography variant="h5">Ted</Typography>
                </Box>
            </Box>
        )
    }
}