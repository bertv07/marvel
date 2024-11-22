

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.animated-img');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = "slideInRight 1s ease-in-out forwards";
                observer.unobserve(entry.target);
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});



//imicio

const container = document.getElementById('container');
const  registerBtn = document.getElementById('register')
const  loginBtn = document.getElementById('login')

registerBtn.addEventListener('click', () => {
    container.classList.add("active")
})

loginBtn.addEventListener('click', () => {
    container.classList.remove("active")
})