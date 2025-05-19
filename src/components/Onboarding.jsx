import React from 'react';
import colors from '../tokens/colors';
import spacing from '../tokens/spacing';
import { typography } from '../tokens/typography';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

const Onboarding = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url('/src/assets/bg-onboarding.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: `0 ${spacing.md}`,
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          color: colors.text.primario,
        }}
      >
        <h2
          style={{
            ...typography.heading1,
            marginBottom: spacing.sm,
          }}
        >
          Bem vindo ao
        </h2>

        <h1
          style={{
            fontFamily: typography.heading1.fontFamily,
            fontSize: '40px',
            fontWeight: '700',
            lineHeight: '48px',
            letterSpacing: '0.02em',
            background: 'linear-gradient(90deg, #9D2FFF 0%, #FF5C00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: spacing.xxxl,
          }}
        >
          FacilRent
        </h1>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.md,
            width: '100%',
          }}
        >
          <PrimaryButton label="Entrar" onClick={() => console.log('Entrar')} />
          <SecondaryButton label="Eu ainda não tenho conta" onClick={() => console.log('Criar conta')} />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
