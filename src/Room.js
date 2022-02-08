import './Room.css';

export default function Room({
  text,
  description,
  isDescriptionVisible,
  isClean,
}) {
  const statusClassName = isClean
    ? 'Room__status Room__status--clean'
    : 'Room__status Room__status--dirty';

  return (
    <section className="Room">
      <header className="Room__header">
        <h2 className="Room__heading">{text}</h2>
        <div className={statusClassName}></div>
      </header>
      <p hidden={!isDescriptionVisible}>{description}</p>
    </section>
  );
}
