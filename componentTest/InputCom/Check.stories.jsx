import React from "react";
import { Check } from "./Check";

export default {
    title: 'common/Check',
    component: Check,
}

const Template = (args) => <Check {...args}/>;

export const test = Template.bind({});

test.args = {
    label: '체크하자',
    bo: false,
}