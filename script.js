document.addEventListener('DOMContentLoaded', () => {
    const postsGrid = document.getElementById('posts-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Render Posts
    function renderPosts(posts) {
        postsGrid.innerHTML = posts.map(post => `
            <article class="post-card">
                <div class="post-image">
                    <img src="${post.image}" alt="${post.title}" loading="lazy">
                </div>
                <div class="post-content">
                    <div class="post-meta">
                        <span class="post-category">${post.category}</span>
                        <span class="post-date">${post.date}</span>
                    </div>
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <a href="#" class="read-more">Read Article <span>→</span></a>
                </div>
            </article>
        `).join('');
    }

    // Initial Render
    renderPosts(blogPosts);

    // Filter Functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const category = btn.getAttribute('data-filter');

            if (category === 'all') {
                renderPosts(blogPosts);
            } else {
                const filteredPosts = blogPosts.filter(post => post.category === category);
                renderPosts(filteredPosts);
            }
        });
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
