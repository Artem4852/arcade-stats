function generateRandomColors(length) {
    const colors = [];
    for (let i = 0; i < length; i++) {
        const color = `rgba(0, 0, 0, ${(((Math.random() * 0.2) + 0.8).toFixed(3))})`;
        colors.push(color);
    }
    console.log(colors)
    return colors;
}

function makeChart(ctx, type, labels, data) {
    const isSmallScreen = window.innerWidth < 600;
    
    const options = {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: type === 'pie',
                position: type === 'pie' && !isSmallScreen ? 'left' : 'top',
            },
            title: {
                display: false,
            }
        }
    };
    
    if (type === 'pie' && type === 'pie' && !isSmallScreen) {
        options.layout = {
            padding: {
                left: 100
            }
        };
    }

    return new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: generateRandomColors(labels.length),
                borderWidth: 2,
                borderSkipped: false,
                label: showLegend ? 'Data' : ''
            }]
        },
        options: options
    });
}

function createChartOnView(canvasId, chartType, labels, data) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const canvas = document.getElementById(canvasId);
                if (chartType === 'bar') {
                    canvas.width = 800;
                } else {
                    canvas.width = 400;
                }
                canvas.height = 400;
                makeChart(canvas.getContext('2d'), chartType, labels, data);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const canvas = document.getElementById(canvasId);
    observer.observe(canvas);
}

createChartOnView('finished_ended_early_pie', 'pie', [{{ labels_finished_ended_early }}], [{{ data_finished_ended_early }}]);
createChartOnView('approved_rejected_pie', 'pie', [{{ labels_approved_rejected }}], [{{ data_approved_rejected }}]);
createChartOnView('timezone_regions_pie', 'pie', [{{ labels_timezone_regions }}], [{{ data_timezone_regions }}]);
createChartOnView('timezones_specific_pie', 'pie', [{{ labels_timezones_specific }}], [{{ data_timezones_specific }}]);
createChartOnView('username_first_letters_pie', 'pie', [{{ labels_username_first_letters }}], [{{ data_username_first_letters }}]);
createChartOnView('daily_sessions_bar', 'bar', [{{ labels_daily_sessions }}], [{{ data_daily_sessions }}]);
createChartOnView('daily_tutorial_bar', 'bar', [{{ labels_daily_tutorial }}], [{{ data_daily_tutorial }}]);

function easeOutQuad(t) {
    return t * (2 - t);
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easedProgress = easeOutQuad(progress);
        obj.textContent = Math.floor(easedProgress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const obj = entry.target;
            const targetValue = parseInt(obj.getAttribute('data-target'));
            animateValue(obj, 0, targetValue, 1500);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

const objects = document.getElementsByClassName("increment");
for (let obj of objects) {
    obj.setAttribute('data-target', obj.textContent);
    obj.textContent = '0';
    observer.observe(obj);
}