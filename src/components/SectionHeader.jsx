//--------------------|📝 : SectionHeader

function SectionHeader({ children }) {
  return (
    <div className="section-header">
      <h2 className="section-header__title">{children}</h2>
      <div className="section-header__animation-box">
        <div className="section-header__animation"></div>
        <div className="section-header__animation"></div>
        <div className="section-header__animation"></div>
        <div className="section-header__animation"></div>
      </div>
    </div>
  );
}

export default SectionHeader;

