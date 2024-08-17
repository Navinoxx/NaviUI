import { useState } from "react";
import { Button } from "../Button";
import { Snackbar } from "./Snackbar";
import { Box, Grid } from "../Layout";
import { Alert } from "../Alert";

export default {
    title: "Components/Snackbar",
    component: Snackbar,
    parameters: {
        layout: "centered",
    },
};

export const Basic = {
    args: {},
    render: (args) => {
        const [open, setOpen] = useState(false);

        const handleClick = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        return (
            <div>
                <Button variant="ghost" onClick={handleClick}>Open Snackbar</Button>
                <Snackbar
                    {...args}
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                    message="Note archived"
                />
            </div>
        )
    }
}

export const Position = {
    args: {},
    render: (args) => {
        const [open, setOpen] = useState({ state: false, position: null });

        const handleClick = (position) => {
            setOpen({ state: true, position });
        };

        const handleClose = () => {
            setOpen({ state: false });
        };

        const { state, position } = open;

        return (
            <Box className="w-96">
                <Box className="flex justify-center">
                    <Button variant="ghost" onClick={() => handleClick("topCenter")}>
                        Top-Center
                    </Button>
                </Box>
                <Grid container columns={12}>
                    <Grid item colSpan={6}>
                        <Button variant="ghost" onClick={() => handleClick("topLeft")}>
                            Top-Left
                        </Button>
                    </Grid>
                    <Grid item colSpan={6} className="flex justify-end">
                        <Button variant="ghost" onClick={() => handleClick("topRight")}>
                            Top-Right
                        </Button>
                    </Grid>
                    <Grid item colSpan={6}>
                        <Button variant="ghost" onClick={() => handleClick("bottomLeft")}>
                            Bottom-Left
                        </Button>
                    </Grid>
                    <Grid item colSpan={6} className="flex justify-end">
                        <Button variant="ghost" onClick={() => handleClick("bottomRight")}>
                            Bottom-Right
                        </Button>
                    </Grid>
                </Grid>
                <Box className="flex justify-center">
                    <Button variant="ghost" onClick={() => handleClick("bottomCenter")}>
                        Bottom-Center
                    </Button>
                </Box>
                <Snackbar
                    {...args}
                    open={state}
                    onClose={handleClose}
                    autoHideDuration={1000}
                    position={position}
                    message="Note archived"
                />
            </Box>
        );
    }
}

export const UseWithAlert = {
    args: {},
    render: (args) => {
        const [open, setOpen] = useState(false);

        const handleClick = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        return (
            <div>
                <Button variant="ghost" onClick={handleClick}>Open Snackbar</Button>
                <Snackbar
                    {...args}
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                    disableWindowBlurListener
                >
                    <Alert
                        variant="success"
                        message="This is a success Alert inside a Snackbar!"
                        withIcon
                    />
                </Snackbar>
            </div>
        )
    }
}