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
  const typeEffect = (elementId: number, text: string, interval = 100) => {
    let index = 0;

    const type = () => {
        if (index < text.length) {
            document.getElementById(elementId).innerText += text.charAt(index);
            index++;
            setTimeout(type, interval);
        }
    };

    type();
  `,
  `
  export const changeBackgroundColor = () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD'];
    let index = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 2000);
  }
  `,
  `
  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
  }
}
  `,
]
