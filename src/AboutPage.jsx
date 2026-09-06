import { useTranslation } from 'react-i18next';
import { PageLayout, PageHero, Invitation } from './Design';
export default function AboutPage() {
  const {
    t
  } = useTranslation();
  return <PageLayout title={t('about_page.header')}>
    <PageHero title={t('about_page.header')} image="/images/background2.JPG" subtitle={t('design.welcomeTitle')} />
    <section className="shell section split-section about-story">
      <img src="/images/49.JPG" alt="Bizim Çatı" loading="lazy" />
      <div>
        <span className="eyebrow">
          {t('design.ourStory')}
        </span>
        <h2>
          {t('design.welcomeTitle')}
          <em>
            {t('design.welcomeItalic')}
          </em>
        </h2>
        {t('about_page.paragraphs', {
          returnObjects: true
        }).map((p, i) => <p key={i}>
          {p}
        </p>)}
      </div>
    </section>
    <Invitation />
  </PageLayout>;
}
