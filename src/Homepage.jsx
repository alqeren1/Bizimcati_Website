import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

function HomePage(){
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    return(<div>
    <div className="min-h-screen container mx-auto">
        <h2>{t('header1')}</h2>
        <p>Bizim Çatı Hotel Restorant, Ankara’nın en güzel yerlerinden biri olan Gölbaşı Mogan Gölü kıyısında, her mevsim farklı güzelliklerin yaşandığı, doğa ile iç içe olan, lezzetli yemekleri ve makul fiyatlarıyla, güler yüzlü personeli ve kaliteli servisi ile hoş zaman geçirebileceğiniz bir mekândır.
            <br/>
            Ayrıca dönemsel olarak yapılan ve oldukça beğeni toplayan çoban ateşi etrafında sucuk ızgara sıcak şarap partileri, hamsi barbekü partileri, yılbaşı eğlenceleri vb. etkinlikler işletme ile özdeşleşmiş keyifli ve unutulmaz etkinliklerinden bazılarıdır.</p>
    </div>
    </div>);
}

export default HomePage