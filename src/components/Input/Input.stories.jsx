import { Input } from "./Input";

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
    render: (args) => (
        <div className="grid grid-cols-4 gap-8">
            <Input {...args} color="blue" />
            <Input {...args} color="red" />
            <Input {...args} color="green" />
            <Input {...args} color="indigo" />
            <Input {...args} color="purple" />
            <Input {...args} color="pink" />
            <Input {...args} color="black" />
        </div>
    )
}

export const Text = {
    args: {
        label: 'Name',
        type: 'text',
        placeholder: 'Enter your name',
    },
}

export const Password = {
    args: {
        label: 'Password',
        type: 'password',
        placeholder: 'Enter your password',
    },
}

export const Email = {
    args: {
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email',
    },
}

export const Number = {
    args: {
        label: 'Number',
        type: 'tel',
        placeholder: 'Enter your number',
    },
}

export const Search = {
    args: {
        label: 'Search',
        type: 'search',
        placeholder: 'Enter your search',
    },
}

export const Date = {
    args: {
        type: 'date',
    },
}