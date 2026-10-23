import { SectionHeader } from '@presentation/components/molecules/SectionHeader';
import { TornPaperCard } from '@presentation/components/molecules/TornPaperCard';
import { Icon } from '@presentation/components/atoms/Icon';
import { formatCurrency } from '@core/utils/formatCurrency';
import styles from './PaymentPlan.module.scss';

const installments = [
  { date: '31 de octubre', dateTime: '2026-10-31', label: 'Abono 1', amount: 100000 },
  { date: '15 de noviembre', dateTime: '2026-11-15', label: 'Abono 2', amount: 100000 },
  { date: 'Martes 17 de noviembre', dateTime: '2026-11-17', label: 'Pago final', amount: 110547 },
];

export function PaymentPlan() {
  const total = installments.reduce((sum, installment) => sum + installment.amount, 0);

  return (
    <section id="pagos" aria-labelledby="pagos-title" className={styles.section}>
      <div className={styles.content}>
        <SectionHeader id="pagos-title" heading="PLAN DE" headingAccent="PAGOS" />

        <TornPaperCard color="gold" className={styles.total}>
          <p>Total por persona</p>
          <strong>{formatCurrency(total)}</strong>
        </TornPaperCard>

        <h3 className={styles.subheading}>Cronograma de pagos</h3>
        <ol className={styles.schedule}>
          {installments.map((installment, index) => (
            <li key={installment.dateTime} className={styles.installment}>
              <span className={styles.step} aria-hidden="true">{index + 1}</span>
              <Icon name="calendar" size={30} />
              <time dateTime={installment.dateTime} className={styles.date}>
                {installment.date}
              </time>
              <h4 className={styles.label}>{installment.label}</h4>
              <p className={styles.amount}>{formatCurrency(installment.amount)}</p>
            </li>
          ))}
        </ol>

        <h3 className={styles.subheading}>Canales de pago</h3>
        <div className={styles.channels}>
          <article className={styles.channel} aria-labelledby="pago-nequi">
            <span className={styles.channelIcon}><Icon name="paid" size={32} /></span>
            <div>
              <h4 id="pago-nequi" className={styles.channelName}>Nequi</h4>
              <p className={styles.account}>3214984105</p>
            </div>
          </article>
          <article className={styles.channel} aria-labelledby="pago-breb">
            <span className={styles.channelIcon}><Icon name="paid" size={32} /></span>
            <div>
              <h4 id="pago-breb" className={styles.channelName}>Bre-B</h4>
              <p className={styles.account}>@sevisu1</p>
              <p className={styles.bank}>Banco Rappi</p>
            </div>
          </article>
        </div>

        <TornPaperCard color="aqua" className={styles.notice}>
          <Icon name="receipt" size={28} />
          <p>Agradecemos enviar el comprobante de pago a los administradores.</p>
        </TornPaperCard>
      </div>
    </section>
  );
}
