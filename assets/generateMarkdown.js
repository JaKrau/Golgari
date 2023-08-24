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

  if (license === 'No License') {
    return 'This project has no license.';
  } 
  if (license === 'Apache 2.0') {
    return 'Apache License 2.0';
  } else if (license === 'GPLv2') {
    return 'GNU General Public License v2.0';
  } else if (license === 'GNU GPLv3') {
    return 'GNU General Public License v3.0';
  } else if (license === 'MIT') {
    return 'MIT License';
  } else if (license === 'ISC') {
    return 'ISC License';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
