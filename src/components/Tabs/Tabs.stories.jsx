import { Tabs } from "./Tabs";
import { Tab } from "./Tab";

export default {
    title: "Components/Tabs",
    component: Tabs,
    parameters: {
        layout: "centered",
    },
}

export const Basic = {
    args: {},
    render: (args) => (
        <Tabs {...args} defaultValue="tab1">
            <Tab value="tab1" label="Dashboard"/>
            <Tab value="tab2" label="Profile"/>
            <Tab value="tab3" label="Settings"/>
        </Tabs>
    )
}

export const Vertical = {
    args: {
        orientation: "vertical",
        indicatorPosition: "left",
    },
    render: (args) => (
        <Tabs {...args} defaultValue="tab4">
            <Tab value="tab4" label="Dashboard"/>
            <Tab value="tab5" label="Profile"/>
            <Tab value="tab6" label="Settings"/>
        </Tabs>
    )
}

export const WithIconAndPosition = {
    args: {},
    render: (args) => (
        <Tabs {...args} defaultValue="tab7">
            <Tab value="tab7" icon="📁" iconPosition="start" label="Dashboard"/>
            <Tab value="tab8" icon="👤" iconPosition="top" label="Profile"/>
            <Tab value="tab9" icon="⚙️" iconPosition="bottom" label="Settings"/>
        </Tabs>
    )
}

export const CustomIndicator = {
    args: {},
    render: (args) => (
        <Tabs {...args} defaultValue="tab10" textColor="white" indicatorCustom="bg-white rounded-full h-full mix-blend-difference" className="bg-white">
            <Tab value="tab10" label="Dashboard"/>
            <Tab value="tab11" label="Profile"/>
            <Tab value="tab12" label="Settings"/>
        </Tabs>
    )
}