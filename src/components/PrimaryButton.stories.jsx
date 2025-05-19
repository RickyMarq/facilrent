import React from 'react';
import PrimaryButton from './PrimaryButton';

export default {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
};

const Template = (args) => <PrimaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Entrar',
  onClick: () => alert('Clique no botão!'),
};