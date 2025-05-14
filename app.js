fetch('./data/tokens.json')
  .then(res => res.json())
  .then(tokens => {
    const container = document.getElementById('token-container');
    const search = document.getElementById('search');

    const render = () => {
      const value = search.value.toLowerCase();
      container.innerHTML = '';

      tokens
        .filter(t => t.name.toLowerCase().includes(value))
        .forEach(t => {
          const card = document.createElement('div');
          card.className = 'token-card';
          card.innerHTML = `
            <h3>${t.name}</h3>
            <p>Risk Score: <strong>${t.riskScore}</strong></p>
            <p>Bond Type: ${t.bondType}</p>
            <p>Price: ${t.price} SOL</p>
            <a href="${t.url}" target="_blank">View on Pump.fun</a>
          `;
          container.appendChild(card);
        });
    };

    search.addEventListener('input', render);
    render();
  });
