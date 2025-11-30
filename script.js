// Update last updated date
document.addEventListener('DOMContentLoaded', function () {
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        lastUpdated.textContent = today.toLocaleDateString('en-US', options);
    }

    // Function to calculate duration from start date to now
    function calculateDuration(startDateStr) {
        const startDate = new Date(startDateStr);
        const now = new Date();

        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        let durationText = '';
        if (years > 0) {
            durationText += `${years} yr${years > 1 ? 's' : ''}`;
        }
        if (months > 0) {
            if (durationText) durationText += ' ';
            durationText += `${months} mo${months > 1 ? 's' : ''}`;
        }

        return durationText || '0 mos';
    }

    // Update Atlassian SE2 duration
    const se2Duration = document.getElementById('atlassian-se2-duration');
    if (se2Duration && se2Duration.dataset.startDate) {
        se2Duration.textContent = calculateDuration(se2Duration.dataset.startDate);
    }

    // Update Atlassian total duration
    const totalDuration = document.getElementById('atlassian-total-duration');
    if (totalDuration && totalDuration.dataset.startDate) {
        const duration = calculateDuration(totalDuration.dataset.startDate);
        totalDuration.textContent = duration;
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

function toggleExperience(header) {
    const details = header.nextElementSibling;

    if (details.classList.contains('collapsed')) {
        details.classList.remove('collapsed');
        header.classList.remove('collapsed');
    } else {
        details.classList.add('collapsed');
        header.classList.add('collapsed');
    }
}

