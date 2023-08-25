// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeLink = `[![License](https://img.shields.io/badge/`

  switch(license) {
    case 'No License':
      return '';
    case 'Apache 2.0':
      return badgeLink + 'License-Apache_2.0-blue.svg)]' + '(https://opensource.org/licenses/Apache-2.0)';
    case 'GPLv2':
      return badgeLink + 'License-GPL_v2-blue.svg)]' + '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'GNU GPLv3':
      return badgeLink + 'License-GPLv3-blue.svg)]' + '(https://www.gnu.org/licenses/gpl-3.0)';
    case 'MIT':
      return badgeLink + 'License-MIT-yellow.svg)]' + '(https://opensource.org/licenses/MIT)';
    case 'ISC':
      return badgeLink + 'License-ISC-blue.svg)]' + '(https://opensource.org/licenses/ISC)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = 'https://choosealicense.com/licenses/';

  switch(license) {
    case 'No License':
      return '';
    case 'Apache 2.0':
      return licenseLink + 'apache-2.0/';
    case 'GPLv2':
      return licenseLink + 'gpl-2.0/';
    case 'GNU GPLv3':
      return licenseLink + 'gpl-3.0/';
    case 'MIT':
      return licenseLink + 'mit/';
    case 'ISC':
      return licenseLink + 'isc/';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
const licenseLink = renderLicenseLink(license);

  if (license === 'No License') {
    return `This project is not licensed`;
  } else {
      return `This project is licensed under the [${license}](${licenseLink}) license`
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  const licenseBadge = renderLicenseBadge(data.license);


  let tableOfContents = `
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)`
  
  return `# ${data.title}
${licenseBadge}

## Description

${data.description}

## Table of Contents

${tableOfContents}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Credits

${data.credits}

## License

${licenseSection}

## Questions

If you have any questions regarding functionality or installation, I can be reached at ${data.email} or visit my GitHub page at [${data.github}](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
