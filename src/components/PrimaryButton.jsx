import React from 'react';
import colors from '../tokens/colors';
import spacing from '../tokens/spacing';
import { typography } from '../tokens/typography';

const PrimaryButton = ({ label, onClick }) => {
  return (
    <button
      style={{
        backgroundImage: colors.gradient.primary,
        padding: `${spacing.md} ${spacing.xl}`,
        color: colors.text.primario,
        fontFamily: typography.body.fontFamily,
        fontSize: typography.body.fontSize,
        fontWeight: typography.body.fontWeight,
        borderRadius: '12px',
        border: 'none',
        width: '100%',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
