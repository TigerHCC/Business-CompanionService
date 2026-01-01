import React, { useState, useEffect } from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import BoosterCard from './BoosterCard';
import boostersData from '../data/boosters.json';
import availabilityData from '../data/availability.json';

const BookingForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        game: 'Genshin Impact',
        booster: null,
        serviceType: 'Voice Coaching', // Voice or Pilot
        duration: 1, // Hours
        selectedSlot: null
    });

    const handleBoosterSelect = (booster) => {
        setFormData({ ...formData, booster });
        setStep(2);
    };

    const handleDurationChange = (delta) => {
        setFormData(prev => ({
            ...prev,
            duration: Math.max(1, prev.duration + delta)
        }));
    };

    const handleSlotSelect = (day, time) => {
        setFormData({ ...formData, selectedSlot: `${day} ${time}` });
    };

    const generateDiscordLink = () => {
        if (!formData.booster || !formData.selectedSlot) return '#';

        const price = formData.duration * 2000; // 1000 per 0.5h = 2000 per hour

        const message = `您好！我想要預約服務。
    
遊戲: ${formData.game}
陪打員: ${formData.booster.name}
服務類型: ${formData.serviceType}
時長: ${formData.duration} 小時
預估費用: ${price} TWD
時間: ${formData.selectedSlot}

請確認是否可以安排，謝謝！`;

        return `https://discord.com/users/1190314470816362629?message=${encodeURIComponent(message)}`;
    };

    return (
        <section id="booking" style={{ padding: '4rem 2rem', background: 'var(--color-bg)' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>
                    預約 <span style={{ color: 'var(--color-primary)' }}>您的時段</span>
                </h2>

                {/* Progress Steps */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem', gap: '1rem' }}>
                    {[1, 2, 3].map(num => (
                        <div key={num} style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: step >= num ? 'var(--color-primary)' : 'rgba(255,255,255,0.1)',
                            color: step >= num ? '#000' : '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold'
                        }}>
                            {num}
                        </div>
                    ))}
                </div>

                {/* Step 1: Select Booster */}
                {step === 1 && (
                    <div className="fade-in">
                        <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>選擇陪打人員</h3>
                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            overflowX: 'auto',
                            padding: '1rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}>
                            {boostersData.map(booster => (
                                <BoosterCard
                                    key={booster.id}
                                    booster={booster}
                                    isSelected={formData.booster?.id === booster.id}
                                    onSelect={handleBoosterSelect}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 2: Service Details */}
                {step === 2 && (
                    <div className="fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>服務詳情</h3>

                        <div style={{ background: 'var(--color-card-bg)', padding: '2rem', borderRadius: '1rem' }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>服務類型</label>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {['語音陪打', '代打服務'].map(type => (
                                        <button
                                            key={type}
                                            onClick={() => setFormData({ ...formData, serviceType: type })}
                                            style={{
                                                flex: 1,
                                                padding: '1rem',
                                                background: formData.serviceType === type ? 'var(--color-primary)' : 'rgba(255,255,255,0.1)',
                                                color: formData.serviceType === type ? '#000' : '#fff',
                                                border: 'none',
                                                borderRadius: '0.5rem',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>時長 (小時)</label>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(0,0,0,0.2)', padding: '0.5rem', borderRadius: '0.5rem' }}>
                                    <button
                                        onClick={() => handleDurationChange(-0.5)}
                                        style={{ padding: '0.5rem 1rem', background: 'none', border: '1px solid #555', color: '#fff', borderRadius: '4px' }}
                                    >-</button>
                                    <span style={{ flex: 1, textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>{formData.duration} 小時</span>
                                    <button
                                        onClick={() => handleDurationChange(0.5)}
                                        style={{ padding: '0.5rem 1rem', background: 'none', border: '1px solid #555', color: '#fff', borderRadius: '4px' }}
                                    >+</button>
                                </div>
                                <p style={{ textAlign: 'right', marginTop: '0.5rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                                    預估費用: {formData.duration * 2000} TWD
                                </p>
                            </div>

                            <button
                                onClick={() => setStep(3)}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'var(--color-accent)',
                                    color: '#000',
                                    border: 'none',
                                    borderRadius: '0.5rem',
                                    fontWeight: 'bold',
                                    fontSize: '1.1rem',
                                    marginTop: '1rem'
                                }}
                            >
                                下一步：選擇時間
                            </button>
                            <button
                                onClick={() => setStep(1)}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'transparent',
                                    color: '#888',
                                    border: 'none',
                                    marginTop: '0.5rem'
                                }}
                            >
                                返回
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Scheduler */}
                {step === 3 && (
                    <div className="fade-in">
                        <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>選擇預約時段</h3>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                            gap: '1rem',
                            marginBottom: '2rem'
                        }}>
                            {availabilityData[formData.booster?.id]?.map((daySlot, idx) => (
                                <div key={idx} style={{ background: 'var(--color-card-bg)', padding: '1rem', borderRadius: '0.5rem' }}>
                                    <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                        {daySlot.day}
                                    </h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {daySlot.slots.map(time => (
                                            <button
                                                key={time}
                                                onClick={() => handleSlotSelect(daySlot.day, time)}
                                                style={{
                                                    padding: '0.5rem',
                                                    background: formData.selectedSlot === `${daySlot.day} ${time}` ? 'var(--color-accent)' : 'rgba(255,255,255,0.05)',
                                                    color: formData.selectedSlot === `${daySlot.day} ${time}` ? '#000' : '#fff',
                                                    border: 'none',
                                                    borderRadius: '4px',
                                                    textAlign: 'left',
                                                    display: 'flex',
                                                    justifyContent: 'space-between'
                                                }}
                                            >
                                                {time}
                                                {formData.selectedSlot === `${daySlot.day} ${time}` && <CheckCircle size={16} />}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )) || <p style={{ textAlign: 'center', width: '100%' }}>此陪打員目前沒有可預約時段。</p>}
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            {formData.selectedSlot ? (
                                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '1rem', marginTop: '1rem' }}>
                                    <p style={{ marginBottom: '1rem', color: '#ccc' }}>
                                        請複製下方訊息，並發送給陪打員 <strong>{formData.booster.name}</strong> 以確認預約。
                                    </p>

                                    <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                                        <textarea
                                            readOnly
                                            value={generateDiscordLink().split('message=')[1] ? decodeURIComponent(generateDiscordLink().split('message=')[1]) : ''}
                                            style={{
                                                width: '100%',
                                                height: '150px',
                                                background: '#222',
                                                color: '#fff',
                                                border: '1px solid #444',
                                                borderRadius: '0.5rem',
                                                padding: '1rem',
                                                resize: 'none',
                                                fontFamily: 'monospace'
                                            }}
                                        />
                                        <button
                                            onClick={() => {
                                                const msg = generateDiscordLink().split('message=')[1];
                                                if (msg) navigator.clipboard.writeText(decodeURIComponent(msg));
                                                alert('訊息已複製！');
                                            }}
                                            style={{
                                                position: 'absolute',
                                                top: '10px',
                                                right: '10px',
                                                background: 'var(--color-primary)',
                                                color: '#000',
                                                border: 'none',
                                                padding: '0.3rem 0.8rem',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                fontWeight: 'bold',
                                                fontSize: '0.8rem'
                                            }}
                                        >
                                            複製
                                        </button>
                                    </div>

                                    <a
                                        href="https://discord.com/users/1190314470816362629"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-block',
                                            background: '#5865F2',
                                            color: '#fff',
                                            padding: '1rem 3rem',
                                            borderRadius: '50px',
                                            fontWeight: 'bold',
                                            fontSize: '1.2rem',
                                            textDecoration: 'none',
                                            boxShadow: '0 0 20px rgba(88, 101, 242, 0.4)'
                                        }}
                                    >
                                        前往 Discord 發送訊息
                                    </a>
                                </div>
                            ) : (
                                <p style={{ color: '#888' }}><AlertCircle size={16} style={{ display: 'inline', verticalAlign: 'middle' }} /> 請選擇一個時段以繼續。</p>
                            )}

                            <div style={{ marginTop: '1rem' }}>
                                <button
                                    onClick={() => setStep(2)}
                                    style={{ background: 'none', border: 'none', color: '#888', textDecoration: 'underline' }}
                                >
                                    返回詳情設定
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BookingForm;
