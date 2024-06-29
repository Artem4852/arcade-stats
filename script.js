function generateRandomColors(length) {
    const colors = [];
    for (let i = 0; i < length; i++) {
        if (Math.random() > 0.5) {
            const color = `rgba(255, 140, 55, ${(((Math.random() * 0.2) + 0.8).toFixed(3))})`;
            colors.push(color);
        } else {
            const color = `rgba(10, 175, 180, ${(((Math.random() * 0.2) + 0.8).toFixed(3))})`;
            colors.push(color);
        }
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
                if (chartType === 'bar') {
                    canvas.width = 800;
                } else {
                    canvas.width = 400;
                }
                makeChart(canvas.getContext('2d'), chartType, labels, data);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const canvas = document.getElementById(canvasId);
    observer.observe(canvas);
}

createChartOnView('finished_ended_early_pie', 'pie', ['Finished', 'Ended Early'], [15696, 4534]);
createChartOnView('approved_rejected_pie', 'pie', ['Approved', 'Rejected'], [6175, 1138]);
createChartOnView('timezone_regions_pie', 'pie', ['Asia', 'America', 'Africa', 'Europe', 'Pacific', 'Australia', 'Indian'], [686, 2014, 73, 603, 66, 93, 1]);
createChartOnView('timezones_specific_pie', 'pie', ['Asia/Kolkata', 'America/New_York', 'Africa/Monrovia', 'Europe/Warsaw', 'Europe/Amsterdam', 'Pacific/Auckland', 'Asia/Kuwait', 'Australia/Canberra', 'Asia/Taipei', 'Europe/London', 'Europe/Belgrade', 'America/Los_Angeles', 'Africa/Harare', 'Europe/Moscow', 'Asia/Colombo', 'America/Chicago', 'Asia/Katmandu', 'Africa/Casablanca', 'Africa/Cairo', 'Asia/Karachi', 'Africa/Algiers', 'Australia/Brisbane', 'Asia/Muscat', 'America/Phoenix', 'Asia/Bangkok', 'Europe/Brussels', 'America/Denver', 'Asia/Kuala_Lumpur', 'Asia/Istanbul', 'America/Indiana/Indianapolis', 'America/Bogota', 'Asia/Chongqing', 'Indian/Mauritius', 'Australia/Perth', 'America/Mexico_City', 'Europe/Athens', 'America/Havana', 'America/Sao_Paulo', 'Australia/Hobart', 'America/Cancun', 'Pacific/Honolulu', 'Asia/Seoul', 'America/Halifax', 'Asia/Tokyo', 'Australia/Adelaide', 'America/Anchorage', 'Asia/Tbilisi', 'America/Regina', 'Asia/Amman', 'America/Buenos_Aires', 'Asia/Ulaanbaatar', 'Asia/Jerusalem', 'Asia/Dhaka', 'Africa/Nairobi', 'America/Manaus', 'America/Belize', 'Europe/Helsinki', 'America/Santiago', 'Asia/Baku', 'Asia/Beirut', 'America/Tijuana', 'Asia/Tehran', 'Pacific/Fiji', 'Asia/Tashkent'], [414, 1393, 25, 30, 249, 63, 5, 59, 14, 187, 62, 316, 7, 6, 10, 184, 12, 6, 13, 26, 17, 9, 15, 14, 29, 33, 51, 51, 7, 5, 7, 56, 1, 10, 11, 35, 2, 10, 4, 1, 2, 9, 5, 9, 11, 3, 2, 2, 1, 2, 1, 13, 6, 5, 4, 1, 1, 1, 1, 2, 2, 2, 1, 1]);
createChartOnView('username_first_letters_pie', 'pie', ['0', '1', '2', '3', '4', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'М', 'Მ', '蹦', '陳', '이'], [9, 23, 22, 4, 7, 2, 2, 3, 2, 480, 121, 169, 160, 112, 75, 84, 115, 79, 221, 143, 125, 302, 128, 54, 149, 4, 163, 351, 179, 22, 78, 48, 9, 48, 38, 1, 1, 1, 1, 1]);
createChartOnView('daily_sessions_bar', 'bar', ['2024-06-17', '2024-06-18', '2024-06-19', '2024-06-20', '2024-06-21', '2024-06-22', '2024-06-23', '2024-06-24', '2024-06-25', '2024-06-26', '2024-06-27', '2024-06-28'], [619, 1463, 1412, 1351, 1563, 1875, 1786, 1761, 1637, 1823, 2017, 1858]);
createChartOnView('daily_tutorial_bar', 'bar', ['2024-06-17', '2024-06-18', '2024-06-19', '2024-06-20', '2024-06-21', '2024-06-22', '2024-06-23', '2024-06-24', '2024-06-25', '2024-06-26', '2024-06-27', '2024-06-28'], [244, 270, 100, 67, 123, 110, 54, 58, 53, 145, 155, 99]);

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