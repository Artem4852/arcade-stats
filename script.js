function generateRandomColors(length) {
    const colors = [];
    for (let i = 0; i < length; i++) {
        colors.push("rgba(255, 255, 255, " + (((Math.random()*0.2)+0.8).toFixed(3)) + ")");
    }
    console.log(colors)
    return colors;
}

const finished_ended_early_pie = document.getElementById('finished_ended_early_pie').getContext('2d');
new Chart(finished_ended_early_pie, {
    type: 'pie',
    data: {
        labels: ['Finished', 'Ended Early'],
        datasets: [{
            data: [13963, 4167],
            backgroundColor: generateRandomColors(['Finished', 'Ended Early'].length),
            borderWidth: 2,
            borderSkipped: false,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: false,
            }
        }
    }
});

const approved_rejected_pie = document.getElementById('approved_rejected_pie').getContext('2d');
new Chart(approved_rejected_pie, {
    type: 'pie',
    data: {
        labels: ['Approved', 'Rejected'],
        datasets: [{
            data: [5835, 1027],
            backgroundColor: generateRandomColors(['Approved', 'Rejected'].length),
            borderWidth: 2,
            borderSkipped: false,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: false,
            }
        }
    }
});

const timezone_regions_pie = document.getElementById('timezone_regions_pie').getContext('2d');
new Chart(timezone_regions_pie, {
    type: 'pie',
    data: {
        labels: ['Asia', 'America', 'Africa', 'Europe', 'Pacific', 'Australia', 'Indian'],
        datasets: [{
            data: [686, 2014, 73, 603, 66, 93, 1],
            backgroundColor: generateRandomColors(['Asia', 'America', 'Africa', 'Europe', 'Pacific', 'Australia', 'Indian'].length),
            borderWidth: 2,
            borderSkipped: false,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: false,
            }
        }
    }
});

const timezones_specific_pie = document.getElementById('timezones_specific_pie').getContext('2d');
new Chart(timezones_specific_pie, {
    type: 'pie',
    data: {
        labels: ['Asia/Kolkata', 'America/New_York', 'Africa/Monrovia', 'Europe/Warsaw', 'Europe/Amsterdam', 'Pacific/Auckland', 'Asia/Kuwait', 'Australia/Canberra', 'Asia/Taipei', 'Europe/London', 'Europe/Belgrade', 'America/Los_Angeles', 'Africa/Harare', 'Europe/Moscow', 'Asia/Colombo', 'America/Chicago', 'Asia/Katmandu', 'Africa/Casablanca', 'Africa/Cairo', 'Asia/Karachi', 'Africa/Algiers', 'Australia/Brisbane', 'Asia/Muscat', 'America/Phoenix', 'Asia/Bangkok', 'Europe/Brussels', 'America/Denver', 'Asia/Kuala_Lumpur', 'Asia/Istanbul', 'America/Indiana/Indianapolis', 'America/Bogota', 'Asia/Chongqing', 'Indian/Mauritius', 'Australia/Perth', 'America/Mexico_City', 'Europe/Athens', 'America/Havana', 'America/Sao_Paulo', 'Australia/Hobart', 'America/Cancun', 'Pacific/Honolulu', 'Asia/Seoul', 'America/Halifax', 'Asia/Tokyo', 'Australia/Adelaide', 'America/Anchorage', 'Asia/Tbilisi', 'America/Regina', 'Asia/Amman', 'America/Buenos_Aires', 'Asia/Ulaanbaatar', 'Asia/Jerusalem', 'Asia/Dhaka', 'Africa/Nairobi', 'America/Manaus', 'America/Belize', 'Europe/Helsinki', 'America/Santiago', 'Asia/Baku', 'Asia/Beirut', 'America/Tijuana', 'Asia/Tehran', 'Pacific/Fiji', 'Asia/Tashkent'],
        datasets: [{
            data: [414, 1393, 25, 30, 249, 63, 5, 59, 14, 187, 62, 316, 7, 6, 10, 184, 12, 6, 13, 26, 17, 9, 15, 14, 29, 33, 51, 51, 7, 5, 7, 56, 1, 10, 11, 35, 2, 10, 4, 1, 2, 9, 5, 9, 11, 3, 2, 2, 1, 2, 1, 13, 6, 5, 4, 1, 1, 1, 1, 2, 2, 2, 1, 1],
            backgroundColor: generateRandomColors(['Asia/Kolkata', 'America/New_York', 'Africa/Monrovia', 'Europe/Warsaw', 'Europe/Amsterdam', 'Pacific/Auckland', 'Asia/Kuwait', 'Australia/Canberra', 'Asia/Taipei', 'Europe/London', 'Europe/Belgrade', 'America/Los_Angeles', 'Africa/Harare', 'Europe/Moscow', 'Asia/Colombo', 'America/Chicago', 'Asia/Katmandu', 'Africa/Casablanca', 'Africa/Cairo', 'Asia/Karachi', 'Africa/Algiers', 'Australia/Brisbane', 'Asia/Muscat', 'America/Phoenix', 'Asia/Bangkok', 'Europe/Brussels', 'America/Denver', 'Asia/Kuala_Lumpur', 'Asia/Istanbul', 'America/Indiana/Indianapolis', 'America/Bogota', 'Asia/Chongqing', 'Indian/Mauritius', 'Australia/Perth', 'America/Mexico_City', 'Europe/Athens', 'America/Havana', 'America/Sao_Paulo', 'Australia/Hobart', 'America/Cancun', 'Pacific/Honolulu', 'Asia/Seoul', 'America/Halifax', 'Asia/Tokyo', 'Australia/Adelaide', 'America/Anchorage', 'Asia/Tbilisi', 'America/Regina', 'Asia/Amman', 'America/Buenos_Aires', 'Asia/Ulaanbaatar', 'Asia/Jerusalem', 'Asia/Dhaka', 'Africa/Nairobi', 'America/Manaus', 'America/Belize', 'Europe/Helsinki', 'America/Santiago', 'Asia/Baku', 'Asia/Beirut', 'America/Tijuana', 'Asia/Tehran', 'Pacific/Fiji', 'Asia/Tashkent'].length),
            borderWidth: 2,
            borderSkipped: false,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: false,
            }
        }
    }
});

const username_first_letters_pie = document.getElementById('username_first_letters_pie').getContext('2d');
new Chart(username_first_letters_pie, {
    type: 'pie',
    data: {
        labels: ['P', '0', '1', 'Y', '2', '3', '4', '6', 'T', '8', '9', 'A', 'J', 'N', 'C', 'F', 'S', 'M', 'O', 'L', 'K', 'I', 'B', 'D', 'R', 'V', 'E', 'G', '7', 'Z', 'U', 'H', 'X', 'W', 'Q', 'М', 'Მ', '이', '蹦', '陳'],
        datasets: [{
            data: [149, 9, 23, 48, 22, 4, 7, 2, 179, 3, 2, 480, 221, 128, 169, 75, 351, 302, 54, 125, 143, 79, 121, 160, 163, 78, 112, 84, 2, 38, 22, 115, 9, 48, 4, 1, 1, 1, 1, 1],
            backgroundColor: generateRandomColors(['P', '0', '1', 'Y', '2', '3', '4', '6', 'T', '8', '9', 'A', 'J', 'N', 'C', 'F', 'S', 'M', 'O', 'L', 'K', 'I', 'B', 'D', 'R', 'V', 'E', 'G', '7', 'Z', 'U', 'H', 'X', 'W', 'Q', 'М', 'Მ', '이', '蹦', '陳'].length),
            borderWidth: 2,
            borderSkipped: false,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: false,
            }
        }
    }
});

const daily_sessions_bar = document.getElementById('daily_sessions_bar').getContext('2d');
new Chart(daily_sessions_bar, {
    type: 'bar',
    data: {
        labels: ['2024-06-17', '2024-06-18', '2024-06-19', '2024-06-20', '2024-06-21', '2024-06-22', '2024-06-23', '2024-06-24', '2024-06-25', '2024-06-26', '2024-06-27'],
        datasets: [{
            data: [619, 1463, 1412, 1351, 1563, 1875, 1786, 1761, 1637, 1823, 2017],
            backgroundColor: generateRandomColors(['2024-06-17', '2024-06-18', '2024-06-19', '2024-06-20', '2024-06-21', '2024-06-22', '2024-06-23', '2024-06-24', '2024-06-25', '2024-06-26', '2024-06-27'].length),
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)'
            // ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: false,
                text: 'Simple Bar Chart'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const daily_tutorial_bar = document.getElementById('daily_tutorial_bar').getContext('2d');
new Chart(daily_tutorial_bar, {
    type: 'bar',
    data: {
        labels: ['2024-06-17', '2024-06-18', '2024-06-19', '2024-06-20', '2024-06-21', '2024-06-22', '2024-06-23', '2024-06-24', '2024-06-25', '2024-06-26', '2024-06-27'],
        datasets: [{
            data: [244, 270, 100, 67, 123, 110, 54, 58, 53, 145, 155],
            backgroundColor: generateRandomColors(['2024-06-17', '2024-06-18', '2024-06-19', '2024-06-20', '2024-06-21', '2024-06-22', '2024-06-23', '2024-06-24', '2024-06-25', '2024-06-26', '2024-06-27'].length),
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)'
            // ],
            borderWidth: 2,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: false,
                text: 'Simple Bar Chart'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


function easeOutQuad(t) {
    return t * (2 - t);
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easedProgress = easeOutQuad(progress);
        obj.innerHTML = Math.floor(easedProgress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const objects = document.getElementsByClassName("increment");
for (let obj of objects) {
    const targetValue = parseInt(obj.innerHTML);
    animateValue(obj, 0, targetValue, 1500);
}