import React from 'react';
import SecondaryButton from './SecondaryButton';

export default {
  title: 'Components/SecondaryButton',
  component: SecondaryButton,
};

const Template = (args) => <SecondaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Eu ainda não tenho conta',
  onClick: () => alert('Clique no botão secundário!'),
};
