import React from "react";
import { InputCom } from "./InputCom";

export default {
    title: 'common/InputCom',
    component: InputCom,
}

const Template = (args) => <InputCom {...args}/>;

export const test = Template.bind({});

test.args = {
    label: '체크박스다',
    widthTest: '100px',
    heightTest: '100px',
    boo: false,
}