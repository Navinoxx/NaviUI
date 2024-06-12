import { Grid } from "./Grid";
import { Box } from "../Box";

export default {
    title: 'Components/Layout/Grid',
    component: Grid,
    parameters: {
        layout: 'fullscreen',
    },
}

export const Basic = {
    args: {
        children: 'Box',
    },
    render: (args) => (
        <Grid container spacing={2} columns={4} {...args}>
            {[1, 2, 3, 4].map(i =>
            <Grid item key={i} >
                <Box component="div" className="border p-5 bg-slate-100 flex justify-center items-center">
                    {args.children} {i}
                </Box>
            </Grid>
            )}
        </Grid>
    ),
}

export const Complex = {
    args: {
        children: 'Box',
    },
    render: (args) => (
        <Grid container spacing={2} columns={12} {...args}>
            <Grid item span={12}>
                <Box component="div" className="border p-5 bg-slate-100 flex justify-center items-center">
                    {args.children} span 12
                </Box>
            </Grid>
            <Grid item span={6} >
                <Box component="div" className="border p-5 bg-slate-100 flex justify-center items-center">
                    {args.children} span 6
                </Box>
            </Grid>
            <Grid item span={6} >
                <Box component="div" className="border p-5 bg-slate-100 flex justify-center items-center">
                    {args.children} span 6
                </Box>
            </Grid>
            <Grid item span={2}>
                <Box component="div" className="border p-5 bg-slate-100 flex justify-center items-center">
                    {args.children} span 2
                </Box>
            </Grid>
            <Grid item span={10} >
                <Box component="div" className="border p-5 bg-slate-100 flex justify-center items-center">
                    {args.children} span 11
                </Box>
            </Grid>
        </Grid>
    ),
}