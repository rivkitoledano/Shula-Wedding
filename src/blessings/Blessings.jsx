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
        title: 'שולמית,',
        content: 'נושמות איתך את ריח הפריחה,. רואות לבן מול העיניים,. שומעות גם מנגינה בשקט,. ובינתיים,. מתפללות עליך ועל כולנו,. לבית מהחלומות. ושהכל יהיה ממש - דבש.',
        sender: 'אוהבות- - -',
    },
    {
        title: 'שולמית המהממת!',
        content: ' מזל טוב! שתזכו לבנות בית נאמן בישראל לתפארת! מתוך נחת בריאות ושמחה🤎 שתצליחי בעבודה ובכל דבר שתעשי! מעריכה ואוהבת מאד',
        sender: 'רינה ורנר',
    },
    {
        title: 'לשולמית המהממת!!',
        content: 'ל. בהתרגשות עצומה סופרים את הימים . וליום הענק כולנו מחכים!! קובי ושולמית מתחתנים...... שתזכו לשפע ברכה והצלחה בכל הענינים שכל החלומות בביתכם יתגשמו.. שיהיו לכם חיים מאושרים וטובים ורק שמחות כל הימים!!',
        sender: 'אוהבים מאד זאבי ,נחמי וכמובן חיה',
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
    const [currentBlessing, setCurrentBlessing] = useState(null);

    useEffect(() => {
        const today = new Date();
        const dayIndex = today.getDate() - 7; // Adjust index to match with BlessingData length
        if (dayIndex >= 0 && dayIndex < BlessingData.length) {
            if (BlessingData[dayIndex].title === '' && BlessingData[dayIndex].content === '' && BlessingData[dayIndex].sender === '') {
                setCurrentBlessing(BlessingData[0]); // Display the first blessing if the current one is empty
            } else {
                setCurrentBlessing(BlessingData[dayIndex]);
            }
        }
    }, []);

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