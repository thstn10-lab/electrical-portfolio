import "./Companies.css";

const companies = [
  "이정이앤씨",
  "영인에너지솔루션",
  "부산산업태양광",
  "해상풍력 ONS",
  "변전 설계",
];

export function Companies() {
  return (
    <section className="companies" aria-label="경력 및 프로젝트 영역">
      <div className="container">
        <p className="companies__label">Experience across renewable power design</p>
        <div className="companies__row">
          {companies.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
