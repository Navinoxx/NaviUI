import { useState } from "react";
import { Button } from "../Button";
import { Dialog } from "./Dialog";
import { Typography } from "../Typography";

export default {
    title: "Components/Dialog",
    component: Dialog,
    parameters: {
        layout: "centered",
    },
};

export const Basic = {
    args: {
        maxWidth: "md",
        children: 'This is the content of the dialog.',
    },
    render: (args) => {
        const [open, setOpen] = useState(false)

        const handleOpen = () => {
            setOpen(true)
        }

        const handleClose = () => {
            setOpen(false)
        }

        return (
            <>
                <Button onClick={() => handleOpen()}>Open Dialog</Button>
                <Dialog {...args} onClose={handleClose} open={open} />
            </>
        )
    }
};

export const OptionalSizes = {
    args: {},
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [maxWidth, setMaxWidth] = useState('sm');

        const handleOpen = () => {
            setIsOpen(true);
        };

        const handleClose = () => {
            setIsOpen(false);
        };

        const handleMaxWidthChange = (event) => {
            setMaxWidth(event.target.value);
        };

        return (
            <>
                <Button variant="outline" onClick={handleOpen}>
                    Open max-width dialog
                </Button>
                <Dialog
                    maxWidth={maxWidth}
                    open={isOpen}
                    onClose={handleClose}
                >
                    <Typography variant="h6">Optional sizes</Typography>
                    <Typography variant="body1">You can set my maximum width.</Typography>
                    <label htmlFor="max-width">maxWidth</label>
                    <select
                        id="max-width"
                        value={maxWidth}
                        onChange={handleMaxWidthChange}
                    >
                        <option value="xs">xs</option>
                        <option value="sm">sm</option>
                        <option value="md">md</option>
                        <option value="lg">lg</option>
                        <option value="xl">xl</option>
                    </select>
                    <Button variant="ghost" onClick={handleClose}>Close</Button>
                </Dialog>
            </>
        );
    }
}