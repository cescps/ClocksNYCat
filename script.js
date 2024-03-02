let uk = document.querySelector('.gmt .the-time');
    let pdt = document.querySelector('.pdt .the-time');
    let edt = document.querySelector('.edt .the-time');
    let cet = document.querySelector('.cet .the-time');

    const animate = () => {
        render(edt, 'America/New_York');
        render(cet, 'Europe/Paris');
    }

    const render = (el, tmzn) => {
        el.innerHTML = moment.tz(tmzn).format('HH:mm:ss');
    }

    setInterval(animate, 1000);
    animate();