import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '6rem 2rem', background: 'linear-gradient(to top, #0B132B, #1C2541)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                    Ready to <span style={{ color: 'var(--color-primary)' }}>Ascend?</span>
                </h2>
                <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '3rem' }}>
                    Join our Discord server to book a service or ask any questions. <br />
                    Our team is available 24/7.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <a href="#" style={{
                        background: '#5865F2', // Discord Color
                        color: '#fff',
                        padding: '1rem 2rem',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontWeight: 'bold',
                        transition: 'transform 0.2s'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <MessageCircle size={24} /> Join Discord
                    </a>

                    <a href="#" style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        padding: '1rem 2rem',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontWeight: 'bold',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        transition: 'transform 0.2s'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <Mail size={24} /> Email Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
