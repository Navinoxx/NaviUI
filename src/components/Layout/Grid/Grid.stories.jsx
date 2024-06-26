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
        <Grid container spacing={2} columns={12} rows={10} {...args}>
            <Grid item colSpan={12} className="border p-5 bg-slate-100 flex justify-center items-center">
                {args.children} - colSpan 12
            </Grid>
            <Grid item colSpan={6} rowSpan={2} className="border p-5 bg-slate-100 flex justify-center items-center">
                {args.children} - colSpan 6 / rowSpan 2
            </Grid>
            <Grid item colSpan={6} className="border p-5 bg-slate-100 flex justify-center items-center">
                {args.children} - colSpan 6
            </Grid>
            <Grid item colSpan={2} className="border p-5 bg-slate-100 flex justify-center items-center">
                {args.children} - colSpan 2
            </Grid>
            <Grid item colSpan={10} rowSpan={3} className="border p-5 bg-slate-100 flex justify-center items-center">
                {args.children} - colSpan 11 / rowSpan 3
            </Grid>
        </Grid>
    ),
}