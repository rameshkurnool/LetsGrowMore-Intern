// Select the form and input elements
const registrationForm = document.querySelector('#registration-form');
const nameInput = document.querySelector('#name');
const imageUploadInput = document.querySelector('#image-upload');
const emailInput = document.querySelector('#email');
const websiteInput = document.querySelector('#Website');
const genderInput = document.querySelector('#gender');
const skillInputs = document.querySelectorAll('input[name="skill1"], input[name="skill2"], input[name="skill3"]');

// Add event listener for form submission
registrationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting

  // Get the input values
  const name = nameInput.value;
  const image = imageUploadInput.files[0]; // get the uploaded image file
  const email = emailInput.value;
  const website = websiteInput.value;
  const gender = genderInput.value;
  const skills = Array.from(skillInputs) // convert NodeList to array
                      .filter(input => input.checked) // filter checked inputs
                      .map(input => input.value); // get the value of each checked input

  // Create a new list item element to display the registered data
  const dataListItem = document.createElement('li');
  dataListItem.innerHTML = `
    <span><strong>Name:</strong> ${name}</span><br>
    <span><strong>Image:</strong> ${image ? image.name : 'N/A'}</span><br>
    <span><strong>Email:</strong> ${email}</span><br>
    <span><strong>Website:</strong> ${website}</span><br>
    <span><strong>Gender:</strong> ${gender}</span><br>
    <span><strong>Skills:</strong> ${skills.join(', ')}</span>
  `;

  // Append the new list item element to the data list
  const dataList = document.querySelector('#data-list');
  dataList.appendChild(dataListItem);

  // Reset the form
  registrationForm.reset();
});
