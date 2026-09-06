/* Shared hospitality layouts keep every service page visually consistent. */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';
import Navbar from './Navbar';
import Footer from './Footer';
export function PageHero({
  title,
  image,
  subtitle
}) {
  return <section className="page-hero">
    <img src={image} alt="" />
    <div className="shell">
      <span className="eyebrow">BİZİM ÇATI · HOTEL & RESTAURANT</span>
      <h1>
        {title}
      </h1>
      {subtitle && <p>
        {subtitle}
      </p>}
    </div>
  </section>;
}
export function PageLayout({
  children,
  title
}) {
  const {
    i18n
  } = useTranslation();
  return <>
    <Helmet>
      <html lang={i18n.resolvedLanguage} />
      <title>{title} | Bizim Çatı Hotel & Restaurant</title>
    </Helmet>
    <Navbar />
    <main id="main">
      {children}
    </main>
    <Footer />
  </>;
}
export function Invitation() {
  const {
    t
  } = useTranslation();
  return <section className="invitation shell">
    <div>
      <span className="eyebrow">
        {t('design.yourMoment')}
      </span>
      <h2>
        {t('design.invitation')}
      </h2>
    </div>
    <Link className="button" to="/reservasyon">
      {t('design.planVisit')}
      <FiArrowUpRight />
    </Link>
  </section>;
}
export function Experiences() {
  const {
    t
  } = useTranslation();
  const cards = [[1, 'hotel/0E5A5881.png', '/galeri?tab=hotel', 'stay'], [0, 'gardenRestaurant/0E5A5951.png', '/galeri?tab=restaurant', 'dine'], [3, 'images/wedding.jpg', '/kirdugunu', 'celebrate']];
  return <section className="section shell" id="experiences">
    <div className="section-heading">
      <div>
        <span className="eyebrow">
          {t('design.experiences')}
        </span>
        <h2>
          {t('design.somethingSpecial')}
        </h2>
      </div>
      <p>
        {t('design.experiencesIntro')}
      </p>
    </div>
    <div className="experience-grid">
      {cards.map(([i, img, to, key], n) => <Link className="experience-card" key={key} to={to}>
        <div className="card-image">
          <img loading="lazy" src={'/' + img} alt={t('event_types_section.event_types.' + i)} />
          <span className="image-tag">0{n + 1} / {t('design.' + key)}</span>
          <span className="round-arrow">
            <FiArrowUpRight />
          </span>
        </div>
        <div className="card-caption">
          <h3>
            {t('event_types_section.event_types.' + i)}
          </h3>
          <p>
            {t('design.' + key + 'Description')}
          </p>
        </div>
      </Link>)}
    </div>
    <div className="other-experiences">
      {[[2, '/bbq'], [4, '/sirketorganizasyonu'], [5, '/dogumgunu'], [6, '/mezuniyet'], [7, '/seminer'], [8, '/galeri?tab=general']].map(([i, to]) => <Link to={to} key={i}>
        {t('event_types_section.event_types.' + i)}
        <FiArrowUpRight />
      </Link>)}
    </div>
  </section>;
}
export default function ServicePage({
  kind
}) {
  const {
    t
  } = useTranslation();
  const config = {
    wedding: ['wedding_section', 'header', 'intro_paragraph', '/images/wedding.jpg', 'wedding'],
    birthday: ['birthday_section', 'header', 'intro_paragraphs.1', '/images/birthday.jpg', 'general'],
    bbq: ['bbq_section', 'headers.0', 'paragraphs.0', '/images/bbq.jpg', 'yemek'],
    corporate: ['corporate_meeting_section', 'header.0', 'intro_paragraphs.0', '/images/corporatemeeting.jpg', 'companyEvents'],
    graduation: ['graduation_section', 'header', 'intro_paragraphs.1', '/images/graduation_party.jpg', 'general'],
    seminar: ['seminar_section', 'header', 'intro_paragraph', '/images/seminar.jpg', 'companyEvents']
  };
  const [prefix, header, intro, img, tab] = config[kind];
  const title = t(prefix + '.' + header);
  const items = kind === 'wedding' ? t('wedding_section.features', {
    returnObjects: true
  }) : ['birthday', 'bbq'].includes(kind) ? t(prefix + '.li_headers', {
    returnObjects: true
  }).map((bold, i) => ({
    bold,
    text: t(prefix + '.li_content.' + i)
  })) : kind === 'corporate' ? [1, 2, 3, 4].map(i => ({
    bold: t(prefix + '.header.' + (i + 1)),
    text: t(prefix + '.intro_paragraphs.' + i)
  })) : [];
  return <PageLayout title={title}>
    <PageHero title={title} image={img} />
    <section className="shell section service-intro">
      <div>
        <span className="eyebrow">
          {t('design.madeForYou')}
        </span>
        <h2>
          {title}
          <span className="accent">.</span>
        </h2>
      </div>
      <div>
        <p className="lead">
          {t(prefix + '.' + intro)}
        </p>
        <Link className="text-link" to={'/galeri?tab=' + tab}>
          {t('design.viewGallery')}
          <FiArrowRight />
        </Link>
      </div>
    </section>
    {items.length > 0 && <section className="feature-section">
      <div className="shell feature-grid">
        {items.map((item, i) => <article key={i}>
          <span className="feature-number">0{i + 1}</span>
          <h3>
            {item.bold}
          </h3>
          <p>
            {item.text}
          </p>
        </article>)}
      </div>
    </section>}
    {kind === 'wedding' && <section className="shell section split-section">
      <img loading="lazy" src="/images/wedding2.jpg" alt={title} />
      <div>
        <span className="eyebrow">
          {t('design.celebrate')}
        </span>
        <h2>
          {t('wedding_section.header4')}
        </h2>
        <p>
          {t('wedding_section.additional_paragraphs.0')}
        </p>
        <p>
          {t('wedding_section.additional_paragraphs2.0')}
        </p>
      </div>
    </section>}
    {kind === 'bbq' && <section className="shell section split-section">
      <img loading="lazy" src="/images/bbq2.jpg" alt={title} />
      <div>
        <h2>
          {t('bbq_section.headers.2')}
        </h2>
        {[1, 2, 3].map(i => <p key={i}>
          {t('bbq_section.paragraphs.' + i)}
        </p>)}
      </div>
    </section>}
    <Invitation />
  </PageLayout>;
}
PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};
PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};
ServicePage.propTypes = {
  kind: PropTypes.oneOf(['wedding', 'birthday', 'bbq', 'corporate', 'graduation', 'seminar']).isRequired
};
