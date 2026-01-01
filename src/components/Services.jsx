import React from 'react';
import { Map, Sword, Clock, Calendar } from 'lucide-react';

const services = [
    {
        icon: <Map size={40} />,
        title: '大世界探索',
        description: '100% 地圖探索度、神瞳收集、寶箱全清。我們為您探索提瓦特的每一個角落。'
    },
    {
        icon: <Sword size={40} />,
        title: '深境螺旋',
        description: '保證滿星通關。我們的專業打手將優化您的隊伍配置，輕鬆攻略最高難度關卡。'
    },
    {
        icon: <Clock size={40} />,
        title: '日常代肝',
        description: '每日委託、清體力、派遣探索。讓您的帳號在您忙碌時也能持續成長。'
    },
    {
        icon: <Calendar size={40} />,
        title: '活動代打',
        description: '快速完成限時活動，確保您不會錯過任何原石和限定獎勵。'
    }
];

const Services = () => {
    return (
        <section id="services" style={{ padding: '6rem 2rem', background: 'var(--color-bg)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '2.5rem',
                    marginBottom: '3rem',
                    color: 'var(--color-text)'
                }}>
                    服務 <span style={{ color: 'var(--color-primary)' }}>項目</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <div key={index} style={{
                            background: 'var(--color-card-bg)',
                            padding: '2rem',
                            borderRadius: '1rem',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            transition: 'transform 0.3s, border-color 0.3s',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--color-primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                        >
                            <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                            <p style={{ color: '#ccc', lineHeight: '1.6' }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
