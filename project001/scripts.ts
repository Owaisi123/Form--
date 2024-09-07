// scripts.ts

// Function to handle form submission
const handleSubmit = (event: Event) => {
    event.preventDefault(); // Prevent the default form submission

    const form = document.getElementById('resume-form') as HTMLFormElement;
    const formData = new FormData(form);

    // Extract data from form
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const city = formData.get('city') as string;
    const school = formData.get('school') as string;
    const qualification = formData.get('qualification') as string;
    const degree = formData.get('degree') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const skills = formData.get('skills') as string;

    // Create CV content
    const cvContent = `
        <h1>Resume</h1>
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>City:</strong> ${city}</p>
        
        <h2>Education</h2>
        <p><strong>School:</strong> ${school}</p>
        <p><strong>Qualification:</strong> ${qualification}</p>
        <p><strong>Degree:</strong> ${degree}</p>

        <h2>Work Experience</h2>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;

    // Display CV
    const cvOutput = document.getElementById('cv-output') as HTMLDivElement;
    const cvContentDiv = document.getElementById('cv-content') as HTMLDivElement;
    cvContentDiv.innerHTML = cvContent;
    cvOutput.style.display = 'block';
}

// Add event listener to form
const form = document.getElementById('resume-form') as HTMLFormElement;
form.addEventListener('submit', handleSubmit);
