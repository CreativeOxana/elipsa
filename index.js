const width = Number(prompt('Zadejte šířku pozemku: '));
const height = Number(prompt('Zadejte výšku pozemku: '));

const ellipseArea = (width, height) => {
  return (((width / 2) * height) / 2) * Math.PI;
};

document.body.innerHTML += `<p>Obsah vašeho elipsového pozemku je ${ellipseArea()}</p>`;
