// Professional Portfolio JavaScript Logic
// Ar-Jay C. Agbayani

// Project Data
const PROJECTS = [
  {
    id: 'inventory-system',
    title: 'Web-Based Sales & Inventory System',
    client: 'Successo Comida Food Corporation',
    role: 'Lead Architect & Developer',
    year: '2024',
    category: 'enterprise',
    description: 'Designed and implemented a comprehensive real-time system to track daily sales, automatically deduct inventory, and forecast stock levels using predictive algorithms.',
    tech: ['PHP', 'JavaScript', 'Tailwind CSS', 'SQL', 'Predictive AI Heuristics'],
    link: '#',
    github: '#'
  },
  {
    id: 'asset-management',
    title: 'Warehouse Asset Management Platform',
    client: 'Successo Comida Food Corporation',
    role: 'Lead Developer',
    year: '2024',
    category: 'enterprise',
    description: 'Developed an internal tracking dashboard that monitors and logs high-value warehouse equipment, assets, and procurement flows across multiple corporate depots.',
    tech: ['PHP', 'MySQL', 'JavaScript (ES6)', 'Tailwind CSS'],
    link: '#',
    github: '#'
  },
  {
    id: 'procurement-system',
    title: 'Digital Procurement Portal',
    client: 'Successo Comida Food Corporation',
    role: 'Full-Stack Developer',
    year: '2024',
    category: 'enterprise',
    description: 'A custom pipeline automating purchase requests, vendor bidding tables, supplier approvals, and order tracking to eliminate spreadsheet overhead.',
    tech: ['PHP', 'Tailwind CSS', 'Alpine.js', 'MySQL'],
    link: '#',
    github: '#'
  },
  {
    id: 'payroll-system',
    title: 'Automated Employee Payroll Engine',
    client: 'Successo Comida Food Corporation',
    role: 'Lead Developer',
    year: '2024',
    category: 'enterprise',
    description: 'Built a secure internal application to process monthly staff compensation, calculate tax deductions, track hours, and generate automated slips.',
    tech: ['PHP', 'Firebase DB', 'JavaScript', 'Tailwind CSS'],
    link: '#',
    github: '#'
  },
  {
    id: 'proctor-manager',
    title: 'Exam Proctor Manager Utility',
    client: 'STI College Marikina',
    role: 'Creator & Administrator',
    year: '2024',
    category: 'academic',
    description: 'Created a customized web utility to assist exam administrators in managing proctoring schedules, balancing faculty loads, and monitoring active sessions.',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript', 'GitHub Pages'],
    link: 'https://sirjeii.github.io/proctor/',
    github: 'https://github.com/sirjeii/proctor'
  },
  {
    id: 'photobooth-app',
    title: 'Browser-Based Selfphotobooth',
    client: 'STI College Marikina / Events',
    role: 'Creator & Developer',
    year: '2024',
    category: 'utilities',
    description: 'Developed a client-side photobooth application that accesses user webcams, applies college-branded overlay frames, and compiles interactive photo grids.',
    tech: ['HTML5 Canvas', 'Tailwind CSS', 'JavaScript (ES6+)', 'Local Storage'],
    link: 'https://sirjeii.github.io/slfptb/',
    github: 'https://github.com/sirjeii/slfptb'
  },
  {
    id: 'attendance-system',
    title: 'Event Attendance Registry',
    client: 'STI College Marikina',
    role: 'Full-Stack Developer',
    year: '2023',
    category: 'academic',
    description: 'Designed and deployed a quick-scan digital roster system for tracking attendee participation, speeds up student registration for campus-wide festivals.',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Firebase Firestore'],
    link: 'https://sirjeii.github.io/esas/',
    github: 'https://github.com/sirjeii/esas'
  },
  {
    id: 'sabay-byahe',
    title: 'SabayByahePH Ride-Share UI',
    client: 'Academic Prototype',
    role: 'UX Researcher & Prototyper',
    year: '2023',
    category: 'utilities',
    description: 'Built an interactive, mobile-first micro-carpooling concept map focusing on commuter routes, user verification flows, and driver alignment screens.',
    tech: ['Figma Prototyping', 'Tailwind CSS', 'JavaScript UI-Mockups'],
    link: '#',
    github: '#'
  },
  {
    id: 'tagisan-talino',
    title: 'Tagisan ng Talino Quiz Portal',
    client: 'STI College Marikina',
    role: 'Web Developer',
    year: '2024',
    category: 'academic',
    description: 'Developed the official online registration and scoring interface for the annual academic quiz bee competition, streamlining student registration.',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript', 'GitHub Pages'],
    link: 'https://sirjeii.github.io/sticmtns/',
    github: 'https://github.com/sirjeii/sticmtns'
  },
  {
    id: 'esports-tournament',
    title: 'Esports Tournament Registration',
    client: 'STI College Marikina',
    role: 'Web Developer',
    year: '2025',
    category: 'academic',
    description: 'Formed a visual registration site and team roster manager to coordinate student sign-ups, schedule qualifiers, and display brackets for tournament games.',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Firebase Realtime DB'],
    link: 'https://sirjeii.github.io/sticmesports/',
    github: 'https://github.com/sirjeii/sticmesports'
  }
];

// Initialize application components when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initLocalTime();
  initThemeToggle();
  renderProjects('all');
  initProjectFilters();
  initContactForm();
});

// 1. Live Marikina Local Time Clock (GMT+8)
function initLocalTime() {
  const clockElement = document.getElementById('local-time-clock');
  if (!clockElement) return;

  function updateClock() {
    const options = {
      timeZone: 'Asia/Manila',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    const timeFormatter = new Intl.DateTimeFormat([], options);
    clockElement.textContent = timeFormatter.format(new Date()) + ' (PHT)';
  }

  updateClock();
  setInterval(updateClock, 1000);
}

// 2. High Contrast Theme Toggling (Light Cream vs. Swiss Carbon)
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const toggleLabel = document.getElementById('theme-toggle-label');
  
  if (!toggleBtn) return;

  // Check persisted storage or system defaults
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    if (toggleLabel) toggleLabel.textContent = '01 / Light Mode';
  } else {
    document.documentElement.classList.remove('dark');
    if (toggleLabel) toggleLabel.textContent = '01 / Dark Mode';
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    if (toggleLabel) {
      toggleLabel.textContent = isDark ? '01 / Light Mode' : '01 / Dark Mode';
    }
  });
}

// 3. Render Projects Grid dynamically
function renderProjects(categoryFilter) {
  const gridContainer = document.getElementById('projects-grid-container');
  if (!gridContainer) return;

  const filtered = categoryFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === categoryFilter);

  gridContainer.innerHTML = '';

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="col-span-full border-2 border-dashed border-black dark:border-white p-12 text-center font-mono">
        No projects found for the selected category.
      </div>
    `;
    return;
  }

  filtered.forEach(project => {
    const card = document.createElement('div');
    card.className = 'flex flex-col justify-between p-6 bg-[#FAF9F5] dark:bg-[#1C1C1E] border-2 border-black dark:border-white hover-lift transition-all-custom';
    
    // Tech tags HTML markup
    const tagsMarkup = project.tech
      .map(t => `<span class="px-2 py-0.5 border border-black/20 dark:border-white/20 font-mono text-[10px] uppercase text-zinc-600 dark:text-zinc-400">${t}</span>`)
      .join(' ');

    const linksMarkup = `
      <div class="flex items-center gap-4 mt-6 pt-4 border-t border-black/10 dark:border-white/10">
        ${project.link !== '#' ? `
          <a href="${project.link}" target="_blank" class="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase hover:text-[#FF3B30] dark:hover:text-[#FF453A] transition-colors">
            Live Link ↗
          </a>
        ` : ''}
        ${project.github !== '#' ? `
          <a href="${project.github}" target="_blank" class="inline-flex items-center gap-1 font-mono text-xs text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
            Source ↗
          </a>
        ` : ''}
        ${project.link === '#' && project.github === '#' ? `
          <span class="font-mono text-xs text-zinc-400 italic">Enterprise Internal Ops</span>
        ` : ''}
      </div>
    `;

    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between font-mono text-xs text-zinc-500 mb-2">
          <span>${project.client}</span>
          <span>${project.year}</span>
        </div>
        <h3 class="text-xl font-bold uppercase tracking-tight font-sans text-black dark:text-white mb-2">
          ${project.title}
        </h3>
        <p class="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans mt-3 mb-4">
          ${project.description}
        </p>
      </div>
      <div>
        <div class="flex flex-wrap gap-1.5 mt-2">
          ${tagsMarkup}
        </div>
        ${linksMarkup}
      </div>
    `;
    gridContainer.appendChild(card);
  });
}

// 4. Initialize category filters and toggle active button state
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const category = btn.getAttribute('data-filter');
      
      // Update button visual states
      filterButtons.forEach(b => {
        b.classList.remove('bg-black', 'text-white', 'dark:bg-white', 'dark:text-black');
        b.classList.add('bg-transparent', 'text-black', 'dark:text-white');
      });
      
      btn.classList.add('bg-black', 'text-white', 'dark:bg-white', 'dark:text-black');
      btn.classList.remove('bg-transparent', 'text-black', 'dark:text-white');

      // Filter and render
      renderProjects(category);
    });
  });
}

// 5. Contact Form submission handler (Mocking feedback)
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedbackMsg = document.getElementById('form-feedback');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    if (feedbackMsg) {
      feedbackMsg.innerHTML = `
        <div class="p-4 border-2 border-black dark:border-white bg-[#e8f5e9] dark:bg-[#1b5e20] text-emerald-900 dark:text-emerald-100 font-mono text-xs">
          [SUCCESS] Thank you, ${name}. Message buffered. I will follow up at ${email}.
        </div>
      `;
      form.reset();
      setTimeout(() => {
        feedbackMsg.innerHTML = '';
      }, 5000);
    }
  });
}
