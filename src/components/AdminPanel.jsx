import React, { useState } from 'react';
import { Save, Copy, Check } from 'lucide-react';
import boostersData from '../data/boosters.json';
import initialAvailability from '../data/availability.json';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const HOURS = Array.from({ length: 14 }, (_, i) => `${i + 10}:00`); // 10:00 to 23:00

const AdminPanel = ({ onClose }) => {
    const [selectedBoosterId, setSelectedBoosterId] = useState(boostersData[0].id);
    const [availability, setAvailability] = useState(initialAvailability);
    const [copied, setCopied] = useState(false);

    const toggleSlot = (day, time) => {
        setAvailability(prev => {
            const boosterSlots = prev[selectedBoosterId] || [];
            const dayEntryIndex = boosterSlots.findIndex(d => d.day === day);

            let newBoosterSlots = [...boosterSlots];

            if (dayEntryIndex >= 0) {
                // Day exists, toggle time
                const currentSlots = newBoosterSlots[dayEntryIndex].slots;
                if (currentSlots.includes(time)) {
                    // Remove time
                    newBoosterSlots[dayEntryIndex] = {
                        ...newBoosterSlots[dayEntryIndex],
                        slots: currentSlots.filter(t => t !== time)
                    };
                    // If no slots left, remove day
                    if (newBoosterSlots[dayEntryIndex].slots.length === 0) {
                        newBoosterSlots.splice(dayEntryIndex, 1);
                    }
                } else {
                    // Add time
                    newBoosterSlots[dayEntryIndex] = {
                        ...newBoosterSlots[dayEntryIndex],
                        slots: [...currentSlots, time].sort()
                    };
                }
            } else {
                // Day doesn't exist, add day and time
                newBoosterSlots.push({ day, slots: [time] });
            }

            return { ...prev, [selectedBoosterId]: newBoosterSlots };
        });
    };

    const isSlotActive = (day, time) => {
        const boosterSlots = availability[selectedBoosterId] || [];
        const dayEntry = boosterSlots.find(d => d.day === day);
        return dayEntry?.slots.includes(time);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(JSON.stringify(availability, null, 2));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.9)',
            zIndex: 2000,
            padding: '2rem',
            overflowY: 'auto'
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', background: 'var(--color-bg)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--color-primary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ margin: 0 }}>預約時段管理</h2>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <label style={{ marginRight: '1rem' }}>選擇陪打員:</label>
                    <select
                        value={selectedBoosterId}
                        onChange={(e) => setSelectedBoosterId(e.target.value)}
                        style={{ padding: '0.5rem', borderRadius: '4px', background: '#333', color: '#fff', border: '1px solid #555' }}
                    >
                        {boostersData.map(b => (
                            <option key={b.id} value={b.id}>{b.name}</option>
                        ))}
                    </select>
                </div>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>時間 / 星期</th>
                                {DAYS.map(day => (
                                    <th key={day} style={{ padding: '1rem', textAlign: 'center', color: 'var(--color-primary)' }}>{day.substring(0, 3)}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {HOURS.map(time => (
                                <tr key={time}>
                                    <td style={{ padding: '0.5rem', fontWeight: 'bold' }}>{time}</td>
                                    {DAYS.map(day => (
                                        <td key={`${day}-${time}`} style={{ textAlign: 'center', padding: '0.2rem' }}>
                                            <button
                                                onClick={() => toggleSlot(day, time)}
                                                style={{
                                                    width: '100%',
                                                    height: '30px',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    borderRadius: '4px',
                                                    background: isSlotActive(day, time) ? 'var(--color-accent)' : 'transparent',
                                                    cursor: 'pointer'
                                                }}
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem' }}>
                    <h3 style={{ marginTop: 0 }}>匯出設定</h3>
                    <p style={{ color: '#ccc', fontSize: '0.9rem' }}>
                        由於這是靜態網站，您無法直接儲存到伺服器。
                        <strong> 請複製下方的 JSON</strong> 並貼上到程式碼中的 <code>src/data/availability.json</code> 檔案，然後提交到 GitHub。
                    </p>

                    <button
                        onClick={handleCopy}
                        style={{
                            background: copied ? '#4CAF50' : 'var(--color-primary)',
                            color: '#000',
                            border: 'none',
                            padding: '0.8rem 1.5rem',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            cursor: 'pointer'
                        }}
                    >
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                        {copied ? '已複製!' : '複製 JSON 到剪貼簿'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
