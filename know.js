import { fillFooter, fillHeader, updateCart } from "./util.js";
fillHeader();
fillFooter();
const leaders = [
  {
    name: "Aditi Mehra",
    role: "Chief Executive Officer",
    says_about_company: "Working here has been the most rewarding journey of my career. The vision, the culture, and the people are unmatched.",
    linkedin: "https://linkedin.com/in/aditimehra",
    instagram: "https://instagram.com/aditimehra_ceo",
    email: "mailto:aditi.mehra@example.com",
    imageUrl: "https://plus.unsplash.com/premium_photo-1669882305339-8e2cbb81903e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0"
  },
  {
    name: "Rohan Kapoor",
    role: "Chief Technology Officer",
    says_about_company: "Innovation is not just encouraged—it's expected. We move fast and build with purpose.",
    linkedin: "https://linkedin.com/in/rohankapoor",
    instagram: "https://instagram.com/rohan.tech",
    email: "mailto:rohan.kapoor@example.com",
    imageUrl: "https://plus.unsplash.com/premium_photo-1682096358356-5ffbe52b7aa1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
  },
  {
    name: "Sneha Rao",
    role: "Founder / Co-Founder",
    says_about_company: "What excites me is how deeply we care about solving real user problems. It's a builder's dream.",
    linkedin: "https://linkedin.com/in/sneharao",
    instagram: "https://instagram.com/sneha.rao",
    email: "mailto:sneha.rao@example.com",
    imageUrl: "https://plus.unsplash.com/premium_photo-1688739352540-a75b102d8551?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0"
  },
  {
    name: "Aarav Verma",
    role: "Chief Operating Officer (COO)",
    says_about_company: "We balance growth with discipline. It's thrilling to drive impact at scale with a razor-sharp team.",
    linkedin: "https://linkedin.com/in/aaravverma",
    instagram: "https://instagram.com/aarav_ops",
    email: "mailto:aarav.verma@example.com",
    imageUrl: "https://images.unsplash.com/photo-1484972759836-b93f9ef2b293?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
  },
  {
    name: "Meera Joshi",
    role: "General Manager",
    says_about_company: "Every campaign is a chance to tell a compelling story. We're bold, data-driven, and fearless.",
    linkedin: "https://linkedin.com/in/meerajoshi",
    instagram: "https://instagram.com/meera_gm",
    email: "mailto:meera.joshi@example.com",
    imageUrl: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0"
  },
  {
    name: "Kunal Shah",
    role: "Restaurant Manager",
    says_about_company: "Culture is our strongest asset. We don’t just hire talent — we build careers and foster community.",
    linkedin: "https://linkedin.com/in/kunalshah",
    instagram: "https://instagram.com/kunal.rm",
    email: "mailto:kunal.shah@example.com",
    imageUrl: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
  },
  {
    name: "Abhishek Upadhaya",
    role: "Executive Chef",
    says_about_company: "Culture is our strongest asset. We don’t just hire talent — we build careers and foster community.",
    linkedin: "https://linkedin.com/in/abhishekUpadhaya",
    instagram: "https://instagram.com/chef.abhishek",
    email: "mailto:abhi.upadhaya@example.com",
    imageUrl: "https://images.unsplash.com/photo-1489980478712-2ab535aa775f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
  }
];



function createLeader(item, index){
    const parentDiv = document.createElement("div");
    parentDiv.classList.add('leader-card');
    
    parentDiv.innerHTML = index %2 == 0 ?`
            <div class="leader-image">
                    <image alt="Chief chef" src=${item.imageUrl}></image>
                    <div class="overlay">
                      <div class="socials">
                            <a href="${item.instagram}" target="_blank"><span class="instagram"><i class="fa-brands fa-instagram"></i></span></a>
                            <a href="${item.linkedin}" target="_blank"><span class="linkedin"><i class="fa-brands fa-linkedin"></i></span></a>
                            <a href="mailto:${item.email}" target="_blank"><span class="gmail"><i class="fa-solid fa-m"></i></span> </a>
                            
                            
                          </div>
                    </div>
                </div>
                <div class="leader-details">
                    <h1 class="leader-name">${item.name}</h1>
                    <h2 class="leader-role">${item.role}</h2>
                    <p class="leader-description">&quot;${item.says_about_company}&quot;</p>
                </div>
    ` : ` 
                <div class="leader-details">
                    <h1 class="leader-name">${item.name}</h1>
                    <h2 class="leader-role">${item.role}</h2>
                    <p class="leader-description">	&quot;${item.says_about_company}	&quot;</p>
                </div>
                <div class="leader-image">
                    <image alt="Chief chef" src=${item.imageUrl}></image>
                    <div class="overlay">
                      <div class="socials">
                            <a href="${item.linkedin}" target="_blank"><span class="instagram"><i class="fa-brands fa-instagram"></i></span></a>
                            <a href="${item.linkedin}" target="_blank"><span class="linkedin"><i class="fa-brands fa-linkedin"></i></span></a>
                            <a href="mailto:${item.email}" target="_blank"><span class="gmail"><i class="fa-solid fa-m"></i></span> </a>
                            
                            
                          </div>
                    </div>
                    
                </div>`
    return parentDiv
}
function renderLeaders(){
    const parent = document.getElementById("leaders")

    leaders.forEach((item, index)=>parent.appendChild(createLeader(item, index)))
}
renderLeaders()