document.addEventListener("DOMContentLoaded", () => {
    const states = document.querySelectorAll(".state");

    states.forEach(state => {
        state.addEventListener("click", () => {
            const stateId = state.id;
            window.location.href = `/${stateId}`; // Redirect to the state-specific page
        });

        // Hover effect for visual feedback
        state.addEventListener("mouseenter", () => {
            state.style.fill = "#a9a9a9"; // Change color when hovering
        });

        state.addEventListener("mouseleave", () => {
            state.style.fill = ""; // Reset color when mouse leaves
        });
    });
});

document.getElementById('IN-MH').addEventListener('click', function() {
    window.location.href = '/MH';  // This will trigger the route and load MH.ejs
});

function redirectToPage() {
    const selectedValue = document.getElementById("areas").value;
    if (selectedValue) {
        window.location.href = `/${selectedValue}`; 
    }
};

function openPDF() {
    // Redirect to the PDF file
    window.location.href = '/pdfs/Orchid.pdf'; // Path to your PDF
};

function openPDFs(){
    window.location.href = '/pdfs/aryaman.pdf';
};

function openPF(){
    window.location.href = '/pdfs/Tungwa.pdf';
};

function openP(){
    window.location.href = '/pdfs/Deluxe.pdf';
};

function openpd(){
    window.location.href = '/pdfs/Prem.pdf';
};

function workpdf(){
    window.location.href = '/pdfs/Al-quba.pdf';
};

function workPDFs(){
    window.location.href = '/pdfs/Galaxy.pdf';
};

function workpd(){
    window.location.href = '/pdfs/Gulzar.pdf';
};

function workPF(){
    window.location.href = '/pdfs/Om-jai.pdf';
};

function workP(){
    window.location.href = '/pdfs/kohinoor.pdf';
};

function startpdf(){
    window.location.href = '/pdfs/DGS Heights.pdf';
};

function startPDFs(){
    window.location.href = '/pdfs/Manhar Residency.pdf';
};

function startpd(){
    window.location.href = '/pdfs/Neelyog Aashiyana.pdf';
};

function startPF(){
    window.location.href = '/pdfs/Tatva.pdf';
};

function startP(){
    window.location.href = '/pdfs/Vardhman Empire.pdf'
};


 
  
