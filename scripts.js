document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
    });

    // Modal Logic for References Page
    const modal = document.getElementById('ref-modal');
    if (modal) {
        const modalContent = modal.querySelector('.modal-body');
        const defaultData = {
            'pharma': `
                <h3>Pharmaceutical Industry</h3>
                <ul>
                    <li><strong>Places:</strong> Lek (SLO), Krka (SLO), Pliva (HR), Richter Gedeon (H), Egis (H), Biogal (H), Lachema (CZ), ICN Rt (HU), Janssen Pharmaceutica (B), Sandoz GmbH (A) Hovione SA (P), Lonza AG(CH)</li>
                    <li><strong>Scale:</strong> Laboratory, Pilot plant testings and Full Scale</li>
                    <li><strong>Targets:</strong> COD, organics, aromatics, N-NH4, Ntot</li>
                </ul>
            `,
            'coke': `
                <h3>Coke Plants</h3>
                <ul>
                    <li><strong>Places:</strong> Zenica (BIH), Bakar (HR), Nova Hut (CZ), Dunaffer (HU)</li>
                    <li><strong>Scale:</strong> Laboratory, Pilot plant testings and Full Scale</li>
                    <li><strong>Targets:</strong> COD, phenol, CNS, CN, Ntot</li>
                </ul>
            `,
            'chem': `
                <h3>Chemical Industry</h3>
                <ul>
                    <li><strong>Places:</strong> Bayer (D), Melamin (SLO), INA Oki (HR), Aero (SLO), Color (SLO), EVM Rt (H), TVK Rt (H), Givaudan (CH)</li>
                    <li><strong>Scale:</strong> Laboratory, Pilot plant testings and Full Scale</li>
                    <li><strong>Targets:</strong> COD, phenol, aromatics, detergents, HCHO, Ntot</li>
                </ul>
            `,
            'other': `
                <h3>Other Industry</h3>
                <ul>
                    <li><strong>Types:</strong> Olive Oil, Pulp and paper mill, Sugar factory, Yeast fermentation, Gasification of coal, Pig farm, Tannery, Rendering plant, Landfill, Petrochemical, Coca-Cola</li>
                    <li><strong>Scale:</strong> Laboratory, Pilot plant testings and Full Scale</li>
                    <li><strong>Targets:</strong> COD, oil, SS, lignin, sugar, color, betaine, aromatics, residuals, Ntot</li>
                </ul>
            `
        };

        document.querySelectorAll('.ref-card').forEach(card => {
            card.addEventListener('click', () => {
                const category = card.getAttribute('data-ref');
                modalContent.innerHTML = defaultData[category] + '<p style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(0,0,0,0.05); text-align: center; color: var(--color-text-main);">For more details, <a href="index.html#contact" style="color: var(--color-accent); text-decoration: none; font-weight: 600;">contact us</a>.</p>';
                modal.classList.add('active');
            });
        });

        document.querySelector('.modal-close').addEventListener('click', () => {
            modal.classList.remove('active');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
});
