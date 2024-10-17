import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
<header class="top-bar">
    <!-- Top Section with Contact Details -->
    <div class="contact">
        <div class="contact-item">
            <img src="phone.png" alt="Phone" class="contact-icon"> Call Us: +91 99406 56865, 98408 57560
        </div>
        <div class="contact-item">
            <img src="email.png" alt="Email" class="contact-icon"> Email: yunus@4dadvisory.com, safy@4dadvisory.com
        </div>
        <div class="contact-item">
            <img src="clock.png" alt="Office Hours" class="contact-icon"> Office Hrs: Mon-Sat: 9am to 17.00pm
        </div>
    </div>
</header>

<!-- Main Section -->
<header class="main-header">
    <nav class="navbar">
        <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Work</a></li>
            <img src="4D.png" alt="Fourth Dimension Advisory Logo" class="logo">
            <li><a href="#">Team</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>

    <div class="hero-section">
        <h1>Fourth Dimension Advisory</h1>
        <p>Your business challenges are our stepping stones to innovative solutions. Let us guide you to success, one strategic step at a time.</p>
        <div class="buttons">
            <a href="#" class="btn get-started">Get Started</a>
            <a href="#" class="btn contact-us">Contact Us</a>
        </div>
    </div>
</header>

<!-- Why Choose Us Section -->
<section class="choose-us">
    <h2 class="uppercase">Why choose <b>us</b></h2>
    <div class="features">
        <div class="feature-card">
            <img src="expertise.png" alt="Expertise">
            <h3>Expertise</h3>
            <p>With years of industry experience, we offer deep insights into every aspect of your operations.</p>
        </div>
        <div class="feature-card">
            <img src="data-driven.png" alt="Data-Driven Decisions">
            <h3>Data-Driven Decisions</h3>
            <p>We leverage advanced analytics to drive informed decision-making and strategic planning.</p>
        </div>
        <div class="feature-card">
            <img src="solutions.png" alt="Tailored Solutions">
            <h3>Tailored Solutions</h3>
            <p>Our services are customized to meet your unique business needs, ensuring the best outcomes.</p>
        </div>
        <div class="feature-card">
            <img src="proven-results.png" alt="Proven Results">
            <h3>Proven Results</h3>
            <p>Our approach delivers measurable improvements, from cost reductions to enhanced efficiency.</p>
        </div>
    </div>
</section>

<div class="flex w-full justify-between border border-black">
<!-- About Company Section -->
<section class="about-company">
    <h2>About <span>Company</span></h2>
    <p>At Fourth Dimension Advisory, we are an innovative consulting firm dedicated to helping businesses excel in today’s dynamic marketplace. With a focus on data-driven insights and a commitment to innovation, we empower organizations to unlock their full potential and achieve sustainable growth.</p>
</section>

<!-- Awesome Skills Section -->
<section class="skills">
    <h2>Awesome <span>Skills</span></h2>
    <div class="skill-bars">
        <div class="skill-bar">
            <span>Skill Name</span>
            <div class="progress-bar" style="width: 80%;">80%</div>
        </div>
        <div class="skill-bar">
            <span>Skill Name</span>
            <div class="progress-bar" style="width: 95%;">95%</div>
        </div>
        <div class="skill-bar">
            <span>Skill Name</span>
            <div class="progress-bar" style="width: 60%;">60%</div>
        </div>
        <div class="skill-bar">
            <span>Skill Name</span>
            <div class="progress-bar" style="width: 90%;">90%</div>
        </div>
    </div>
</section>
</div>
<!-- Vision and Mission Section -->
<section class="vision-mission">
    <div class="vision">
        <h3>Our Vision</h3>
        <p>To empower businesses with innovative, data-driven solutions, unlocking their full potential and achieving sustainable growth.</p>
        <img src="Vision.png" alt="Vision">
    </div>
    <div class="mission">
        <h3>Our Mission</h3>
        <p>Our mission is to provide expertise solutions that enhance operational efficiency, optimize costs, and drive business success through strategic analysis, insightful planning, and cutting-edge solutions.</p>
        <img src="Mission.png" alt="Mission">
    </div>
</section>
 <section class="services">
        <h2>Our Services</h2>
        <div class="service-container">
            <div class="service-list">
                <ul>
                    <li>Supply Chain Optimization</li>
                    <li>Supplier Risk Assessment</li>
                    <li>Strategic Sourcing</li>
                    <li>Inventory Management</li>
                    <li>Cost Analysis</li>
                    <li>Data-Driven Decisions</li>
                    <li>Consulting Services</li>
                </ul>
            </div>
            <div class="service-info">
                <div class="service-video">
                    <img src="service-video-thumbnail.jpg" alt="Service Video Thumbnail">
                </div>
                <p>We provide the best services to optimize your supply chain processes...</p>
                <a href="#" class="button">Learn More</a>
            </div>
        </div>
    </section>

    <section class="industries">
        <h2>Industries We Serve</h2>
        <div class="industry-grid">
            <div class="industry-item">
                <img src="apparel.jpg" alt="Apparel">
                <p>Apparel</p>
            </div>
            <div class="industry-item">
                <img src="shipping.jpg" alt="Shipping">
                <p>Shipping</p>
            </div>
            <div class="industry-item">
                <img src="spinning.jpg" alt="Spinning">
                <p>Spinning</p>
            </div>
            <div class="industry-item">
                <img src="dyeing.jpg" alt="Dyeing">
                <p>Dyeing</p>
            </div>
            <div class="industry-item">
                <img src="restaurant.jpg" alt="Restaurants">
                <p>Restaurants</p>
            </div>
            <div class="industry-item">
                <img src="leather.jpg" alt="Leather">
                <p>Leather</p>
            </div>
            <div class="industry-item">
                <img src="retail.jpg" alt="Retail">
                <p>Retail</p>
            </div>
            <div class="industry-item">
                <img src="academic.jpg" alt="Academic Institutions">
                <p>Academic Institutions</p>
            </div>
            <div class="industry-item">
                <img src="automobiles.jpg" alt="Automobiles">
                <p>Automobiles</p>
            </div>
            <div class="industry-item">
                <img src="builders.jpg" alt="Builders">
                <p>Builders</p>
            </div>
            <div class="industry-item">
                <img src="healthcare.jpg" alt="Healthcare">
                <p>Healthcare</p>
            </div>
        </div>
    </section>



  </div>
`;
