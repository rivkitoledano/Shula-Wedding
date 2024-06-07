import React, { useState, useEffect } from 'react';
import StringDisplay from '../stringDisplay/StringDisplay';
import './Blessing.css';

// הברכות שברשותך
const BlessingData = [
    {
        title: 'שולמית,',
        content: 'נושמות איתך את ריח הפריחה,. רואות לבן מול העיניים,. שומעות גם מנגינה בשקט,. ובינתיים,. מתפללות עליך ועל כולנו,. לבית מהחלומות. ושהכל יהיה ממש - דבש.',
        sender: 'אוהבות- - -',
    },
    {
        title: 'ברכה ליומולדת',
        content: 'יום הולדת שמח! מאחלים לך שנה של אושר, בריאות והגשמה עצמית.',
        sender: 'חברים ומשפחה',
    },
    // כל הברכות החל מהשלישית עם מחרוזות ריקות
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    {
        title: '',
        content: '',
        sender: '',
    },
    // ניתן להוסיף כאן עוד ברכות במידת הצורך
];
 

// פונקציה שתיצור מערך של ברכות לכל יום בין היום לבין תאריך החתונה
const createBlessingArray = (startDate, endDate) => {
    const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    return Array(totalDays).fill('');
};

const Blessings = () => {
    const startDate = new Date('2024-06-07');
    const weddingDate = new Date('2024-07-04');
    const blessings = createBlessingArray(startDate, weddingDate);

    // קביעת הברכה להיום
    const [currentBlessing, setCurrentBlessing] = useState(null);

    useEffect(() => {
        const today = new Date();
        const dayIndex = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
        console.log("tooday ",dayIndex);
        if (dayIndex >= 0 && dayIndex < blessings.length) {
            setCurrentBlessing(BlessingData[dayIndex % BlessingData.length]);
        }
    }, [blessings]);

    return (
        <div className="blessingContainer">
            {currentBlessing && (
                <>
                    <div id="title"><StringDisplay longString={currentBlessing.title} /></div>
                    <div id="content"><StringDisplay longString={currentBlessing.content} /></div>
                    <div id="sender"><StringDisplay longString={currentBlessing.sender} /></div>
                </>
            )}
        </div>
    );
}

export default Blessings;
