function generateRandomColors(length) {
    const colors = [];
    for (let i = 0; i < length; i++) {
        if (Math.random() > 0.5) {
            const color = `rgba(255, 140, 55, ${(((Math.random() * 0.4) + 0.6).toFixed(4))})`;
            colors.push(color);
        } else {
            const color = `rgba(10, 175, 180, ${(((Math.random() * 0.4) + 0.6).toFixed(4))})`;
            colors.push(color);
        }
    }
    return colors;
}

function makeChart(ctx, type, labels, data) {
    const isSmallScreen = window.innerWidth < 600;
    
    const options = {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: type === 'pie' && (labels.length < 10 || labels[0].length < 2),
                position: type === 'pie' && !isSmallScreen ? 'left' : 'top'
            },
            title: {
                display: false,
            }
        }
    };

    if (type === 'pie' && type === 'pie' && !isSmallScreen) {
        options.layout = {
            padding: {
                left: 0
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
                borderWidth: 0.5,
                borderSkipped: true,
                label: type === 'pie' ? 'Data' : ''
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
                if ((window.innerWidth < 800 && chartType === 'bar') || (window.innerWidth < 400 && chartType === 'pie')) {
                    canvas.width = window.innerWidth - 20;
                } else if (chartType === 'bar') {
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

createChartOnView('finished_ended_early_pie', 'pie', ['Finished', 'Ended Early'], [17042, 4764]);
createChartOnView('approved_rejected_pie', 'pie', ['Approved', 'Rejected'], [6268, 1147]);
createChartOnView('timezone_regions_pie', 'pie', ['America', 'Asia', 'Europe', 'Africa', 'Pacific', 'Australia', 'Indian'], [2796, 1068, 781, 114, 74, 101, 1]);
createChartOnView('timezones_specific_pie', 'pie', ['America/Los_Angeles', 'America/New_York', 'Asia/Kolkata', 'Europe/London', 'Africa/Monrovia', 'Europe/Warsaw', 'America/Chicago', 'Europe/Amsterdam', 'Pacific/Auckland', 'Asia/Kuwait', 'Australia/Canberra', 'Asia/Taipei', 'Europe/Belgrade', 'America/Phoenix', 'Asia/Tokyo', 'Africa/Harare', 'Europe/Brussels', 'Europe/Moscow', 'Asia/Colombo', 'Asia/Katmandu', 'Africa/Casablanca', 'Africa/Cairo', 'Asia/Karachi', 'Asia/Dhaka', 'Africa/Algiers', 'Europe/Athens', 'Asia/Bangkok', 'Australia/Brisbane', 'Asia/Istanbul', 'Asia/Muscat', 'Asia/Chongqing', 'America/Denver', 'Asia/Kuala_Lumpur', 'America/Indiana/Indianapolis', 'America/Bogota', 'America/Sao_Paulo', 'Indian/Mauritius', 'Asia/Krasnoyarsk', 'Australia/Perth', 'America/Mexico_City', 'America/Regina', 'America/Havana', 'Asia/Gaza', 'Asia/Jerusalem', 'Australia/Hobart', 'America/Cancun', 'Pacific/Honolulu', 'Africa/Nairobi', 'America/Santiago', 'America/Buenos_Aires', 'America/Halifax', 'Asia/Seoul', 'Australia/Adelaide', 'America/Anchorage', 'Asia/Tbilisi', 'Asia/Amman', 'Asia/Ulaanbaatar', 'America/Manaus', 'America/Belize', 'America/Bahia', 'Asia/Baku', 'America/Montevideo', 'Europe/Helsinki', 'Asia/Beirut', 'Africa/Tripoli', 'Asia/Tehran', 'Asia/Almaty', 'Asia/Tashkent', 'America/Tijuana'], [413, 1944, 663, 225, 32, 42, 231, 325, 70, 8, 67, 19, 70, 21, 14, 12, 60, 15, 20, 21, 9, 17, 46, 16, 36, 43, 46, 10, 17, 18, 71, 80, 66, 12, 17, 23, 1, 1, 9, 16, 7, 2, 1, 18, 4, 2, 4, 7, 3, 4, 7, 11, 11, 5, 2, 1, 1, 4, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2]);
createChartOnView('username_first_letters_pie', 'pie', ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Š', 'Г', 'М', 'С', 'Მ', '小', '蹦', '陳', '이'], [13, 36, 30, 3, 5, 2, 4, 3, 4, 2, 674, 120, 231, 248, 155, 117, 135, 105, 114, 320, 224, 185, 431, 180, 80, 226, 12, 255, 473, 220, 28, 110, 60, 12, 59, 50, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
createChartOnView('daily_sessions_bar', 'bar', ['2024-06-17', '2024-06-18', '2024-06-19', '2024-06-20', '2024-06-21', '2024-06-22', '2024-06-23', '2024-06-24', '2024-06-25', '2024-06-26', '2024-06-27', '2024-06-28', '2024-06-29'], [619, 1463, 1412, 1351, 1563, 1875, 1786, 1761, 1637, 1823, 2017, 1858, 1981]);
createChartOnView('daily_tutorial_bar', 'bar', ['2024-06-17', '2024-06-18', '2024-06-19', '2024-06-20', '2024-06-21', '2024-06-22', '2024-06-23', '2024-06-24', '2024-06-25', '2024-06-26', '2024-06-27', '2024-06-28', '2024-06-29'], [370, 394, 156, 108, 215, 184, 111, 112, 85, 228, 240, 134, 102]);

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