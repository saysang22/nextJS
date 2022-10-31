import React from "react";
import Top from "./Top";

export default {
    title: 'common/top',
    component: Top,
}

const Template = (args) => <Top {...args}/>;

export const test = Template.bind({});

test.args = {
    label: 'lll'
}