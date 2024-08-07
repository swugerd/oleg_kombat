export const bgFunctionsTexts = [
  `
  export function displayCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    console.log(\`\${hours}:\${minutes}:\${seconds}\`)
  }
  `,
  `
  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
  }
  `,
  `
  function setup3() {
    container.innerHTML = '';
    const width = window.innerWidth;
    const height = window.innerHeight;
  }
  `,
  `
  function setup4() {
    container.innerHTML = '';
    const width = window.innerWidth;
    const height = window.innerHeight;
  }
  `,
]
