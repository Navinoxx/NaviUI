import { Breadcrumbs } from "./Breadcrumbs";

export default {
    title: "Components/Breadcrumbs",
    component: Breadcrumbs,
    parameters: {
        layout: "centered",
    },
};

export const Basic = {
    args: {},
    render: (args) => (
        <Breadcrumbs {...args}>
            <p>Home</p>
            <p>Components</p>
            <p>Breadcrumbs</p>
        </Breadcrumbs>
    )
};

export const Separator = {
    args: {},
    render: (args) => (
        <div className="space-y-8">
            <Breadcrumbs {...args} separator=">">
                <p>Home</p>
                <p>Components</p>
                <p>Breadcrumbs</p>
            </Breadcrumbs>
            <Breadcrumbs {...args} separator=">>">
                <p>Home</p>
                <p>Components</p>
                <p>Breadcrumbs</p>
            </Breadcrumbs>
            <Breadcrumbs {...args} separator="-">
                <p>Home</p>
                <p>Components</p>
                <p>Breadcrumbs</p>
            </Breadcrumbs>
            <Breadcrumbs {...args} separator="|">
                <p>Home</p>
                <p>Components</p>
                <p>Breadcrumbs</p>
            </Breadcrumbs>
        </div>
    )
}

export const CollapsedBreadcrumbs = {
    args: {
        maxItems: 3
    },
    render: (args) => (
        <Breadcrumbs {...args}>
            <p>Home</p>
            <p>Catalog</p>
            <p>Accessories</p>
            <p>New collection</p>
            <p>Belts</p>
            <p>Breadcrumbs</p>
        </Breadcrumbs>
    )
}

export const CustomBreadcrumbs = {
    args: {
        separator: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>,
    },
    render: (args) => (
        <Breadcrumbs {...args} className="rounded-full bg-gradient-to-tr from-gray-900 to-gray-700 p-1">
            <p className="rounded-full bg-white px-3 py-1">Home</p>
            <p className="rounded-full bg-white px-3 py-1">Components</p>
            <p className="rounded-full bg-white px-3 py-1">Breadcrumbs</p>
        </Breadcrumbs>
    )
}