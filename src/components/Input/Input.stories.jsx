import { useState } from "react";
import { Input } from "./Input";
import { IconButton } from "../IconButton";
import { Visibility } from "@/icons/visibility";
import { VisibilityOff } from "@/icons/visibilityOff";

export default {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        color: {
            control: { type: 'none' },
        },
    },
}

export const Basic = {
    args: {},
    render: (args) => (
        <div className="flex gap-5">
            <Input {...args} variant="Outlined" label="Outlined" />
            <Input {...args} variant="Filled" label="Filled" />
            <Input {...args} variant="Standard" label="Standard" />
        </div>
    )
}

export const UncontrolledVsControlled = {
    args: {},
    render: (args) => {
        const [name, setName] = useState('Cat in the Hat');

        return (
            <div className="flex gap-5">
                <Input {...args} id="outlined-controlled" variant="Outlined" label="Controlled" value={name} onChange={(event) => setName(event.target.value)} />
                <Input {...args} id="outlined-uncontrolled" variant="Outlined" label="Uncontrolled" defaultValue="foo" />
            </div>
        )
    }
}

export const ValidationAndHelperText = {
    args: {
        label: "Error",
        helperText: 'Value must be longer than 3 characters',
    },
    render: (args) => {
        const [name, setName] = useState('Cat');

        const validation = (name) => name.length <= 3

        return (
            <div className="flex gap-5">
                <Input {...args}
                    id="outlined-error"
                    variant="Outlined"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    validate={validation}
                />
                <Input {...args}
                    id="filled-error"
                    variant="Filled"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    validate={validation}
                />
                <Input {...args}
                    id="standard-error"
                    variant="Standard"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    validate={validation}
                />
            </div>
        )
    }
}

export const InputAdornment = {
    args: {},
    render: (args) => {
        const [showPassword, setShowPassword] = useState(false);

        const handleClickShowPassword = () => {
            setShowPassword((prevShowPassword) => !prevShowPassword);
        };

        return (
            <div className="flex gap-5">
                <Input {...args}
                    id="outlined-normal"
                    variant="Outlined" 
                    label="With normal text"
                    startAdornment={
                        <p className="text-slate-400">Kg</p>
                    }
                    />
                <Input {...args} 
                    id="outlined-adornment" 
                    variant="Outlined" 
                    label="With normal text"
                    endAdornment={
                        <p className="text-slate-400">Kg</p>
                    }
                    helperText="Weight"
                    />
                <Input {...args}
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    variant="Outlined" 
                    label="Password" 
                    endAdornment={
                        <IconButton size="sm" onClick={handleClickShowPassword}>
                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                    }/>
            </div>
        )
    }
}