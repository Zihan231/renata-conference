// Top bar: "100 Bioequivalent Products" on left, Hemova hero logo in center, Renata PLC on right.
export default function Header() {
  return (
    <div className="brand-row">
      <div className="brand brand-l">
        <img src="/img/logo-100.webp" alt="100 Bioequivalent Products – Young minds, global impact" width="160" height="91" decoding="async" />
      </div>
      <div className="brand brand-m">
        <img src="/img/hemova.png" alt="Hemova 500 Hydroxyurea" width="360" height="73" decoding="async" />
      </div>
      <div className="brand brand-r">
        <img src="/img/logo.png" alt="Renata PLC" width="140" height="28" decoding="async" />
      </div>
    </div>
  );
}
