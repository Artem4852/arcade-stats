const finished_ended_early_pie = document.getElementById('finished_ended_early_pie').getContext('2d');
new Chart(finished_ended_early_pie, {
    type: 'pie',
    data: {
        labels: [{{ labels_finished_ended_early }}],
        datasets: [{
            data: [{{ data_finished_ended_early }}],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
            ],
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
        labels: [{{ labels_approved_rejected }}],
        datasets: [{
            data: [{{ data_approved_rejected }}],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
            ],
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
        labels: [{{ labels_timezone_regions }}],
        datasets: [{
            data: [{{ data_timezone_regions }}],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
            ],
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
        labels: [{{ labels_timezones_specific }}],
        datasets: [{
            data: [{{ data_timezones_specific }}],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
            ],
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
        labels: [{{ labels_username_first_letters }}],
        datasets: [{
            data: [{{ data_username_first_letters }}],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
            ],
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
        labels: [{{ labels_daily_sessions }}],
        datasets: [{
            data: [{{ data_daily_sessions }}],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
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
        labels: [{{ labels_daily_tutorial }}],
        datasets: [{
            data: [{{ data_daily_tutorial }}],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
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