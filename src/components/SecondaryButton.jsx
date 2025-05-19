import React from 'react';
import colors from '../tokens/colors';
import spacing from '../tokens/spacing';
import { typography } from '../tokens/typography';

const SecondaryButton = ({ label, onClick }) => {
  return (
    <button
      style={{
        background: 'linear-gradient(90deg, #790EFB 0%, #FF6B00 100%)',
        borderRadius: '12px',
        padding: '1px',
        border: 'none',
        width: '100%',
        display: 'inline-block',
        boxSizing: 'border-box',
      }}
      onClick={onClick}
    >
      <span
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          color: colors.text.primario,
          fontFamily: typography.body.fontFamily,
          fontSize: typography.body.fontSize,
          fontWeight: typography.body.fontWeight,
          padding: `${spacing.md} ${spacing.xl}`,
          borderRadius: '12px',
          width: '100%',
          boxSizing: 'border-box',
          letterSpacing: '0.5px',
        }}
      >
        {label}
      </span>
    </button>
  );
};

export default SecondaryButton;