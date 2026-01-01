import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '6rem 2rem 2rem', // Top padding for fixed navbar
            background: `linear-gradient(rgba(11, 19, 43, 0.7), rgba(11, 19, 43, 0.9)), url('/images/hero-bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Background Elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--color-primary)',
                filter: 'blur(150px)',
                opacity: '0.2',
                borderRadius: '50%'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '10%',
                width: '250px',
                height: '250px',
                background: 'var(--color-accent)',
                filter: 'blur(120px)',
                opacity: '0.2',
                borderRadius: '50%'
            }} />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    marginBottom: '1.5rem',
                    lineHeight: '1.2',
                    textShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
                }}>
                    征服提瓦特 <br />
                    <span style={{ color: 'var(--color-primary)' }}>專業陪打服務</span>
                </h1>

                <p style={{
                    fontSize: '1.2rem',
                    color: '#ccc',
                    marginBottom: '2.5rem',
                    lineHeight: '1.6'
                }}>
                    從 100% 大世界探索到深淵滿星通關。<br />
                    安全、快速、可靠的原神代打與陪玩服務。
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="#services" style={{
                        background: 'var(--color-primary)',
                        color: '#000',
                        padding: '1rem 2rem',
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)'
                    }}>
                        查看服務 <ArrowRight size={20} />
                    </a>
                    <a href="#booking" style={{
                        background: 'transparent',
                        border: '2px solid var(--color-primary)',
                        color: 'var(--color-primary)',
                        padding: '1rem 2rem',
                        borderRadius: '50px',
                        fontWeight: 'bold'
                    }}>
                        立即預約
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
