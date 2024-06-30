import { useState } from "react";
import { Button } from "../Button";
import { Drawer } from "./Drawer";

export default {
    title: "Components/Drawer",
    component: Drawer,
    parameters: {
        layout: "centered",
    },
};

export const Basic = {
    args: {},
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setIsOpen(true)} rounded>Open</Button>
                <Drawer open={isOpen} onClose={setIsOpen} {...args}>
                    <p>This is a drawer</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sequi. Cupiditate unde suscipit quasi odit quidem asperiores itaque quae laborum hic ducimus vel minus, porro alias aperiam debitis accusantium quis.</p>
                </Drawer>
            </>
        );
    },
};

export const Placement = {
    args: {},
    render: (args) => {
        const [openStates, setOpenStates] = useState({
            top: false,
            bottom: false,
            left: false,
            right: false,
        });

        const handleOpen = (placement) => {
            setOpenStates((prevStates) => ({
                ...prevStates,
                [placement]: true,
            }));
        };

        const handleClose = () => {
            setOpenStates((prevStates) => ({
                ...prevStates,
                top: false,
                bottom: false,
                left: false,
                right: false,
            }));
        };

        return (
            <div className="flex gap-4">
                {["top", "bottom", "left", "right"].map((placement) => (
                    <div key={placement}>
                        <Button onClick={() => handleOpen(placement)} rounded>
                            {placement}
                        </Button>
                        <Drawer
                            open={openStates[placement]}
                            onClose={handleClose}
                            placement={placement}
                            {...args}
                        >
                            <p>This is a drawer</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Repellendus asperiores eius
                                a quo quasi numquam itaque distinctio. Molestias
                                molestiae, beatae fuga dicta iusto soluta
                                minus perspiciatis quae provident. Consequatur,
                                fugit.
                            </p>
                        </Drawer>
                    </div>
                ))}
            </div>
        );
    },
};
