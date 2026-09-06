import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiArrowUpRight } from 'react-icons/fi';
import { PageLayout } from './Design';
import Intro3 from './openMap2';
export default function ContactPage() {
  const {
    t
  } = useTranslation();
  return <PageLayout title={t('contact_section.header')}>
    <section className="shell section contact-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">BİZİM ÇATI · GÖLBAŞI</span>
          <h1>
            {t('contact_section.header')}
          </h1>
        </div>
        <p>
          {t('contact_section.intro_paragraph')}
        </p>
      </div>
      <div className="contact-grid">
        <div className="contact-details">
          <article>
            <FiPhone />
            <div>
              <h3>
                {t('contact_section.contact_details.reservation_header')}
              </h3>
              <a href="tel:+903124982121">+90 312 498 21 21</a>
              <a href="tel:+905558009261">+90 555 800 92 61</a>
            </div>
          </article>
          <article>
            <FiMail />
            <div>
              <h3>
                {t('contact_section.contact_details.email_header')}
              </h3>
              <a href="mailto:info@bizimcati.com.tr">info@bizimcati.com.tr</a>
            </div>
          </article>
          <article>
            <FiMapPin />
            <div>
              <h3>
                {t('contact_section.contact_details.address_header')}
              </h3>
              <p>
                {t('contact_section.contact_details.address')}
              </p>
              <a className="text-link" href="https://www.google.com/maps/dir/?api=1&destination=Club+Bizim+Cati+Golbasi+Ankara" target="_blank" rel="noreferrer">
                {t('design.directions')}
                <FiArrowUpRight />
              </a>
            </div>
          </article>
          <Link className="button" to="/reservasyon">
            {t('design.planVisit')}
            <FiArrowUpRight />
          </Link>
        </div>
        <div className="contact-map">
          <Intro3 />
        </div>
      </div>
    </section>
  </PageLayout>;
}
