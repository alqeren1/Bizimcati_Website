import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight, FiPhone } from 'react-icons/fi';
import { PageLayout } from './Design';
export default function ReservationPage() {
  const {
    t
  } = useTranslation();
  const [params] = useSearchParams();
  const [prepared, setPrepared] = useState(false);
  const [draft, setDraft] = useState('');
  const today = new Date();
  const minDate = [today.getFullYear(), String(today.getMonth() + 1).padStart(2, '0'), String(today.getDate()).padStart(2, '0')].join('-');
  function submit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = [...data.entries()].map(([k, v]) => t('design.' + k) + ': ' + v).join('\n');
    const url = 'mailto:info@bizimcati.com.tr?subject=' + encodeURIComponent('Bizim Çatı — ' + t('hero_section.buttons.0')) + '&body=' + encodeURIComponent(text);
    setDraft(url);
    setPrepared(true);
    window.location.href = url;
  }
  return <PageLayout title={t('hero_section.buttons.0')}>
    <section className="shell section reservation-layout">
      <div className="reservation-intro">
        <span className="eyebrow">
          {t('design.yourMoment')}
        </span>
        <h1>
          {t('design.planVisit')}
        </h1>
        <p className="lead">
          {t('design.reservationIntro')}
        </p>
        <img src="/hotel/0E5A5881.png" alt={t('gallery.header6')} />
        <a className="text-link" href="tel:+903124982121"><FiPhone />+90 312 498 21 21</a>
      </div>
      <form className="reservation-form" onSubmit={submit}>
        <h2>
          {t('design.yourDetails')}
        </h2>
        <p>
          {t('design.emailNotice')}
        </p>
        <div className="form-grid">
          {[['name', 'text'], ['email', 'email'], ['date', 'date'], ['time', 'time'], ['guests', 'number']].map(([name, type]) => <label key={name} htmlFor={name}>
            {t('design.' + name)}
            <input id={name} name={name} type={type} required min={type === 'date' ? minDate : type === 'number' ? 1 : undefined} autoComplete={name === 'name' ? 'name' : name === 'email' ? 'email' : undefined} />
          </label>)}
          <label htmlFor="eventType">
            {t('design.eventType')}
            <select id="eventType" name="eventType" required defaultValue={params.get('type') || ''}>
              <option value="" disabled>
                {t('design.select')}
              </option>
              {[1, 0, 2, 3, 4, 5, 6, 7].map(i => <option key={i} value={t('event_types_section.event_types.' + i)}>
                {t('event_types_section.event_types.' + i)}
              </option>)}
            </select>
          </label>
          <label className="full-field" htmlFor="additionalRequests">
            {t('design.additionalRequests')}
            <textarea id="additionalRequests" name="additionalRequests" rows="4" />
          </label>
        </div>
        <button className="button" type="submit">
          {t('design.prepareEmail')}
          <FiArrowUpRight />
        </button>
        {prepared && <div className="form-notice" role="status">
          {t('design.prepared')}
          <a href={draft}>
            {t('design.prepareEmail')}
          </a>
        </div>}
      </form>
    </section>
  </PageLayout>;
}
