import React from 'react';
import { User, Shield, Star } from 'lucide-react';

const BoosterCard = ({ booster, isSelected, onSelect }) => {
    const isAvailable = booster.name !== "Available";

    return (
        <div
            onClick={() => isAvailable && onSelect(booster)}
            style={{
                background: isSelected ? 'rgba(212, 175, 55, 0.2)' : 'var(--color-card-bg)',
                border: isSelected ? '2px solid var(--color-primary)' : '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '1rem',
                padding: '1.5rem',
                cursor: isAvailable ? 'pointer' : 'not-allowed',
                opacity: isAvailable ? 1 : 0.5,
                transition: 'all 0.3s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '0.5rem',
                minWidth: '200px'
            }}
        >
            <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: '#333',
                overflow: 'hidden',
                marginBottom: '0.5rem',
                border: '2px solid var(--color-accent)'
            }}>
                {booster.image ? (
                    <img src={booster.image} alt={booster.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <User size={40} color="#666" />
                    </div>
                )}
            </div>

            <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{booster.name}</h3>
            <span style={{ fontSize: '0.9rem', color: 'var(--color-primary)' }}>{booster.role}</span>

            {isAvailable && (
                <div style={{ fontSize: '0.8rem', color: '#ccc', marginTop: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                        <Shield size={12} /> {booster.level ? `角色等級 ${booster.level}` : `冒險等級 ${booster.ar}`}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                        <Star size={12} /> 主玩: {booster.main}
                    </div>
                    {booster.storyLevel && (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                            <span style={{ fontSize: '0.8rem' }}>劇情等級 {booster.storyLevel}</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default BoosterCard;
